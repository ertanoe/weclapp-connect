const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCommercialLanguages(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('commercialLanguage', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCommercialLanguageCount(fetch) {
		return fetch('commercialLanguage/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCommercialLanguageById(fetch, id) {
		return fetch(buildUrl(`commercialLanguage/id/${id}`, {id}))
	}
}
