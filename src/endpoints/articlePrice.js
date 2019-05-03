const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getArticlePrices({page, pageSize, sort}) {
		return this.fetch(buildUrl('articlePrice', {page, pageSize, sort}))
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getArticlePriceCount() {
		return this.fetch('articlePrice/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getArticlePriceById(id) {
		return this.fetch(buildUrl(`articlePrice/id/${id}`, {id}))
	}
}
