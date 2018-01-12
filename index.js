'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const redis = require('redis');
if (typeof redis.RedisClient.prototype.delAsync === 'undefined'
    && typeof redis.Multi.prototype.delAsync === 'undefined') {
    const bluebird = require('bluebird');
    bluebird.promisifyAll(redis.RedisClient.prototype);
    bluebird.promisifyAll(redis.Multi.prototype);
}
