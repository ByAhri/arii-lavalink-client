import { ManagerQueueOptions, Queue, QueueSaver, StoredQueue } from "lavalink-client";
export declare class AriiQueue extends Queue {
    constructor(guildId: string, data?: Partial<StoredQueue>, QueueSaver?: QueueSaver, queueOptions?: ManagerQueueOptions);
}
