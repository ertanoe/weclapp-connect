const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getBatchNumbers(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('batchNumber', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getBatchNumberCount(fetch) {
		return fetch('batchNumber/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getBatchNumberById(fetch, id) {
		return fetch(buildUrl(`batchNumber/id/${id}`, {id}))
	}
}
