const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomerTopics(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('customerTopic', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createCustomerTopic(fetch, body) {
		return fetch('customerTopic', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomerTopicCount(fetch) {
		return fetch('customerTopic/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteCustomerTopicById(fetch, id) {
		return fetch(buildUrl(`customerTopic/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomerTopicById(fetch, id) {
		return fetch(buildUrl(`customerTopic/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateCustomerTopicForId(fetch, id, body) {
		return fetch(buildUrl(`customerTopic/id/${id}`, {id}), {method: 'PUT', body})
	}
}
