"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomPlayer = void 0;
const lavalink_client_1 = require("lavalink-client");
class CustomPlayer extends lavalink_client_1.Player {
    constructor(options, lavalinkManager) {
        super(options, lavalinkManager);
    }
}
exports.CustomPlayer = CustomPlayer;
