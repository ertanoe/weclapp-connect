const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getProductionOrders(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('productionOrder', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createProductionOrder(fetch, body) {
		return fetch('productionOrder', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getProductionOrderCount(fetch) {
		return fetch('productionOrder/count')
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async fastProductionBooking(fetch, body) {
		return fetch('productionOrder/fastProductionBooking', {method: 'POST', body})
	},

	/**
	 *
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteProductionOrderById(fetch, id) {
		return fetch(buildUrl(`productionOrder/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getProductionOrderById(fetch, id) {
		return fetch(buildUrl(`productionOrder/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateProductionOrderForId(fetch, id, body) {
		return fetch(buildUrl(`productionOrder/id/${id}`, {id}), {method: 'PUT', body})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getLatestProductionOrderPdfProductionOrderById(fetch, id) {
		return fetch(buildUrl(`productionOrder/id/${id}/downloadLatestProductionOrderPdf`, {id}))
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getProductionOrderWidthdrawalsById(fetch, id) {
		return fetch(buildUrl(`productionOrder/id/${id}/withdrawals`, { id }))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateProductionOrderWidthdrawalsById(fetch, id, body) {
		return fetch(buildUrl(`productionOrder/id/${id}/updateWithdrawals`, { id }), { method: 'POST', body })
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getProductionOrderPicksById(fetch, id) {
		return fetch(buildUrl(`productionOrder/id/${id}/picks`, { id }))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateProductionOrderPicksById(fetch, id, body) {
		return fetch(buildUrl(`productionOrder/id/${id}/updatePicks`, { id }), { method: 'POST', body })
	},
}
