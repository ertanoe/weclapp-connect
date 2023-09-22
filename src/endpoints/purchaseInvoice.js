const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getPurchaseInvoices(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('purchaseInvoice', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createPurchaseInvoice(fetch, body) {
		return fetch('purchaseInvoice', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getPurchaseInvoiceCount(fetch) {
		return fetch('purchaseInvoice/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getPurchaseInvoiceById(fetch, id) {
		return fetch(buildUrl(`purchaseInvoice/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updatePurchaseInvoiceForId(fetch, id, body) {
		return fetch(buildUrl(`purchaseInvoice/id/${id}`, {id}), {method: 'PUT', body})
	}


}
