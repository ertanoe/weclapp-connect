const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getArticleSupplySources(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('articleSupplySource', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createArticleSupplySource(fetch, body) {
		return fetch('articleSupplySource', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getArticleSupplySourceCount(fetch) {
		return fetch('articleSupplySource/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getArticleSupplySourceById(fetch, id) {
		return fetch(buildUrl(`articleSupplySource/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateArticleSupplySourceForId(fetch, id, body) {
		return fetch(buildUrl(`articleSupplySource/id/${id}`, {id}), {method: 'PUT', body})
	}
}
