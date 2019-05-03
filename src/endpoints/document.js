const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getDocument() {
		return this.fetch('document')
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getDocumentCount() {
		return this.fetch('document/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteDocumentById(id) {
		return this.fetch(buildUrl(`document/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getDocumentById(id) {
		return this.fetch(buildUrl(`document/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateDocumentForId(id, body) {
		return this.fetch(buildUrl(`document/id/${id}`, {id}), {method: 'PUT', body})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getDocumentAsDownloadById(id) {
		return this.fetch(buildUrl(`document/id/${id}/download`, {id}))
	},

	/**
	 * @param id
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getDocumentVersion(id) {
		return this.fetch(buildUrl(`document/id/${id}/downloadDocumentVersion`))
	},

	/**
	 * @param id
	 * @param comment
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createDocument({id, comment}, body) {
		return this.fetch(buildUrl(`document/id/${id}/upload`, {id, comment}), {method: 'POST', body})
	},

	/**
	 * @param entityName
	 * @param entityId
	 * @param name
	 * @param description
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createEntityDocument({entityName, entityId, name, description}, body) {
		return this.fetch(buildUrl('document/upload', {entityName, entityId, name, description}), {method: 'POST', body})
	}
}
