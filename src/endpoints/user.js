const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getUsers(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('user', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getUserCount(fetch) {
		return fetch('user/count')
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getUser(fetch) {
		return fetch('user/currentUser')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getUserById(fetch, id) {
		return fetch(buildUrl(`user/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getUserImageById(fetch, id) {
		return fetch(buildUrl(`user/id/${id}/userImage`, {id}))
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getUserImageThumbnailById(fetch, id) {
		return fetch(buildUrl(`user/id/${id}/userImageThumbnail`, {id}))
	}
}
