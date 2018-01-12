
import { promisifyAll } from 'bluebird';
import * as redis from 'redis';
promisifyAll(redis.RedisClient.prototype)
promisifyAll(redis.Multi.prototype);
declare module 'redis' {
  export interface PromisifiedOverloadedCommand<T, U> {
    (arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T): Promise<U>;
    (arg1: T, arg2: T, arg3: T, arg4: T, arg5: T): Promise<U>;
    (arg1: T, arg2: T, arg3: T, arg4: T): Promise<U>;
    (arg1: T, arg2: T, arg3: T): Promise<U>;
    (arg1: T, arg2: T | T[]): Promise<U>;
    (arg1: T | T[]): Promise<U>;
    (...args: Array<T>): Promise<U>;
  }

  export interface PromisifiedOverloadedKeyCommand<T, U> {
    (key: string, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T): Promise<U>;
    (key: string, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T): Promise<U>;
    (key: string, arg1: T, arg2: T, arg3: T, arg4: T): Promise<U>;
    (key: string, arg1: T, arg2: T, arg3: T): Promise<U>;
    (key: string, arg1: T, arg2: T): Promise<U>;
    (key: string, arg1: T | T[]): Promise<U>;
    (key: string, ...args: Array<T>): Promise<U>;
    (...args: Array<string | T>): Promise<U>;
  }

  export interface PromisifiedOverloadedListCommand<T, U> {
    (arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T): Promise<U>;
    (arg1: T, arg2: T, arg3: T, arg4: T, arg5: T): Promise<U>;
    (arg1: T, arg2: T, arg3: T, arg4: T): Promise<U>;
    (arg1: T, arg2: T, arg3: T): Promise<U>;
    (arg1: T, arg2: T): Promise<U>;
    (arg1: T | T[]): Promise<U>;
    (...args: Array<T>): Promise<U>;
  }

  export interface PromisifiedOverloadedSetCommand<T, U> {
    (key: string, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T): Promise<U>;
    (key: string, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T): Promise<U>;
    (key: string, arg1: T, arg2: T, arg3: T, arg4: T): Promise<U>;
    (key: string, arg1: T, arg2: T, arg3: T): Promise<U>;
    (key: string, arg1: T, arg2: T): Promise<U>;
    (key: string, arg1: T | { [key: string]: T } | T[]): Promise<U>;
    (key: string, ...args: Array<T>): Promise<U>;
  }

  export interface PromisifiedOverloadedLastCommand<T1, T2, U> {
    (arg1: T1, arg2: T1, arg3: T1, arg4: T1, arg5: T1, arg6: T2): Promise<U>;
    (arg1: T1, arg2: T1, arg3: T1, arg4: T1, arg5: T2): Promise<U>;
    (arg1: T1, arg2: T1, arg3: T1, arg4: T2): Promise<U>;
    (arg1: T1, arg2: T1, arg3: T2): Promise<U>;
    (arg1: T1, arg2: T2 | Array<T1 | T2>): Promise<U>;
    (args: Array<T1 | T2>): Promise<U>;
    (...args: Array<T1 | T2>): Promise<U>;
  }

  export interface Commands<R> {
    /**
     * Listen for all requests received by the server in real time.
     */
    monitorAsync(): Promise<undefined>;
    /**
     * Get information and statistics about the server.
     */
    infoAsync(section?: string | string[]): Promise<ServerInfo>;
    /**
     * Ping the server.
     */
    pingAsync(message?: string): Promise<string>;
    /**
     * Post a message to a channel.
     */
    publishAsync(channel: string, value: string): Promise<number>;
    /**
     * Authenticate to the server.
     */
    authAsync(password: string): Promise<string>;
    /**
     * KILL - Kill the connection of a client.
     * LIST - Get the list of client connections.
     * GETNAME - Get the current connection name.
     * PAUSE - Stop processing commands from clients for some time.
     * REPLY - Instruct the server whether to reply to commands.
     * SETNAME - Set the current connection name.
     */
    clientAsync: PromisifiedOverloadedCommand<string, any>;
    /**
     * Delete a key.
     */
    delAsync: PromisifiedOverloadedCommand<string, number>;
  }
}
