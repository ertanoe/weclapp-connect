const {buildUrl} = require('../utils')

module.exports = {


	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getShipments({page, pageSize, sort}) {
		return this.fetch(buildUrl('shipment', {page, pageSize, sort}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createShipment(body) {
		return this.fetch('shipment', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getShipmentCount() {
		return this.fetch('shipment/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getShipmentById(id) {
		return this.fetch(buildUrl(`shipment/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateShipmentForId(id, body) {
		return this.fetch(buildUrl(`shipment/id/${id}`, {id}), {method: 'PUT', body})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getLatestDeliveryNotePdfId(id) {
		return this.fetch(buildUrl(`shipment/id/${id}/downloadLatestDeliveryNotePdf`, {id}))
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getLatestPickingListPdfById(id) {
		return this.fetch(buildUrl(`shipment/id/${id}/downloadLatestPickingListPdf`, {id}))
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getLatestShippingLabelPdfById(id) {
		return this.fetch(buildUrl(`shipment/id/${id}/downloadLatestShippingLabelPdf`, {id}))
	}
}
