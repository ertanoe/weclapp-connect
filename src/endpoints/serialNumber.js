const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSerialNumbers(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('serialNumber', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSerialNumberCount(fetch) {
		return fetch('serialNumber/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSerialNumberById(fetch, id) {
		return fetch(buildUrl(`serialNumber/id/${id}`, {id}))
	}
}
