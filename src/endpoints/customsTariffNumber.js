const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomsTariffNumbers({page, pageSize, sort}) {
		return this.fetch(buildUrl('customsTariffNumber', {page, pageSize, sort}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createCustomsTariffNumber(body) {
		return this.fetch('customsTariffNumber', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomsTariffNumberCount() {
		return this.fetch('customsTariffNumber/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteCustomsTariffNumberById(id) {
		return this.fetch(buildUrl(`customsTariffNumber/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomsTariffNumberById(id) {
		return this.fetch(buildUrl(`customsTariffNumber/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateCustomsTariffNumberForId(id, body) {
		return this.fetch(buildUrl(`customsTariffNumber/id/${id}`, {id}), {method: 'PUT', body})
	}
}
