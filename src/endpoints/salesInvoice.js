const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSalesInvoices(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('salesInvoice', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createSalesInvoice(fetch, body) {
		return fetch('salesInvoice', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSalesInvoiceCount(fetch) {
		return fetch('salesInvoice/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSalesInvoiceById(fetch, id) {
		return fetch(buildUrl(`salesInvoice/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateSalesInvoiceForId(fetch, id, body) {
		return fetch(buildUrl(`salesInvoice/id/${id}`, {id}), {method: 'PUT', body})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getLatestSalesInvoicePdfById(fetch, id) {
		return fetch(buildUrl(`salesInvoice/id/${id}/downloadLatestSalesInvoicePdf`, {id}))
	}
}
