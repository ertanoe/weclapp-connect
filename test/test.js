const chai = require("chai")
const expect = chai.expect
const app = require("../src/app")

// TODO Update tests
describe("#1 connect.auth()", function() {
	it("valid auth will matched responce keys", async function() {
		let keyArr = ["id", "version", "createdDate", "email", "firstName", "lastModifiedDate", "lastName", "status", "username"]
		const resp = await app.auth()
		expect(resp.result).to.have.keys(keyArr)
	})
})

let timeRecordRespArr = [
	"id",
	"version",
	"billable",
	"createdDate",
	"customAttributes",
	"description",
	"durationSeconds",
	"lastModifiedDate",
	"projectId",
	"projectNumber",
	"startDate",
	"userId",
	"userUsername"
]

describe("#2 connect.call() GET Method", function() {
	it("fetching timeRecord from app.js api", async function() {
		let input = {
			"endPoint": "timeRecord",
			"method": "get"
		}
		const resp = await app.call(input)
		expect(resp.result[0]).to.have.keys(timeRecordRespArr)
	})
})


describe("#3 connect.call() POST Method", function() {
	it("add  timeRecord using /timeRecord api", async function() {
		let input = {
			"method": "post",
			"endPoint": "timeRecord",
			"body": {
				"version": "0",
				"billable": true,
				"createdDate": 1536646129180,
				"customAttributes": [],
				"description": "1st entry 30 munute",
				"durationSeconds": 1800,
				"lastModifiedDate": 1536646129180,
				"projectId": "2318",
				"projectNumber": "1003",
				"startDate": 1539023400000,
				"userId": "1809",
				"userUsername": "gupta@app.js.com"
			}
		}
		const resp = await app.call(input)
		expect(resp).to.have.keys(timeRecordRespArr)
	})
})

describe("#4 connect.call() PUT Method", function() {
	let newId = ""
	it("add address before update", async function() {
		let addContactInput = {
			"method": "post",
			"endPoint": "contact",
			"body": {
				"lastName": "gupta"
			}
		}
		let addContactResp = await app.call(addContactInput)
		newId = addContactResp.id
	})

	it("update address", async function() {
		let updateContactInput = {
			"method": "put",
			"endPoint": `contact/id/${newId}`,
			"body": {
				"lastName": "gupta_123"
			}
		}
		let updateContactResp = await app.call(updateContactInput)
		expect(updateContactResp).to.include({"lastName": "gupta_123"})
	})
})


describe("#5 connect.call() Delete Method", function() {
	let newId = ""
	before(async function(){
		let addContactResp = await app.call({"endPoint": "contact"})
		newId = addContactResp["result"][0]["id"]
	})

	it("delete address", async function() {
		let deleteContactInput = {
			"method": "DELETE",
			"endPoint": `contact/id/${newId}`,
		}
		let deleteContactResp = await app.call(deleteContactInput)
		expect(deleteContactResp).to.include({"info": "deleted"})
	})

	it("trying to delete same address again (404)", async function() {
		let deleteContactInput = {
			"method": "DELETE",
			"endPoint": `contact/id/${newId}`,
		}
		let deleteContactResp = await app.call(deleteContactInput)
		expect(deleteContactResp).to.include({"info": "No content Found"})
	})
})

