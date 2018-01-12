"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bluebird_1 = require("bluebird");
const redis_1 = require("redis");
bluebird_1.promisifyAll(redis_1.RedisClient.prototype);
bluebird_1.promisifyAll(redis_1.Multi.prototype);
