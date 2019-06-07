const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCampaignParticipants(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('campaignParticipant', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createCampaignParticipant(fetch, body) {
		return fetch('campaignParticipant', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCampaignParticipantCount(fetch) {
		return fetch('campaignParticipant/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteCampaignParticipantById(fetch, id) {
		return fetch(buildUrl(`campaignParticipant/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCampaignParticipantById(fetch, id) {
		return fetch(buildUrl(`campaignParticipant/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateCampaignParticipantForId(fetch, id, body) {
		return fetch(buildUrl(`campaignParticipant/id/${id}`, {id}), {method: 'PUT', body})
	}
}
