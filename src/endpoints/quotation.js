const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getQuotations({page, pageSize, sort}) {
		return this.fetch(buildUrl('quotation', {page, pageSize, sort}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createQuotation(body) {
		return this.fetch('quotation', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getQuotationCount() {
		return this.fetch('quotation/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteQuotationById(id) {
		return this.fetch(buildUrl(`quotation/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getQuotationById(id) {
		return this.fetch(buildUrl(`quotation/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateQuotationForId(id, body) {
		return this.fetch(buildUrl(`quotation/id/${id}`, {id}), {method: 'PUT', body})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getLatestQuotationPdfById(id) {
		return this.fetch(buildUrl(`quotation/id/${id}/downloadLatestQuotationPdf`, {id}))
	}
}
