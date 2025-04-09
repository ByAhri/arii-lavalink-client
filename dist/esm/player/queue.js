import { Queue } from "lavalink-client";
export class AriiQueue extends Queue {
    constructor(guildId, data, QueueSaver, queueOptions) {
        super(guildId, data, QueueSaver, queueOptions);
    }
}
