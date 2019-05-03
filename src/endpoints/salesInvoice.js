const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSalesInvoices({page, pageSize, sort}) {
		return this.fetch(buildUrl('salesInvoice', {page, pageSize, sort}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createSalesInvoice(body) {
		return this.fetch('salesInvoice', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSalesInvoiceCount() {
		return this.fetch('salesInvoice/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSalesInvoiceById(id) {
		return this.fetch(buildUrl(`salesInvoice/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateSalesInvoiceForId(id, body) {
		return this.fetch(buildUrl(`salesInvoice/id/${id}`, {id}), {method: 'PUT', body})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getLatestSalesInvoicePdfById(id) {
		return this.fetch(buildUrl(`salesInvoice/id/${id}/downloadLatestSalesInvoicePdf`, {id}))
	}
}
