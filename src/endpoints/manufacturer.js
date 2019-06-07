const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getManufacturers(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('manufacturer', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createManufacturer(fetch, body) {
		return fetch('manufacturer', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getManufacturerCount(fetch) {
		return fetch('manufacturer/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteManufacturerById(fetch, id) {
		return fetch(buildUrl(`manufacturer/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getManufacturerById(fetch, id) {
		return fetch(buildUrl(`manufacturer/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateManufacturerForId(fetch, id, body) {
		return fetch(buildUrl(`manufacturer/id/${id}`, {id}), {method: 'PUT', body})
	}
}
