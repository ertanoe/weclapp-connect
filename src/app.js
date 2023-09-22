const axios = require('axios')

/**
 * Creates a new weclapp instance
 * @param domain Alternative to tenant
 * @param tenant Your tenant
 * @param apikey Your apikey
 */
module.exports = function ({domain = null, tenant, apikey, protocol}) {

	protocol = protocol || 'https'
	// Validate some stuff
	if (domain && tenant) {
		throw 'Domain or a tenant based on \'*.weclapp.com\' must be defined'
	} else if (!domain && !tenant) {
		throw 'A domain or tenant must be defined'
	}

	if (!apikey) {
		throw 'APIKey missing'
	}

	// Strip protocol part
	if (domain) {
		domain = domain.replace(/^https?:\/\//, '')
	}

	/**
	 * Makes a request to the weclapp rest-api
	 * @param endpoint Endpoint
	 * @param method Request method, GET by default
	 * @param body Request body
	 * @returns {Promise<*>}
	 */
	async function fetchAPI(endpoint, {method = 'GET', body = null} = {}) {
		method = method.toUpperCase()


		return axios({
			url: `${protocol}://${domain || `${tenant}.weclapp.com`}/webapp/api/v1/${endpoint}`,
			data: body,
			method,
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'AuthenticationToken': apikey
			}
		}).then(res => {

			// Check if response was successful
			if (res.status < 200 || res.status > 250) {
				throw res
			}

			return res.data
		})
	}

	// Load modules
	const endpoints = {
		...require('./endpoints/archivedEmail'),
		...require('./endpoints/article'),
		...require('./endpoints/articleCategory'),
		...require('./endpoints/articlePrice'),
		...require('./endpoints/articleSupplySource'),
		...require('./endpoints/batchNumber'),
		...require('./endpoints/campaign'),
		...require('./endpoints/campaignParticipant'),
		...require('./endpoints/comment'),
		...require('./endpoints/costCenter'),
		...require('./endpoints/commercialLanguage'),
		...require('./endpoints/companySize'),
		...require('./endpoints/contact'),
		...require('./endpoints/contract'),
		...require('./endpoints/currency'),
		...require('./endpoints/customAttributeDefinition'),
		...require('./endpoints/customer'),
		...require('./endpoints/customerCategory'),
		...require('./endpoints/customerLeadLossReason'),
		...require('./endpoints/customerTopic'),
		...require('./endpoints/customsTariffNumber'),
		...require('./endpoints/document'),
		...require('./endpoints/fulfillmentProvider'),
		...require('./endpoints/incomingGoods'),
		...require('./endpoints/lead'),
		...require('./endpoints/leadSource'),
		...require('./endpoints/manufacturer'),
		...require('./endpoints/meta'),
		...require('./endpoints/opportunity'),
		...require('./endpoints/opportunityWinLossReason'),
		...require('./endpoints/party'),
		...require('./endpoints/paymentMethod'),
		...require('./endpoints/productionOrder'),
		...require('./endpoints/pick'),
		...require('./endpoints/purchaseOrder'),
		...require('./endpoints/quotation'),
		...require('./endpoints/salesChannel'),
		...require('./endpoints/salesInvoice'),
		...require('./endpoints/salesOrder'),
		...require('./endpoints/salesStage'),
		...require('./endpoints/sector'),
		...require('./endpoints/serialNumber'),
		...require('./endpoints/shipment'),
		...require('./endpoints/shipmentMethod'),
		...require('./endpoints/supplier'),
		...require('./endpoints/tax'),
		...require('./endpoints/termOfPayment'),
		...require('./endpoints/ticket'),
		...require('./endpoints/unit'),
		...require('./endpoints/user'),
		...require('./endpoints/variantArticle'),
		...require('./endpoints/variantArticleAttribute'),
		...require('./endpoints/variantArticleVariant'),
		...require('./endpoints/warehouse'),
		...require('./endpoints/warehouseLevel'),
		...require('./endpoints/storagePlace'),
		...require('./endpoints/warehouseStock'),
		...require('./endpoints/warehouseStockMovement')
	}

	// Bind fetch
	for (const [name, fn] of Object.entries(endpoints)) {
		endpoints[name] = fn.bind(null, fetchAPI)
	}

	return {
		...endpoints,
		fetch: fetchAPI
	}
}
