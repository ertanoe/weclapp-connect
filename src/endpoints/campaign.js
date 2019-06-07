const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCampaigns(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('campaign', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createCampaign(fetch, body) {
		return fetch('campaign', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCampaignsCount(fetch) {
		return fetch('campaign/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteCampaignById(fetch, id) {
		return fetch(buildUrl(`campaign/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCampaignById(fetch, id) {
		return fetch(buildUrl(`campaign/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateCampaignForId(fetch, id, body) {
		return fetch(buildUrl(`campaign/id/${id}`, {id}), {method: 'PUT', body})
	}
}
