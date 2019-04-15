## @weclapp/connect

use this module to connect weclapp rest api from any external app running on nodejs.

## Installation

Use the package manager [weclapp-connect](https://www.npmjs.com/package/@weclapp/connect) to install.

```bash
npm i @weclapp/connect
```

## Usage

#### Before implementing follow below points
+ create a file `connect-config.json` and details like sample below.  

#### 
    {
	   "username": "*",
	   "password": "****",
	   "tenant": "your Tenant url",
	   "apiKey": "**********************",
	   "allowed": ["get", "post", "delete"],
	   "debug":"false"
    }
	
#### Once file is created

```python
import connect from @weclapp/connect

var auth = connect.auth()
console.log(auth)
```



## License
[MIT](https://choosealicense.com/licenses/mit/)