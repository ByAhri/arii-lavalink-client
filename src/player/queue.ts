import { ManagerQueueOptions, Queue, QueueSaver, StoredQueue } from "lavalink-client";

export class AriiQueue extends Queue {
    constructor(guildId: string, data?: Partial<StoredQueue>, QueueSaver?: QueueSaver, queueOptions?: ManagerQueueOptions) {
        super(guildId, data, QueueSaver, queueOptions);
    }
}