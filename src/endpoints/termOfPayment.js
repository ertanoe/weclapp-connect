const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getTermsOfPayment(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('termOfPayment', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createTermOfPayment(fetch, body) {
		return fetch('termOfPayment', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getTermOfPaymentCount(fetch) {
		return fetch('termOfPayment/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteTermOfPaymentById(fetch, id) {
		return fetch(buildUrl(`termOfPayment/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getTermOfPaymentById(fetch, id) {
		return fetch(buildUrl(`termOfPayment/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateTermOfPaymentForId(fetch, id, body) {
		return fetch(buildUrl(`termOfPayment/id/${id}`, {id}), {method: 'PUT', body})
	}
}
