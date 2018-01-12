import { promisifyAll } from 'bluebird';
import { RedisClient, Multi } from 'redis';
promisifyAll(RedisClient.prototype)
promisifyAll(Multi.prototype);