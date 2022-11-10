'use strict';

/**
 * my-login service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-login.my-login');
