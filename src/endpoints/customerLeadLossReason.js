const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomerLeadLossReasons({page, pageSize, sort}) {
		return this.fetch(buildUrl('customerLeadLossReason', {page, pageSize, sort}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createCustomerLeadLossReason(body) {
		return this.fetch('customerLeadLossReason', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomerLeadLossReasonCount() {
		return this.fetch('customerLeadLossReason/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteCustomerLeadLossReasonById(id) {
		return this.fetch(buildUrl(`customerLeadLossReason/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomerLeadLossReasonById(id) {
		return this.fetch(buildUrl(`customerLeadLossReason/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateCustomerLeadLossReasonForId(id, body) {
		return this.fetch(buildUrl(`customerLeadLossReason/id/${id}`, {id}), {method: 'PUT', body})
	}
}
