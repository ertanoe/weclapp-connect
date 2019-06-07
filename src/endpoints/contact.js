const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getContacts(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('contact', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createContact(fetch, body) {
		return fetch('contact', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getContactCount(fetch) {
		return fetch('contact/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteContactById(fetch, id) {
		return fetch(buildUrl(`contact/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getContactById(fetch, id) {
		return fetch(buildUrl(`contact/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateContactForId(fetch, id, body) {
		return fetch(buildUrl(`contact/id/${id}`, {id}), {method: 'PUT', body})
	},

	/**
	 * @param id
	 * @param scaleWidth
	 * @param scaleHeight
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getContactImageById(fetch, {id, scaleWidth, scaleHeight, ...rest}) {
		return fetch(buildUrl(`contact/id/${id}/downloadImage`, {id, scaleWidth, scaleHeight, ...rest}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createContactImageForId(fetch, id, body) {
		return fetch(buildUrl(`contact/id/${id}/uploadImage`, {id}), {method: 'POST', body})
	}
}
