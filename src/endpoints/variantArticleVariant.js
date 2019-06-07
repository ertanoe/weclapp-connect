const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getVariantArticleVariants(fetch, {page, pageSize, sort, ...rest}) {
		return fetch(buildUrl('variantArticleVariant', {page, pageSize, sort, ...rest}))
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getVariantArticleVariantCount(fetch) {
		return fetch('variantArticleVariant/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getVariantArticleVariantById(fetch, id) {
		return fetch(buildUrl(`variantArticleVariant/id/${id}`, {id}))
	}
}
