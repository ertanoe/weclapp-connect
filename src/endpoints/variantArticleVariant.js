const {buildUrl} = require('../utils')

module.exports = {

	/**
	 * @param page
	 * @param pageSize
	 * @param sort
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getVariantArticleVariants({page, pageSize, sort}) {
		return this.fetch(buildUrl('variantArticleVariant', {page, pageSize, sort}))
	},

	/**
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getVariantArticleVariantCount() {
		return this.fetch('variantArticleVariant/count')
	},

	/**
	 * @param id
	 * @returns {Promise<*|Promise<*>|Promise|Promise<Response>|never>}
	 */
	async getVariantArticleVariantById(id) {
		return this.fetch(buildUrl(`variantArticleVariant/id/${id}`, {id}))
	}
}
