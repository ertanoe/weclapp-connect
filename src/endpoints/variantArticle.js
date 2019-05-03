const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getVariantArticles({page, pageSize, sort}) {
		return this.fetch(buildUrl('variantArticle', {page, pageSize, sort}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createVariantArticle(body) {
		return this.fetch('variantArticle', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getVariantArticleCount() {
		return this.fetch('variantArticle/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteVariantArticleById(id) {
		return this.fetch(buildUrl(`variantArticle/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getVariantArticleById(id) {
		return this.fetch(buildUrl(`variantArticle/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateVariantArticleForId(id, body) {
		return this.fetch(buildUrl(`variantArticle/id/${id}`, {id}), {method: 'PUT', body})
	}
}
