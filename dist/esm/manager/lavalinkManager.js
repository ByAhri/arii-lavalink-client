import { LavalinkManager } from "lavalink-client";
import { AriiPlayer } from "../player/player.js";
export class AriiLavalinkManager extends LavalinkManager {
    constructor(options) {
        super(options);
    }
    createPlayer = (options) => {
        return new AriiPlayer(options, this);
    };
}
