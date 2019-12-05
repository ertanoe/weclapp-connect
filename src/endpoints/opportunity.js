const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getOpportunity(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('opportunity', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getOpportunityCount(fetch, {...rest}) {
		return fetch(buildUrl('opportunity/count', {...rest}))
	},
	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getOpportunityById(fetch, id) {
		return fetch(buildUrl(`opportunity/id/${id}`, {id}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createOpportunity(fetch, body) {
		return fetch('opportunity', {method: 'POST', body})
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateOpportunityForId(fetch, id, body) {
		return fetch(buildUrl(`opportunity/id/${id}`, {id}), {method: 'PUT', body})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteOpportunityById(fetch, id) {
		return fetch(buildUrl(`opportunity/id/${id}`, {id}), {method: 'DELETE'})
	}
}
