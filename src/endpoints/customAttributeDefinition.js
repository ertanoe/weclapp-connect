const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomAttributeDefinitions({page, pageSize, sort}) {
		return this.fetch(buildUrl('customAttributeDefinition', {page, pageSize, sort}))
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomAttributeDefinitionCount() {
		return this.fetch('customAttributeDefinition/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomAttributeDefinitionById(id) {
		return this.fetch(buildUrl(`customAttributeDefinition/id/${id}`, {id}))
	}
}
