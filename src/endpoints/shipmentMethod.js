const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getShipmentMethods({page, pageSize, sort}) {
		return this.fetch(buildUrl('shipmentMethod', {page, pageSize, sort}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createShipmentMethod(body) {
		return this.fetch('shipmentMethod', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getShipmentMethodCount() {
		return this.fetch('shipmentMethod/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteShipmentMethodById(id) {
		return this.fetch(buildUrl(`shipmentMethod/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getShipmentMethodById(id) {
		return this.fetch(buildUrl(`shipmentMethod/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateShipmentMethodForId(id, body) {
		return this.fetch(buildUrl(`shipmentMethod/id/${id}`, {id}), {method: 'PUT', body})
	}
}
