const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getFulfillmentProviders(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('fulfillmentProvider', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getFulfillmentProviderCount(fetch) {
		return fetch('fulfillmentProvider/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getFulfillmentProviderById(fetch, id) {
		return fetch(buildUrl(`fulfillmentProvider/id/${id}`, {id}))
	}
}
