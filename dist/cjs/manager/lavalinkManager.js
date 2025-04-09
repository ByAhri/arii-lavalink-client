"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AriiLavalinkManager = void 0;
const lavalink_client_1 = require("lavalink-client");
const player_js_1 = require("../player/player.js");
class AriiLavalinkManager extends lavalink_client_1.LavalinkManager {
    constructor(options) {
        super(options);
    }
    createPlayer = (options) => {
        return new player_js_1.AriiPlayer(options, this);
    };
}
exports.AriiLavalinkManager = AriiLavalinkManager;
