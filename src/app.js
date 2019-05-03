const fetch = require('node-fetch')
const path = require('path')
const fs = require('fs')

/**
 * Creates a new weclapp instance
 * @param username Your username
 * @param tenant Your tenant
 * @param apikey Your apikey
 */
module.exports = async ({username, tenant, apikey}) => {

	const auth = {
		authToken: `Basic ${Buffer.from(`${username}:${apikey}`, 'ascii').toString('base64')}`,
		username,
		tenant,
		apiKey: apikey
	}

	const weclapp = {
		user: null,

		/**
		 * Makes a request to the weclapp rest-api
		 * @param endpoint Endpoint
		 * @param method Request method, GET by default
		 * @param body Request body
		 * @returns {Promise<*>}
		 */
		async fetch(endpoint, {method = 'GET', body} = {}) {
			const {tenant, authToken} = auth
			method = method.toUpperCase()

			// TODO: Make api version changable
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
	}

	// Check credentials
	return weclapp.fetch('user/currentUser').then(user => {

		// Resolve endpoints
		const endpoints = './src/endpoints'
		const modules = fs.readdirSync(path.resolve(endpoints)).map(v => {
			const module = require(path.resolve(endpoints, v))

			for (const [name, fn] of Object.entries(module)) {
				module[name] = fn.bind(weclapp)
			}

			return module
		}).reduce((pv, cv) => ({...pv, ...cv}), {})

		return {
			user: user && user.result,
			...weclapp,
			...modules
		}
	})
}
