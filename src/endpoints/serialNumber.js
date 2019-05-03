const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSerialNumbers({page, pageSize, sort}) {
		return this.fetch(buildUrl('serialNumber', {page, pageSize, sort}))
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSerialNumberCount() {
		return this.fetch('serialNumber/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSerialNumberById(id) {
		return this.fetch(buildUrl(`serialNumber/id/${id}`, {id}))
	}
}
