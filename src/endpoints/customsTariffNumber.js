const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomsTariffNumbers(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('customsTariffNumber', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createCustomsTariffNumber(fetch, body) {
		return fetch('customsTariffNumber', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomsTariffNumberCount(fetch) {
		return fetch('customsTariffNumber/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteCustomsTariffNumberById(fetch, id) {
		return fetch(buildUrl(`customsTariffNumber/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomsTariffNumberById(fetch, id) {
		return fetch(buildUrl(`customsTariffNumber/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateCustomsTariffNumberForId(fetch, id, body) {
		return fetch(buildUrl(`customsTariffNumber/id/${id}`, {id}), {method: 'PUT', body})
	}
}
