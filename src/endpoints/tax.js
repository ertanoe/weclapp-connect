const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getTaxes(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('tax', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createTax(fetch, body) {
		return fetch('tax', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getTaxCount(fetch) {
		return fetch('tax/count')
	},

	/**
	 * @param dispatchCountryCode
	 * @param recipientCountryCode
	 * @param taxRateType
	 * @param partyType
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getTaxFor(fetch, {dispatchCountryCode, recipientCountryCode, taxRateType, partyType, ...rest}) {
		return fetch(buildUrl('tax/findSalesTax', {dispatchCountryCode, recipientCountryCode, taxRateType, partyType, ...rest}))
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteTaxById(fetch, id) {
		return fetch(buildUrl(`tax/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getTaxById(fetch, id) {
		return fetch(buildUrl(`tax/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateTaxForId(fetch, id, body) {
		return fetch(buildUrl(`tax/id/${id}`, {id}), {method: 'PUT', body})
	}
}
