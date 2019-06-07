const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getLeads(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('lead', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createLead(fetch, body) {
		return fetch('lead', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getLeadCount(fetch) {
		return fetch('lead/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteLeadById(fetch, id) {
		return fetch(buildUrl(`lead/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getLeadById(fetch, id) {
		return fetch(buildUrl(`lead/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateLeadForId(fetch, id, body) {
		return fetch(buildUrl(`lead/id/${id}`, {id}), {method: 'PUT', body})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async convertLeadToCustomer(fetch, id) {
		return fetch(buildUrl(`lead/id/${id}/convertLeadToCustomer`, {id}))
	},

	/**
	 * @param id
	 * @param scaleWidth
	 * @param scaleHeight
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getLeadImage(fetch, {id, scaleWidth, scaleHeight, ...rest}) {
		return fetch(buildUrl(`lead/id/${id}/downloadImage`, {id, scaleWidth, scaleHeight, ...rest}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createLeadImageForId(fetch, id, body) {
		return fetch(buildUrl(`lead/id/${id}/uploadImage`, {id}), {method: 'POST', body})
	}
}
