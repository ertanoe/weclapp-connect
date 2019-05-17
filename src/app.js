const fetch = require('node-fetch')

/**
 * Creates a new weclapp instance
 * @param username Your username
 * @param tenant Your tenant
 * @param apikey Your apikey
 */
module.exports = function ({username, tenant, apikey}) {
	const authToken = `Basic ${Buffer.from(`${username}:${apikey}`, 'ascii').toString('base64')}`

	/**
	 * Makes a request to the weclapp rest-api
	 * @param endpoint Endpoint
	 * @param method Request method, GET by default
	 * @param body Request body
	 * @returns {Promise<*>}
	 */
	async function fetchAPI(endpoint, {method = 'GET', body} = {}) {
		method = method.toUpperCase()

		return fetch(`https://${tenant}.weclapp.com/webapp/api/v1/${endpoint}`, {
			...(body && {body: JSON.stringify(body)}),
			method,
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': authToken
			}
		}).then(res => {

			// Check if response was successful
			if (!res.ok) {
				throw res
			}

			return res.headers.get('content-type').includes('application/json') ? res.json() : res.arrayBuffer()
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
		...require('./endpoints/opportunityWinLossReason'),
		...require('./endpoints/party'),
		...require('./endpoints/paymentMethod'),
		...require('./endpoints/productionOrder'),
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
