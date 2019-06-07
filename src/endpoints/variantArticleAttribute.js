const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getVariantArticleAttributes(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('variantArticleAttribute', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createVariantArticleAttribute(fetch, body) {
		return fetch('variantArticleAttribute', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getVariantArticleAttributeCount(fetch) {
		return fetch('variantArticleAttribute/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteVariantArticleAttributeById(fetch, id) {
		return fetch(buildUrl(`variantArticleAttribute/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getVariantArticleAttributeById(fetch, id) {
		return fetch(buildUrl(`variantArticleAttribute/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateVariantArticleAttributeForId(fetch, id, body) {
		return fetch(buildUrl(`variantArticleAttribute/id/${id}`, {id}), {method: 'PUT', body})
	}
}
