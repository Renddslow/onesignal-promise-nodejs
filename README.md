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

# Methods

## `createNotification`
Expects a OneSignal [notification object](https://documentation.onesignal.com/reference#create-notification) and MUST include either a `contents` object or have `content_available` set to `true` or it will throw.

### Responses
`200 OK`
```
{
	id: '458dcec4-cf53-11e3-add2-000c2940e62c',
	recipients: 3
}
```

`400 Bad Request`
```
{
	errors: ['Notification content must not be null for any languages.']
}
```

`200 No Subscribed Players`
Made if no phones are subscribed to a segment
```
{
	id: '',
	recipients: 0,
	errors: ['All included players are not subscribed']
}
```

## `cancelNotification`
Expects an id of an existing notification.

```
onesignal.cancelNotification('6392d91a-b206-4b7b-a620-cd68e32c3a76')
	.then(result => {
		console.log(result)
	})

>>> { success: true }
```
`
