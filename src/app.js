const fetch = require("node-fetch")
const apiEntry = "webapp/api/v1/"
const fs = require("fs")

module.exports = {
	/**
	 * load and return connect-config.json from root directories
	 * @returns {Promise<object>}
	 */
	async loadConfig() {
		try {
			let config = await fs.readFileSync(__dirname + "../../../connect-config.json", "utf8")
			config = JSON.parse(config)

			let requiredInputs = ["username", "tenant", "apiKey"]
			for (let input of requiredInputs) {
				if (!config[input] || config[input] === "") {
					throw `${input} is either undefined or empty`
				}
			}

			config["url"] = `https://${config.tenant}.weclapp.com/${apiEntry}`
			config["Authorization"] = `Basic ${Buffer.from(config.username + ":" + config.apiKey).toString("base64")}`
			return config

		} catch (e) {
			throw `Error Found => ${e}`
		}
	},
	/**
	 * authenticate user
	 * @returns {Promise}
	 */
	async auth(){
		let resp = await this.call({"endPoint": "user/currentUser"})
		return resp
	},
	/**
	* Call any weclapp rest api
	* @param {object} formArray -E.g [let formArray = { 'endPoint': 'timeRecord', 'method', 'post'}]
	* @returns {Promise}
	*/
	async call(formArray) {
		let config = await this.loadConfig()
		let tenant = config.tenant || ""
		let authToken = config.apiKey || ""
		let username = config.username || "*"
		let fakeApi = "https://jsonplaceholder.typicode.com/posts/1"

		if (!tenant || !authToken) {
			throw "Tenant or authToken is missing"
		}

		authToken = `Basic ${Buffer.from(username + ":" + authToken).toString("base64")}`
		const url = JSON.parse(config.debug) ? fakeApi : `https://${tenant}.weclapp.com/${apiEntry}/${formArray["endPoint"]}`
		const conf = {
			"url": url,
			"options": {
				method: formArray.method ? formArray.method : "get",
				headers: {
					"Content-Type": "application/json",
					"Authorization": authToken
				}
			}
		}
		const methodType = conf["options"]["method"].toLowerCase()
		if (methodType !== "get") {
			conf["options"]["body"] = JSON.stringify(formArray.body)
		}
		return new Promise((resolve, reject) => {
			fetch(conf.url, conf.options)
				.then(this.checkStatus)
				.then(response => {
					try {
						//404 and 204 returning empty response
						response.json().then(json => resolve(json))
					} catch (e) {
						resolve(response)
					}
				})
				.catch(err => {
					console.error("Request failed", err)
					reject(err)
				})
		})
	},
	checkStatus(res) {
		let newResp = {
			"info": "",
			"status": res.status
		}
		if (res.ok) {
			if (res.status == 204) {
				newResp.info = "deleted"
			} else {
				newResp = res
			}
		} else {
			if (res.status == 404) {
				newResp.info = "No content Found"
			} else {
				throw res.statusText
			}
		}
		return newResp
	}
}
