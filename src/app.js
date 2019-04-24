const fetch = require('node-fetch')

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
		async request(endpoint, {method = 'GET', body} = {}) {
			const {tenant, authToken} = auth
			method = method.toUpperCase()

			// TODO: Make api version changable
			return fetch(`https://${tenant}.weclapp.com/webapp/api/v1/${endpoint}`, {
				...(method !== 'GET' && {body: JSON.stringify(body)}),
				method,
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
					'Authorization': authToken
				}
			}).then(res => res.ok ? res.json() : Promise.reject(res))
		}
	}

	// Check credentials
	return weclapp.request('user/currentUser').then(user => {
		weclapp.user = user && user.result
		return weclapp
	})
}
