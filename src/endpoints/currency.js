const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCurrencies({page, pageSize, sort}) {
		return this.fetch(buildUrl('currency', {page, pageSize, sort}))
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCompanyCurrency() {
		return this.fetch('currency/companyCurrency')
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCurrencyCount() {
		return this.fetch('currency/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCurrencyById(id) {
		return this.fetch(buildUrl(`currency/id/${id}`, {id}))
	}
}
