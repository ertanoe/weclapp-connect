const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getWarehouseLevels({page, pageSize, sort}) {
		return this.fetch(buildUrl('warehouseLevel', {page, pageSize, sort}))
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getWarehouseLevelCount() {
		return this.fetch('warehouseLevel/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getWarehouseLevelById(id) {
		return this.fetch(buildUrl(`warehouseLevel/id/${id}`, {id}))
	}
}
