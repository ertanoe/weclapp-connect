const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getWarehouseStockMovements({page, pageSize, sort}) {
		return this.fetch(buildUrl('warehouseStockMovement', {page, pageSize, sort}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createBookIncomingMovement(body) {
		return this.fetch('warehouseStockMovement/bookIncomingMovement', {method: 'POST', body})
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createBookOutgoingMovement(body) {
		return this.fetch('warehouseStockMovement/bookOutgoingMovement', {method: 'POST', body})
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createBookTransferMovement(body) {
		return this.fetch('warehouseStockMovement/bookTransferMovement', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getWarehouseStockMovementCount() {
		return this.fetch('warehouseStockMovement/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getWarehouseStockMovementById(id) {
		return this.fetch(buildUrl(`warehouseStockMovement/id/${id}`, {id}))
	}
}
