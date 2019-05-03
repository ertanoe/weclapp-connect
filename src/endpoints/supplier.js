const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSuppliers({page, pageSize, sort}) {
		return this.fetch(buildUrl('supplier', {page, pageSize, sort}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createSupplier(body) {
		return this.fetch('supplier', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSuppliers() {
		return this.fetch('supplier/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteSupplierById(id) {
		return this.fetch(buildUrl(`supplier/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSupplierById(id) {
		return this.fetch(buildUrl(`supplier/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateSupplierForId(id, body) {
		return this.fetch(buildUrl(`supplier/id/${id}`, {id}), {method: 'PUT', body})
	},

	/**
	 * @param id
	 * @param scaleWidth
	 * @param scaleHeight
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSupplierImage({id, scaleWidth, scaleHeight}) {
		return this.fetch(buildUrl(`supplier/id/${id}/downloadImage`, {id, scaleWidth, scaleHeight}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createSupplierImageForId(id, body) {
		return this.fetch(buildUrl(`supplier/id/${id}/uploadImage`, {id}), {method: 'POST', body})
	}
}
