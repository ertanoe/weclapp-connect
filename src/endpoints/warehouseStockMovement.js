const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getWarehouseStockMovements(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('warehouseStockMovement', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createBookIncomingMovement(fetch, body) {
		return fetch('warehouseStockMovement/bookIncomingMovement', {method: 'POST', body})
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createBookOutgoingMovement(fetch, body) {
		return fetch('warehouseStockMovement/bookOutgoingMovement', {method: 'POST', body})
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createBookTransferMovement(fetch, body) {
		return fetch('warehouseStockMovement/bookTransferMovement', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getWarehouseStockMovementCount(fetch) {
		return fetch('warehouseStockMovement/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getWarehouseStockMovementById(fetch, id) {
		return fetch(buildUrl(`warehouseStockMovement/id/${id}`, {id}))
	}
}
