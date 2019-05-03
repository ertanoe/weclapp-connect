const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSalesStages({page, pageSize, sort}) {
		return this.fetch(buildUrl('salesStage', {page, pageSize, sort}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createSalesStage(body) {
		return this.fetch('salesStage', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSalesStageCount() {
		return this.fetch('salesStage/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteSalesStageById(id) {
		return this.fetch(buildUrl(`salesStage/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSalesStageById(id) {
		return this.fetch(buildUrl(`salesStage/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateSalesStageForId(id, body) {
		return this.fetch(buildUrl(`salesStage/id/${id}`, {id}), {method: 'PUT', body})
	}
}
