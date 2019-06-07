const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getWarehouseLevels(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('warehouseLevel', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getWarehouseLevelCount(fetch) {
		return fetch('warehouseLevel/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getWarehouseLevelById(fetch, id) {
		return fetch(buildUrl(`warehouseLevel/id/${id}`, {id}))
	}
}
