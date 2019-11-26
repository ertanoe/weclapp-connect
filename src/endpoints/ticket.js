const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getTickets(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('ticket', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createTicket(fetch, body) {
		return fetch('ticket', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getTicketCount(fetch, {...rest}) {
		return fetch(buildUrl('ticket/count', {...rest}))
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getTicketById(fetch, id) {
		return fetch(buildUrl(`ticket/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateTicketForId(fetch, id, body) {
		return fetch(buildUrl(`ticket/id/${id}`, {id}), {method: 'PUT', body})
	},

	/**
	 * @param id
	 * @param scaleWidth
	 * @param scaleHeight
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getTicketExtraInfoForAppById(fetch, {id, ...rest}) {
		return fetch(buildUrl(`ticket/id/${id}/extraInfoForApp`, {id, ...rest}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createTicketExtraInfoForAppForId(fetch, id, body) {
		return fetch(buildUrl(`ticket/id/${id}/extraInfoForApp`, {id}), {method: 'POST', body})
	},

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getTicketPriorities(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('ticketPriority', {page, pageSize, sort, ...rest}))
	}
}

