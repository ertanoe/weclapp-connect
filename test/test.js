const chai = require('chai')
const expect = chai.expect
const weclapp = require('../src/app')

const auth = {
	username: '<USERNAME>',
	apikey: '<APIKEY>',
	tenant: '<TENANT>'
}

// TODO Update tests
describe('#1 connect.auth()', () => {
	it('Will match response', async () => {
		const resp = await weclapp(auth)

		expect(resp.user)
			.to.have.keys(['id', 'version', 'createdDate', 'email', 'firstName', 'lastModifiedDate', 'lastName', 'status', 'username'])
	})
})
