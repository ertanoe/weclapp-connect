const fetch = require("node-fetch")
const apiEntry = "webapp/api/v1/"
const fs = require("fs")
module.exports = {
	async loadConfig(){
		try {
			let config = await fs.readFileSync(__dirname + "../../../connect-config.json", "utf8")
			config = JSON.parse(config)
			config["url"] = `https://${config.tenant}.weclapp.com/${apiEntry}`
			config["Authorization"] = `Basic ${Buffer.from(config.username + ":" + config.apiKey).toString("base64")}`
			return config
		} catch (e) {
			throw "weclapp-config.json file not found in root directory. or " + e
		}
	},
	/**
     * authenicate user
     * @returns {Promise}
     */	
	async auth(){		
		let formArray = {
			"endPoint": "user/currentuser"
		}

		var resp = await this.call(formArray)
		return resp
	},
	/**
     * Call any weclapp rest api
	 * formArray: json object E.g [let formArray = { 'endPoint': 'timeRecord', 'method', 'post'}]
     * @returns {Promise}
     */	
	async call(formArray){
		let config = await this.loadConfig()
		let tenant = config.tenant || ""
		let authToken = config.apiKey || ""
		let username = config.username || "*"
		let fakeApi = "https://jsonplaceholder.typicode.com/posts/1"
		
		if (!tenant || !authToken) {
			throw "Tenant or authToken missing"
		}
		authToken = `Basic ${Buffer.from(username + ":" + authToken).toString("base64")}`
		const url = JSON.parse(config.debug) ? fakeApi : `https://${tenant}.weclapp.com/${apiEntry}/${formArray["endPoint"]}/`
		const conf = {
			"url": url,
			"options":{
				method: formArray.method ? formArray.method : "get",
				headers: {
					"Content-Type": "application/json",
					"Authorization": authToken
				}
			}
		}
		if(conf["options"]["method"].toLowerCase() === "post"){
			conf["options"]["body"] =  JSON.stringify(formArray.body)
		}
		return new Promise((resolve, reject) => {
			fetch(conf.url, conf.options)
				.catch(err => {
					console.error("Request failed", err)
					reject(err)
				})
				.then(this.checkStatus)
				.then(response => response.json())
				.then(response => {
					resolve(response)
				})
		})
	},
	checkStatus(res) {
		if (res.ok) {
			return res
		} else {
			throw res.statusText
		}
	}
}
