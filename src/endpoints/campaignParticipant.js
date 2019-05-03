const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCampaignParticipants({page, pageSize, sort}) {
		return this.fetch(buildUrl('campaignParticipant', {page, pageSize, sort}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createCampaignParticipant(body) {
		return this.fetch('campaignParticipant', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCampaignParticipantCount() {
		return this.fetch('campaignParticipant/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteCampaignParticipantById(id) {
		return this.fetch(buildUrl(`campaignParticipant/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getCampaignParticipantById(id) {
		return this.fetch(buildUrl(`campaignParticipant/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateCampaignParticipantForId(id, body) {
		return this.fetch(buildUrl(`campaignParticipant/id/${id}`, {id}), {method: 'PUT', body})
	}
}
