const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomers(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('customer', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createCustomer(fetch, body) {
		return fetch('customer', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomerCount(fetch, {...rest}) {
		return fetch(buildUrl('customer/count', {...rest}))
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteCustomerById(fetch, id) {
		return fetch(buildUrl(`customer/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomerById(fetch, id) {
		return fetch(buildUrl(`customer/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateCustomerForId(fetch, id, body) {
		return fetch(buildUrl(`customer/id/${id}`, {id}), {method: 'PUT', body})
	},

	/**
	 * @param id
	 * @param scaleWidth
	 * @param scaleHeight
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomerImageById(fetch, {id, scaleWidth, scaleHeight, ...rest}) {
		return fetch(buildUrl(`customer/id/${id}/downloadImage`, {id, scaleWidth, scaleHeight, ...rest}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createCustomerForId(fetch, id, body) {
		return fetch(buildUrl(`customer/id/${id}/uploadImage`, {id}), {method: 'POST', body})
	}
}
