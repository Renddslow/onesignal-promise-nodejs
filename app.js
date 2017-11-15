'use strict';

module.exports = (config) => {
	return {
		createNotification: require('./src/createNotification')(config),
		cancelNotification: require('./src/cancelNotification')(config),
		viewNotification: require('./src/viewNotification')(config),
		viewNotifications: require('./src/viewNotifications')(config)
	};
};

