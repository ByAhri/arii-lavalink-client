"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AriiQueue = void 0;
const lavalink_client_1 = require("lavalink-client");
class AriiQueue extends lavalink_client_1.Queue {
    constructor(guildId, data, QueueSaver, queueOptions) {
        super(guildId, data, QueueSaver, queueOptions);
    }
}
exports.AriiQueue = AriiQueue;
