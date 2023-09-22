const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getStoragePlaces(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('storagePlace', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getStoragePlaceCount(fetch) {
		return fetch('storagePlace/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getStoragePlaceById(fetch, id) {
		return fetch(buildUrl(`storagePlace/id/${id}`, {id}))
	}
}
