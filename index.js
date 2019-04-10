'use strict';

let $hc = require('../../connect-config.json') 

module.exports = {
   a(){
	return 11
   },
   test(num1, num2){
	return parseInt(num1+num2)
   },
   async auth(){
		var tenant 		=  ($hc.tenant != undefined ) ? $hc.tenant : ''
		var authToken  	=  ($hc.apiKey != undefined) ? $hc.apiKey : ''
		var user_id 	=  ($hc.user_id != undefined) ? $hc.user_id : '1'
		var username 	=  ($hc.username != undefined) ? $hc.username : '*'
		
		if(tenant == '' || authToken == ''){
			console.log('input missing')
			return false
		}
		
		authToken  = "Basic " + Buffer.from(username + ":" + authToken).toString('base64')
		var url = "https://" + tenant + ".test.com/info"
		if($hc.debug != undefined && $hc.debug == "true"){
			url = "http://localhost/test.json"
		}
		
		var config = {
			'method': 'get', // change post later
			'url': url,
			'params': {},
			'headers': {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Access-Control-Allow-Origin': 'https://*.test.com',
				"Authorization": authToken,
				"cache-control": "no-cache",
			},
		}
		var getResp = await this.ajax(config)
		console.log(getResp)
		return true
	},
		ajax(config, isFullRespRequired){
		var endPoint = config.url
		if(config.method == 'get'){
			return new Promise((resolve, reject) => {
					axios.get(endPoint, {headers: config.headers})
					.then((response) => {
						if(isFullRespRequired){
							resolve(response)
						}
						else{
							resolve(response['data'])
						}
					}).catch((error) => {
						resolve(error)
					})
					return
			})
		}
		else if(config.method == 'post'){
			return new Promise((resolve, reject) => {
				axios.post(endPoint, config.params, {timeout: '1600s'})
				.then(function (response) {
					if(isFullRespRequired){
						resolve(response)
					}
					else{
						resolve(response['data'])
					}
				})
				.catch(function (error) {
					resolve(error)
				})
			})
		}
	}
}