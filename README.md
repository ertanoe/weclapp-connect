<h3 align="center">
   weclapp connect
</h3>

weclapp-connect provides a way to communicate with the weclapp/rest api through a simple and easy-to-use nodejs module.

## Installation
The package is available on npm under the official [weclapp organization](https://www.npmjs.com/org/weclapp).

Install via npm:
```shell
$ npm install @weclapp/connect
```

Install via yarn:
```shell
$ yarn add @weclapp/connect
```

## Usage example

#### Authenticate

```js
const weclapp = require('@weclapp/connect')

(async () => {
	
	// Authenticate
	const user = await weclapp({
		username: '<USERNAME>',
		apikey: '<APIKEY>',
		tenant: '<TENANT>'
	})

	// Prints the current user to the console
	console.log(user)
})()
```

#### Request time records
```js
const weclapp = require('@weclapp/connect')

(async () => {
	const user = await weclapp({
		username: '<USERNAME>',
		apikey: '<APIKEY>',
		tenant: '<TENANT>'
	})
	
	// Prints time-records to the console
	console.log(await user.request('timeRecord'))
})()
```

## License
This project is available under the [MIT](https://choosealicense.com/licenses/mit/) license.
