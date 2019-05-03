const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getArchievedEmails(fetch) {
		return fetch('archivedEmail')
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getArchievedEmailCount(fetch) {
		return fetch('archivedEmail/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteArchievedEmailById(fetch, id) {
		return fetch(buildUrl(`archivedEmail/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getArchievedEmailById(fetch, id) {
		return fetch(buildUrl(`archivedEmail/id/${id}`, {id}))
	}
}
