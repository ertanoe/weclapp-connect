const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCompanySizes(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('companySize', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createCompanySize(fetch, body) {
		return fetch('companySize', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCompanySizeCount(fetch) {
		return fetch('companySize/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteCompanySizeById(fetch, id) {
		return fetch(buildUrl(`companySize/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCompanySizeById(fetch, id) {
		return fetch(buildUrl(`companySize/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateCompanySizeForId(fetch, id, body) {
		return fetch(buildUrl(`companySize/id/${id}`, {id}), {method: 'PUT', body})
	}
}
