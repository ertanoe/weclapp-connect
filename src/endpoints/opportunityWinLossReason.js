const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getOpportunityWinLossReasons({page, pageSize, sort}) {
		return this.fetch(buildUrl('opportunityWinLossReason', {page, pageSize, sort}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createOpportunityWinLossReason(body) {
		return this.fetch('opportunityWinLossReason', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getOpportunityWinLossReasonCount() {
		return this.fetch('opportunityWinLossReason/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteOpportunityWinLossReasonById(id) {
		return this.fetch(buildUrl(`opportunityWinLossReason/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getOpportunityWinLossReasonById(id) {
		return this.fetch(buildUrl(`opportunityWinLossReason/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateOpportunityWinLossReasonForId(id, body) {
		return this.fetch(buildUrl(`opportunityWinLossReason/id/${id}`, {id}), {method: 'PUT', body})
	}
}
