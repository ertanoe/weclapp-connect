module.exports = {

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getSalesChannel(fetch) {
		return fetch('salesChannel/activeSalesChannels')
	}
}
