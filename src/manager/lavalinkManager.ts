import { Player, PlayerOptions, LavalinkManager, ManagerOptions } from "lavalink-client";
import { AriiPlayer } from "../player/player.js";

export class AriiLavalinkManager extends LavalinkManager {
    constructor(options: ManagerOptions) {
        super(options);
    }
    public createPlayer = (options: PlayerOptions): AriiPlayer => {
        return new AriiPlayer(options, this);
    }
}