const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getDocument(fetch) {
		return fetch('document')
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getDocumentCount(fetch) {
		return fetch('document/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteDocumentById(fetch, id) {
		return fetch(buildUrl(`document/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getDocumentById(fetch, id) {
		return fetch(buildUrl(`document/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateDocumentForId(fetch, id, body) {
		return fetch(buildUrl(`document/id/${id}`, {id}), {method: 'PUT', body})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getDocumentAsDownloadById(fetch, id) {
		return fetch(buildUrl(`document/id/${id}/download`, {id}))
	},

	/**
	 * @param id
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getDocumentVersion(fetch, id) {
		return fetch(buildUrl(`document/id/${id}/downloadDocumentVersion`))
	},

	/**
	 * @param id
	 * @param comment
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createDocument(fetch, {id, comment}, body) {
		return fetch(buildUrl(`document/id/${id}/upload`, {id, comment}), {method: 'POST', body})
	},

	/**
	 * @param entityName
	 * @param entityId
	 * @param name
	 * @param description
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createEntityDocument(fetch, {entityName, entityId, name, description}, body) {
		return fetch(buildUrl('document/upload', {entityName, entityId, name, description}), {method: 'POST', body})
	}
}
