const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getOpportunityWinLossReasons(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('opportunityWinLossReason', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createOpportunityWinLossReason(fetch, body) {
		return fetch('opportunityWinLossReason', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getOpportunityWinLossReasonCount(fetch) {
		return fetch('opportunityWinLossReason/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteOpportunityWinLossReasonById(fetch, id) {
		return fetch(buildUrl(`opportunityWinLossReason/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getOpportunityWinLossReasonById(fetch, id) {
		return fetch(buildUrl(`opportunityWinLossReason/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateOpportunityWinLossReasonForId(fetch, id, body) {
		return fetch(buildUrl(`opportunityWinLossReason/id/${id}`, {id}), {method: 'PUT', body})
	}
}
