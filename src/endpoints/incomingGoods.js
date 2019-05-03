const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getIncomingGoods({page, pageSize, sort}) {
		return this.fetch(buildUrl('incomingGoods', {page, pageSize, sort}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createIncomingGoods(body) {
		return this.fetch('incomingGoods', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getIncomingGoodsCount() {
		return this.fetch('incomingGoods/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getIncomingGoodsById(id) {
		return this.fetch(buildUrl(`incomingGoods/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateIncomingGoodsById(id, body) {
		return this.fetch(buildUrl(`incomingGoods/id/${id}`, {id}), {method: 'PUT', body})
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createCompensationShipmentForIncomingGood(id, body) {
		return this.fetch(buildUrl(`incomingGoods/id/${id}/createCompensationShipment`, {id}), {method: 'POST', body})
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createCreditNoteForIncomingGood(id, body) {
		return this.fetch(buildUrl(`incomingGoods/id/${id}/createCreditNote`, {id}), {method: 'POST', body})
	}
}
