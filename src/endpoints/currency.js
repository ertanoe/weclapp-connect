const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCurrencies(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('currency', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCompanyCurrency(fetch) {
		return fetch('currency/companyCurrency')
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCurrencyCount(fetch) {
		return fetch('currency/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCurrencyById(fetch, id) {
		return fetch(buildUrl(`currency/id/${id}`, {id}))
	}
}
