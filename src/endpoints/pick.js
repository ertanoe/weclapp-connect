const {buildUrl} = require('@icosense/connect/src/utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getPicks(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('pick', {page, pageSize, sort, ...rest}))
	},


}
