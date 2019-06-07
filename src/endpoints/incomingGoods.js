const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getIncomingGoods(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('incomingGoods', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createIncomingGoods(fetch, body) {
		return fetch('incomingGoods', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getIncomingGoodsCount(fetch) {
		return fetch('incomingGoods/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getIncomingGoodsById(fetch, id) {
		return fetch(buildUrl(`incomingGoods/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateIncomingGoodsForId(fetch, id, body) {
		return fetch(buildUrl(`incomingGoods/id/${id}`, {id}), {method: 'PUT', body})
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createCompensationShipmentForIncomingGood(fetch, id, body) {
		return fetch(buildUrl(`incomingGoods/id/${id}/createCompensationShipment`, {id}), {method: 'POST', body})
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createCreditNoteForIncomingGood(fetch, id, body) {
		return fetch(buildUrl(`incomingGoods/id/${id}/createCreditNote`, {id}), {method: 'POST', body})
	}
}
