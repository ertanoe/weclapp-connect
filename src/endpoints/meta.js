const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param resource
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getMetaQueryFilterProperties(resource) {
		return this.fetch(buildUrl('meta/queryFilterProperties', {resource}))
	},

	/**
	 * @param resource
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getMetaQuerySortProperties(resource) {
		return this.fetch(buildUrl('meta/querySortProperties', {resource}))
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getMetaRessources() {
		return this.fetch('meta/resources')
	}
}
