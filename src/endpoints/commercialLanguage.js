const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCommercialLanguages({page, pageSize, sort}) {
		return this.fetch(buildUrl('commercialLanguage', {page, pageSize, sort}))
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCommercialLanguageCount() {
		return this.fetch('commercialLanguage/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCommercialLanguageById(id) {
		return this.fetch(buildUrl(`commercialLanguage/id/${id}`, {id}))
	}
}
