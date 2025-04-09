import { PlayerOptions, LavalinkManager, ManagerOptions } from "lavalink-client";
import { AriiPlayer } from "../player/player.js";
export declare class AriiLavalinkManager extends LavalinkManager {
    constructor(options: ManagerOptions);
    createPlayer: (options: PlayerOptions) => AriiPlayer;
}
