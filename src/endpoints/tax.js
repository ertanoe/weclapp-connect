const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getTaxes({page, pageSize, sort}) {
		return this.fetch(buildUrl('tax', {page, pageSize, sort}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createTax(body) {
		return this.fetch('tax', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getTaxCount() {
		return this.fetch('tax/count')
	},

	/**
	 * @param dispatchCountryCode
	 * @param recipientCountryCode
	 * @param taxRateType
	 * @param partyType
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getTaxFor({dispatchCountryCode, recipientCountryCode, taxRateType, partyType}) {
		return this.fetch(buildUrl('tax/findSalesTax', {dispatchCountryCode, recipientCountryCode, taxRateType, partyType}))
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteTaxById(id) {
		return this.fetch(buildUrl(`tax/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getTaxById(id) {
		return this.fetch(buildUrl(`tax/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateTaxForId(id, body) {
		return this.fetch(buildUrl(`tax/id/${id}`, {id}), {method: 'PUT', body})
	}
}
