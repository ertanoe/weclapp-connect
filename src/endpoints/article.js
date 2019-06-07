const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param fetch
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*>}
	 */
	async getArticles(fetch, {page, pageSize = 50, sort, ...rest}) {
		return fetch(buildUrl('article', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @returns {Promise<void>}
	 */
	async createArticle(fetch, body) {
		return fetch('article', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<Promise|*|Promise<*>|Promise<Response>|never>}
	 */
	async getArticleCount(fetch) {
		return fetch('article/count')
	},

	/**
	 * @param id
	 * @returns {Promise<Promise|*|Promise<*>|Promise<Response>|never>}
	 */
	async deleteArticleById(fetch, id) {
		return fetch(`article/id/${id}`, {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<Promise|*|Promise<*>|Promise<Response>|never>}
	 */
	async getArticleById(fetch, id) {
		return fetch(`article/id/${id}`)
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<void>}
	 */
	async updateArticleById(fetch, {id, body, ...rest}) {
		return fetch(`article/id/${id}`, {method: 'PUT', body: {...body, ...rest}})
	},

	/**
	 * @param id
	 * @param articleImageId
	 * @param preview
	 * @param scaleWidth
	 * @param scaleHeight
	 * @returns {Promise<Promise|*|Promise<*>|Promise<Response>|never>}
	 */
	async getArticleImage(fetch, {id, articleImageId, preview = false, scaleWidth, scaleHeight, ...rest}) {
		return fetch(buildUrl(`article/id/${id}/downloadArticleImage`, {articleImageId, preview, scaleHeight, scaleWidth, ...rest}))
	},

	/**
	 * @param id
	 * @param name
	 * @param mainImage
	 * @param body
	 * @returns {Promise<Promise|*|Promise<*>|Promise<Response>|never>}
	 */
	async uploadArticleImage(fetch, {id, name, mainImage}, body) {
		return fetch(buildUrl(`article/id/${id}/uploadArticleImage`, {name, mainImage}), {method: 'POST', body})
	}
}
