const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getFulfillmentProviders({page, pageSize, sort}) {
		return this.fetch(buildUrl('fulfillmentProvider', {page, pageSize, sort}))
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getFulfillmentProviderCount() {
		return this.fetch('fulfillmentProvider/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getFulfillmentProviderById(id) {
		return this.fetch(buildUrl(`fulfillmentProvider/id/${id}`, {id}))
	}
}
