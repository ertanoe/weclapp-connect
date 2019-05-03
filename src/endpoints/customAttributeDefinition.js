const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomAttributeDefinitions(fetch, {page, pageSize, sort}) {
		return fetch(buildUrl('customAttributeDefinition', {page, pageSize, sort}))
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomAttributeDefinitionCount(fetch) {
		return fetch('customAttributeDefinition/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomAttributeDefinitionById(fetch, id) {
		return fetch(buildUrl(`customAttributeDefinition/id/${id}`, {id}))
	}
}
