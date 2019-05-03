const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param resource
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getMetaQueryFilterProperties(fetch, resource) {
		return fetch(buildUrl('meta/queryFilterProperties', {resource}))
	},

	/**
	 * @param resource
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getMetaQuerySortProperties(fetch, resource) {
		return fetch(buildUrl('meta/querySortProperties', {resource}))
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getMetaRessources(fetch) {
		return fetch('meta/resources')
	}
}
