import { Player, PlayerOptions, LavalinkManager } from "lavalink-client";
import { AriiQueue } from "./queue";

export class AriiPlayer extends Player {
    public queue: AriiQueue;

    constructor(options: PlayerOptions, lavalinkManager: LavalinkManager) {
        super(options, lavalinkManager);
        this.queue = new AriiQueue(this.guildId); // Initialize with AriiQueue
    }
}