const {buildUrl} = require('../utils')

module.exports = {


	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getShipments(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('shipment', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createShipment(fetch, body) {
		return fetch('shipment', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getShipmentCount(fetch) {
		return fetch('shipment/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getShipmentById(fetch, id) {
		return fetch(buildUrl(`shipment/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateShipmentForId(fetch, id, body) {
		return fetch(buildUrl(`shipment/id/${id}`, {id}), {method: 'PUT', body})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getLatestDeliveryNotePdfId(fetch, id) {
		return fetch(buildUrl(`shipment/id/${id}/downloadLatestDeliveryNotePdf`, {id}))
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getLatestPickingListPdfById(fetch, id) {
		return fetch(buildUrl(`shipment/id/${id}/downloadLatestPickingListPdf`, {id}))
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getLatestShippingLabelPdfById(fetch, id) {
		return fetch(buildUrl(`shipment/id/${id}/downloadLatestShippingLabelPdf`, {id}))
	}
}
