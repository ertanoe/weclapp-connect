const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSalesOrders(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('salesOrder', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createSalesOrder(fetch, body) {
		return fetch('salesOrder', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSalesOrderCount(fetch) {
		return fetch('salesOrder/count')
	},

	/**
	 * @param customerId
	 * @param responsibleUserId
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSalesOrderForCustomer(fetch, {customerId, responsibleUserId, ...rest}) {
		return fetch(buildUrl('salesOrder/defaultValuesForCreate', {customerId, responsibleUserId, ...rest}))
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSalesOrderById(fetch, id) {
		return fetch(buildUrl(`salesOrder/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateSalesOrderForId(fetch, id, body) {
		return fetch(buildUrl(`salesOrder/id/${id}`, {id}), {method: 'PUT', body})
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createCancelOrManualSalesOrderForId(fetch, id, body) {
		return fetch(buildUrl(`salesOrder/id/${id}/cancelOrManuallyClose`, {id}), {method: 'POST', body})
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createAdvancePaymentRequestSalesOrderForId(fetch, id, body) {
		return fetch(buildUrl(`salesOrder/id/${id}/createAdvancePaymentRequest`, {id}), {method: 'POST', body})
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createCustomerReturnForId(fetch, id, body) {
		return fetch(buildUrl(`salesOrder/id/${id}/createCustomerReturn`, {id}), {method: 'POST', body})
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createPartPaymentInvoiceForId(fetch, id, body) {
		return fetch(buildUrl(`salesOrder/id/${id}/createPartPaymentInvoice`, {id}), {method: 'POST', body})
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createPrepaymentInvoiceForId(fetch, id, body) {
		return fetch(buildUrl(`salesOrder/id/${id}/createPrepaymentInvoice`, {id}), {method: 'POST', body})
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createSalesInvoiceForId(fetch, id, body) {
		return fetch(buildUrl(`salesOrder/id/${id}/createSalesInvoice`, {id}), {method: 'POST', body})
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createShipmentForId(fetch, id, body) {
		return fetch(buildUrl(`salesOrder/id/${id}/createShipment`, {id}), {method: 'POST', body})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getLatestOrderConfirmationPdfId(fetch, id) {
		return fetch(buildUrl(`salesOrder/id/${id}/downloadLatestOrderConfirmationPdf`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createManualCloseSalesOrderForId(fetch, id, body) {
		return fetch(buildUrl(`salesOrder/id/${id}/manuallyClose`, {id}), {method: 'POST', body})
	}
}
