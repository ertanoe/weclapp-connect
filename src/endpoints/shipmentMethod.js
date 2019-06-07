const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getShipmentMethods(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('shipmentMethod', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createShipmentMethod(fetch, body) {
		return fetch('shipmentMethod', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getShipmentMethodCount(fetch) {
		return fetch('shipmentMethod/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteShipmentMethodById(fetch, id) {
		return fetch(buildUrl(`shipmentMethod/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getShipmentMethodById(fetch, id) {
		return fetch(buildUrl(`shipmentMethod/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateShipmentMethodForId(fetch, id, body) {
		return fetch(buildUrl(`shipmentMethod/id/${id}`, {id}), {method: 'PUT', body})
	}
}
