'use strict';
const request = require('request-promise');
const Bluebird = require('bluebird');
const extend = require('extend');

module.exports = ({ appId, apiKey }) => {
	return (data) => {
		return Bluebird.try(() => {
			const message = extend(true, {}, data);
			if (!message.contents && !message.content_available) {
				throw Error('Contents are required in notification');
			}

			message.app_id = appId;

			const headers = {
				'Content-Type': 'application/json; charset=utf-8',
				'Authorization': `Basic ${apiKey}`
			};

			return request({
				method: 'POST',
				url: 'https://onesignal.com/api/v1/notifications',
				headers,
				body: message,
				json: true
			});
		});
	};
};
