const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getPurchaseOrders({page, pageSize, sort}) {
		return this.fetch(buildUrl('purchaseOrder', {page, pageSize, sort}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createPurchaseOrder(body) {
		return this.fetch('purchaseOrder', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getPurchaseOrderCount() {
		return this.fetch('purchaseOrder/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getPurchaseOrderById(id) {
		return this.fetch(buildUrl(`purchaseOrder/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updatePurchaseOrder(id, body) {
		return this.fetch(buildUrl(`purchaseOrder/id/${id}`, {id}), {method: 'PUT', body})
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createPurchaseOrder(id, body) {
		return this.fetch(buildUrl(`purchaseOrder/id/${id}/createIncomingGoods`, {id}), {method: 'POST', body})
	}
}
