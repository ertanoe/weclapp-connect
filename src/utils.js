const {URLSearchParams} = require('url')

module.exports = {

	/**
	 * Builds a search query out of an object.
	 * @param url
	 * @param obj
	 * @returns {string}
	 */
	buildUrl(url, obj = {}) {
		const params = new URLSearchParams()

		for (const [key, value] of Object.entries(obj)) {
			value && params.append(encodeURIComponent(key), value)
		}

		const query = params.toString()
		return query ? `${url}?${query}` : url
	}
}
