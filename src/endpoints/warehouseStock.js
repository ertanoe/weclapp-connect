const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getWarehouseStocks(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('warehouseStock', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getWarehouseStockCount(fetch) {
		return fetch('warehouseStock/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getWarehouseStockById(fetch, id) {
		return fetch(buildUrl(`warehouseStock/id/${id}`, {id}))
	}
}
