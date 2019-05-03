const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getProductionOrders({page, pageSize, sort}) {
		return this.fetch(buildUrl('productionOrder', {page, pageSize, sort}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createProductionOrder(body) {
		return this.fetch('productionOrder', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getProductionOrderCount() {
		return this.fetch('productionOrder/count')
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createProductionOrder(body) {
		return this.fetch('productionOrder/fastProductionBooking', {method: 'POST', body})
	},

	/**
	 *
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteProductionOrderById(id) {
		return this.fetch(buildUrl(`productionOrder/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getProductionOrderById(id) {
		return this.fetch(buildUrl(`productionOrder/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateProductionOrderForId(id, body) {
		return this.fetch(buildUrl(`productionOrder/id/${id}`, {id}), {method: 'PUT', body})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getLatestProductionOrderPdfProductionOrderById(id) {
		return this.fetch(buildUrl(`productionOrder/id/${id}/downloadLatestProductionOrderPdf`, {id}))
	}
}
