const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getArticlePrices(fetch, {page, pageSize, sort}) {
		return fetch(buildUrl('articlePrice', {page, pageSize, sort}))
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getArticlePriceCount(fetch) {
		return fetch('articlePrice/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getArticlePriceById(fetch, id) {
		return fetch(buildUrl(`articlePrice/id/${id}`, {id}))
	}
}
