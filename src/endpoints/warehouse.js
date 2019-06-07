const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getWarehouses(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('warehouse', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getWarehouseCount(fetch) {
		return fetch('warehouse/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getWarehouseById(fetch, id) {
		return fetch(buildUrl(`warehouse/id/${id}`, {id}))
	}
}
