const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomerLeadLossReasons(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('customerLeadLossReason', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createCustomerLeadLossReason(fetch, body) {
		return fetch('customerLeadLossReason', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomerLeadLossReasonCount(fetch) {
		return fetch('customerLeadLossReason/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteCustomerLeadLossReasonById(fetch, id) {
		return fetch(buildUrl(`customerLeadLossReason/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomerLeadLossReasonById(fetch, id) {
		return fetch(buildUrl(`customerLeadLossReason/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateCustomerLeadLossReasonForId(fetch, id, body) {
		return fetch(buildUrl(`customerLeadLossReason/id/${id}`, {id}), {method: 'PUT', body})
	}
}
