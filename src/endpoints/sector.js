const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSectors({page, pageSize, sort}) {
		return this.fetch(buildUrl('sector', {page, pageSize, sort}))
	},

	/**
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async createSector(body) {
		return this.fetch('sector', {method: 'POST', body})
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSectorCount() {
		return this.fetch('sector/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async deleteSectorById(id) {
		return this.fetch(buildUrl(`sector/id/${id}`, {id}), {method: 'DELETE'})
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSectorById(id) {
		return this.fetch(buildUrl(`sector/id/${id}`, {id}))
	},

	/**
	 * @param id
	 * @param body
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async updateSectorForId(id, body) {
		return this.fetch(buildUrl(`sector/id/${id}`, {id}), {method: 'PUT', body})
	}
}
