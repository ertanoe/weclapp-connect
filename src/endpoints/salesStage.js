const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSalesStages(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('salesStage', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createSalesStage(fetch, body) {
		return fetch('salesStage', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSalesStageCount(fetch) {
		return fetch('salesStage/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteSalesStageById(fetch, id) {
		return fetch(buildUrl(`salesStage/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSalesStageById(fetch, id) {
		return fetch(buildUrl(`salesStage/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateSalesStageForId(fetch, id, body) {
		return fetch(buildUrl(`salesStage/id/${id}`, {id}), {method: 'PUT', body})
	}
}
