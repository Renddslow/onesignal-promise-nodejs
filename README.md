# OneSignal Promise SDK
A super simple promise-based node sdk for creating, canceling, and view notifications in OneSignal.

# Super simple to use
```js
const oneSignal = require('onesignal-promise')({ appId: 'APP_ID', apiKey: 'API_KEY' });
oneSignal.createNotification({ contents: {'en': 'Hello World'} })
	.then(res => {
		if (!res.errors) {
			console.log(res.id);
		}
	});
```

# Installation
```
npm install --save onesignal-promise
```

