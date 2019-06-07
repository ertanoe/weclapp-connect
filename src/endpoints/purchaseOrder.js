const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getPurchaseOrders(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('purchaseOrder', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createPurchaseOrder(fetch, body) {
		return fetch('purchaseOrder', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getPurchaseOrderCount(fetch) {
		return fetch('purchaseOrder/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getPurchaseOrderById(fetch, id) {
		return fetch(buildUrl(`purchaseOrder/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updatePurchaseOrder(fetch, id, body) {
		return fetch(buildUrl(`purchaseOrder/id/${id}`, {id}), {method: 'PUT', body})
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createPurchaseOrder(fetch, id, body) {
		return fetch(buildUrl(`purchaseOrder/id/${id}/createIncomingGoods`, {id}), {method: 'POST', body})
	}
}
