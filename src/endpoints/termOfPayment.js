const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getTermsOfPayment({page, pageSize, sort}) {
		return this.fetch(buildUrl('termOfPayment', {page, pageSize, sort}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createTermOfPayment(body) {
		return this.fetch('termOfPayment', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getTermOfPaymentCount() {
		return this.fetch('termOfPayment/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteTermOfPaymentById(id) {
		return this.fetch(buildUrl(`termOfPayment/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getTermOfPaymentById(id) {
		return this.fetch(buildUrl(`termOfPayment/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateTermOfPaymentForId(id, body) {
		return this.fetch(buildUrl(`termOfPayment/id/${id}`, {id}), {method: 'PUT', body})
	}
}
