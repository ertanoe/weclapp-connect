const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getUsers({page, pageSize, sort}) {
		return this.fetch(buildUrl('user', {page, pageSize, sort}))
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getUserCount() {
		return this.fetch('user/count')
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getUser() {
		return this.fetch('user/currentUser')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getUserById(id) {
		return this.fetch(buildUrl(`user/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getUserImageById(id) {
		return this.fetch(buildUrl(`user/id/${id}/userImage`, {id}))
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getUserImageThumbnailById(id) {
		return this.fetch(buildUrl(`user/id/${id}/userImageThumbnail`, {id}))
	}
}
