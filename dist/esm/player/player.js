import { Player } from "lavalink-client";
import { AriiQueue } from "./queue.js";
export class AriiPlayer extends Player {
    queue;
    constructor(options, lavalinkManager) {
        super(options, lavalinkManager);
        this.queue = new AriiQueue(this.guildId); // Initialize with AriiQueue
    }
}
