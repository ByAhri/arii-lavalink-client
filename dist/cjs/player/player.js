"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AriiPlayer = void 0;
const lavalink_client_1 = require("lavalink-client");
const queue_js_1 = require("./queue.js");
class AriiPlayer extends lavalink_client_1.Player {
    queue;
    constructor(options, lavalinkManager) {
        super(options, lavalinkManager);
        this.queue = new queue_js_1.AriiQueue(this.guildId); // Initialize with AriiQueue
    }
}
exports.AriiPlayer = AriiPlayer;
