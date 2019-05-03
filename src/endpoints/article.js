const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param fetch
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*>}
	 */
	async getArticles({page, pageSize = 50, sort}) {
		return this.fetch(buildUrl('article', {page, pageSize, sort}))
	},

	/**
	 * @returns {Promise<void>}
	 */
	async createArticle(body) {
		return this.fetch('article', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<Promise|*|Promise<*>|Promise<Response>|never>}
	 */
	async getArticleCount() {
		return this.fetch('article/count')
	},

	/**
	 * @param id
	 * @returns {Promise<Promise|*|Promise<*>|Promise<Response>|never>}
	 */
	async deleteArticleById(id) {
		return this.fetch(`article/id/${id}`, {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<Promise|*|Promise<*>|Promise<Response>|never>}
	 */
	async getArticleById(id) {
		return this.fetch(`article/id/${id}`)
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<void>}
	 */
	async updateArticleById({id, body}) {
		return this.fetch(`article/id/${id}`, {method: 'PUT', body})
	},

	/**
	 * @param id
	 * @param articleImageId
	 * @param preview
	 * @param scaleWidth
	 * @param scaleHeight
	 * @returns {Promise<Promise|*|Promise<*>|Promise<Response>|never>}
	 */
	async getArticleImage({id, articleImageId, preview = false, scaleWidth, scaleHeight}) {
		return this.fetch(buildUrl(`article/id/${id}/downloadArticleImage`, {articleImageId, preview, scaleHeight, scaleWidth}))
	},

	/**
	 * @param id
	 * @param name
	 * @param mainImage
	 * @param body
	 * @returns {Promise<Promise|*|Promise<*>|Promise<Response>|never>}
	 */
	async uploadArticleImage({id, name, mainImage}, body) {
		return this.fetch(buildUrl(`article/id/${id}/uploadArticleImage`, {name, mainImage}), {method: 'POST', body})
	}
}
