const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getVariantArticleAttributes({page, pageSize, sort}) {
		return this.fetch(buildUrl('variantArticleAttribute', {page, pageSize, sort}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createVariantArticleAttribute(body) {
		return this.fetch('variantArticleAttribute', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getVariantArticleAttributeCount() {
		return this.fetch('variantArticleAttribute/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteVariantArticleAttributeById(id) {
		return this.fetch(buildUrl(`variantArticleAttribute/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getVariantArticleAttributeById(id) {
		return this.fetch(buildUrl(`variantArticleAttribute/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateVariantArticleAttributeForId(id, body) {
		return this.fetch(buildUrl(`variantArticleAttribute/id/${id}`, {id}), {method: 'PUT', body})
	}
}
