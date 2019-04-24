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

## Usage

Create a file `connect-config.json` and insert your credentials:  

```
{
	"username": "*",
	"tenant": "your Tenant url",
	"apiKey": "**********************",
	"debug":"false"
}
```

Than you can use it as proceeding:

```js
import connect from '@weclapp/connect'

(async () => {

	// Authenticate
	const auth = await connect.auth()
	
	// Get time records
	const timeRecords = await connect.call({
		"endPoint': "timeRecord",
		"method": "get"
	});
	
	console.log(timeRecords)
})();
```

## License
This project is available under the [MIT](https://choosealicense.com/licenses/mit/) license.
