const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSalesOrders({page, pageSize, sort}) {
		return this.fetch(buildUrl('salesOrder', {page, pageSize, sort}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createSalesOrder(body) {
		return this.fetch('salesOrder', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSalesOrderCount() {
		return this.fetch('salesOrder/count')
	},

	/**
	 * @param customerId
	 * @param responsibleUserId
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSalesOrderForCustomer({customerId, responsibleUserId}) {
		return this.fetch(buildUrl('salesOrder/defaultValuesForCreate', {customerId, responsibleUserId}))
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSalesOrderById(id) {
		return this.fetch(buildUrl(`salesOrder/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateSalesOrderForId(id, body) {
		return this.fetch(buildUrl(`salesOrder/id/${id}`, {id}), {method: 'PUT', body})
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createCancelOrManualSalesOrderForId(id, body) {
		return this.fetch(buildUrl(`salesOrder/id/${id}/cancelOrManuallyClose`, {id}), {method: 'POST', body})
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createAdvancePaymentRequestSalesOrderForId(id, body) {
		return this.fetch(buildUrl(`salesOrder/id/${id}/createAdvancePaymentRequest`, {id}), {method: 'POST', body})
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createCustomerReturnForId(id, body) {
		return this.fetch(buildUrl(`salesOrder/id/${id}/createCustomerReturn`, {id}), {method: 'POST', body})
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createPartPaymentInvoiceForId(id, body) {
		return this.fetch(buildUrl(`salesOrder/id/${id}/createPartPaymentInvoice`, {id}), {method: 'POST', body})
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createPrepaymentInvoiceForId(id, body) {
		return this.fetch(buildUrl(`salesOrder/id/${id}/createPrepaymentInvoice`, {id}), {method: 'POST', body})
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createSalesInvoiceForId(id, body) {
		return this.fetch(buildUrl(`salesOrder/id/${id}/createSalesInvoice`, {id}), {method: 'POST', body})
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createShipmentForId(id, body) {
		return this.fetch(buildUrl(`salesOrder/id/${id}/createShipment`, {id}), {method: 'POST', body})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getLatestOrderConfirmationPdfId(id) {
		return this.fetch(buildUrl(`salesOrder/id/${id}/downloadLatestOrderConfirmationPdf`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createManualCloseSalesOrderForId(id, body) {
		return this.fetch(buildUrl(`salesOrder/id/${id}/manuallyClose`, {id}), {method: 'POST', body})
	}
}
