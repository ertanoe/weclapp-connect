const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getLeads({page, pageSize, sort}) {
		return this.fetch(buildUrl('lead', {page, pageSize, sort}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createLead(body) {
		return this.fetch('lead', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getLeadCount() {
		return this.fetch('lead/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteLeadById(id) {
		return this.fetch(buildUrl(`lead/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getLeadById(id) {
		return this.fetch(buildUrl(`lead/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateLeadById(id, body) {
		return this.fetch(buildUrl(`lead/id/${id}`, {id}), {method: 'PUT', body})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async convertLeadToCustomer(id) {
		return this.fetch(buildUrl(`lead/id/${id}/convertLeadToCustomer`, {id}))
	},

	/**
	 * @param id
	 * @param scaleWidth
	 * @param scaleHeight
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getLeadImage({id, scaleWidth, scaleHeight}) {
		return this.fetch(buildUrl(`lead/id/${id}/downloadImage`, {id, scaleWidth, scaleHeight}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createLeadImageForId(id, body) {
		return this.fetch(buildUrl(`lead/id/${id}/uploadImage`, {id}), {method: 'POST', body})
	}
}
