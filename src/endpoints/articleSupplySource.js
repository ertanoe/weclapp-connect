const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getArticleSupplySources({page, pageSize, sort}) {
		return this.fetch(buildUrl('articleSupplySource', {page, pageSize, sort}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createArticleSupplySource(body) {
		return this.fetch('articleSupplySource', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getArticleSupplySourceCount() {
		return this.fetch('articleSupplySource/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getArticleSupplySourceById(id) {
		return this.fetch(buildUrl(`articleSupplySource/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateArticleSupplySourceById(id, body) {
		return this.fetch(buildUrl(`articleSupplySource/id/${id}`, {id}), {method: 'PUT', body})
	}
}
