import { Player, PlayerOptions, LavalinkManager } from "lavalink-client";
import { AriiQueue } from "./queue.js";
export declare class AriiPlayer extends Player {
    queue: AriiQueue;
    constructor(options: PlayerOptions, lavalinkManager: LavalinkManager);
}
