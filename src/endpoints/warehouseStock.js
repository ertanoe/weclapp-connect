const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getWarehouseStocks({page, pageSize, sort}) {
		return this.fetch(buildUrl('warehouseStock', {page, pageSize, sort}))
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getWarehouseStockCount() {
		return this.fetch('warehouseStock/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getWarehouseStockById(id) {
		return this.fetch(buildUrl(`warehouseStock/id/${id}`, {id}))
	}
}
