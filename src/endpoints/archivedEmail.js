const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getArchievedEmails() {
		return this.fetch('archivedEmail')
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getArchievedEmailCount() {
		return this.fetch('archivedEmail/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteArchievedEmailById(id) {
		return this.fetch(buildUrl(`archivedEmail/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getArchievedEmailById(id) {
		return this.fetch(buildUrl(`archivedEmail/id/${id}`, {id}))
	}
}
