const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomAttributeDefinitions(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('customAttributeDefinition', {page, pageSize, sort, ...rest}))
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
	},

	/**
	 * @param id's string
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomAttributeDefinitionByIds(fetch, ids) {
		return fetch(buildUrl(`customAttributeDefinition?id-in=[${ids}]`))
	}
}
