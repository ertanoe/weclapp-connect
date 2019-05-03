const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getContacts({page, pageSize, sort}) {
		return this.fetch(buildUrl('contact', {page, pageSize, sort}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createContact(body) {
		return this.fetch('contact', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getContactCount() {
		return this.fetch('contact/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteContactById(id) {
		return this.fetch(buildUrl(`contact/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getContactById(id) {
		return this.fetch(buildUrl(`contact/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateContactById(id, body) {
		return this.fetch(buildUrl(`contact/id/${id}`, {id}), {method: 'PUT', body})
	},

	/**
	 * @param id
	 * @param scaleWidth
	 * @param scaleHeight
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getContactImageById({id, scaleWidth, scaleHeight}) {
		return this.fetch(buildUrl(`contact/id/${id}/downloadImage`, {id, scaleWidth, scaleHeight}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createContactImageForId(id, body) {
		return this.fetch(buildUrl(`contact/id/${id}/uploadImage`, {id}), {method: 'POST', body})
	}
}
