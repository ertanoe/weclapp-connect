const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getBatchNumbers({page, pageSize, sort}) {
		return this.fetch(buildUrl('batchNumber', {page, pageSize, sort}))
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getBatchNumberCount() {
		return this.fetch('batchNumber/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getBatchNumberById(id) {
		return this.fetch(buildUrl(`batchNumber/id/${id}`, {id}))
	}
}
