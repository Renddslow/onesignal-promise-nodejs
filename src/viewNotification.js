'use strict';
const request = require('request-promise');

module.exports = ({ appId, apiKey }) => id => {
	return request({
		method: 'GET',
		url: `https://onesignal.com/api/v1/notifications/${id}`,
		headers: {
			'Authorization': `Basic ${apiKey}`
		},
		qs: {
			app_id: appId
		}
	});
};
