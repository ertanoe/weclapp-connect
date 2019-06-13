const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getContracts(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('contract', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createContract(fetch, body) {
		return fetch('contract', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getContractCount(fetch, {...rest}) {
		return fetch(buildUrl('contract/count', {...rest}))
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteContractById(fetch, id) {
		return fetch(buildUrl(`contract/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getContractById(fetch, id) {
		return fetch(buildUrl(`contract/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateContractForId(fetch, id, body) {
		return fetch(buildUrl(`contract/id/${id}`, {id}), {method: 'PUT', body})
	},

	/**
	 * @param id
	 * @param scaleWidth
	 * @param scaleHeight
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getContractImageById(fetch, {id, scaleWidth, scaleHeight, ...rest}) {
		return fetch(buildUrl(`contract/id/${id}/downloadImage`, {id, scaleWidth, scaleHeight, ...rest}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createContractImageForId(fetch, id, body) {
		return fetch(buildUrl(`contract/id/${id}/uploadImage`, {id}), {method: 'POST', body})
	}
}
