'use strict';
const request = require('request-promise');

module.exports = ({ appId, apiKey }) => (offset, limit) => {
	return request({
		method: 'GET',
		url: 'https://onesignal.com/api/v1/notifications',
		headers: {
			'Authorization': `Basic ${apiKey}`
		},
		qs: {
			limit,
			offset,
			app_id: appId
		}
	})
};
