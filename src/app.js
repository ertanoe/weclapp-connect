const fetch = require('node-fetch')
const path = require('path')
const fs = require('fs')

/**
 * Creates a new weclapp instance
 * @param username Your username
 * @param tenant Your tenant
 * @param apikey Your apikey
 */
module.exports = function ({username, tenant, apikey}) {
	const authToken = `Basic ${Buffer.from(`${username}:${apikey}`, 'ascii').toString('base64')}`

	/**
	 * Makes a request to the weclapp rest-api
	 * @param endpoint Endpoint
	 * @param method Request method, GET by default
	 * @param body Request body
	 * @returns {Promise<*>}
	 */
	async function fetchAPI(endpoint, {method = 'GET', body} = {}) {
		method = method.toUpperCase()

		return fetch(`https://${tenant}.weclapp.com/webapp/api/v1/${endpoint}`, {
			...(body && {body: JSON.stringify(body)}),
			method,
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': authToken
			}
		}).then(res => {

			// Check if response was successful
			if (!res.ok) {
				throw res
			}

			return res.headers.get('content-type').includes('application/json') ? res.json() : res.arrayBuffer()
		})
	}

	// Resolve endpoints
	const endpoints = `${__dirname}/endpoints`
	const modules = fs.readdirSync(path.resolve(endpoints))
		.map(v => require(path.join(endpoints, v)))
		.reduce((pv, cv) => ({...pv, ...cv}), {})

	// Bind fetch
	for (const [name, fn] of Object.entries(modules)) {
		modules[name] = fn.bind(null, fetchAPI)
	}

	return {
		...modules,
		fetch: fetchAPI
	}
}
