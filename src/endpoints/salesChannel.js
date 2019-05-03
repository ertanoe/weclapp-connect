const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSalesChannel() {
		return this.fetch('salesChannel/activeSalesChannels')
	}
}
