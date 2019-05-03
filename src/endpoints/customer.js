const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomers({page, pageSize, sort}) {
		return this.fetch(buildUrl('customer', {page, pageSize, sort}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createCustomer(body) {
		return this.fetch('customer', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomerCount() {
		return this.fetch('customer/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteCustomerById(id) {
		return this.fetch(buildUrl(`customer/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomerById(id) {
		return this.fetch(buildUrl(`customer/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateCustomerById(id, body) {
		return this.fetch(buildUrl(`customer/id/${id}`, {id}), {method: 'PUT', body})
	},

	/**
	 * @param id
	 * @param scaleWidth
	 * @param scaleHeight
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCustomerImageById({id, scaleWidth, scaleHeight}) {
		return this.fetch(buildUrl(`customer/id/${id}/downloadImage`, {id, scaleWidth, scaleHeight}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createCustomerForId(id, body) {
		return this.fetch(buildUrl(`customer/id/${id}/uploadImage`, {id}), {method: 'POST', body})
	}
}
