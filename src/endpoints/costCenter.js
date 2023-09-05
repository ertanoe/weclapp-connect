const {buildUrl} = require('@icosense/connect/src/utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCostCenter(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('costCenter', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCostCenterGroup(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('costCenterGroup', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCostType(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('costType', {page, pageSize, sort, ...rest}))
	}
}
