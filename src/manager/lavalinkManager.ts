import { Player, PlayerOptions, LavalinkManager, ManagerOptions } from "lavalink-client";
import { AriiPlayer } from "../player/player";

export class AriiLavalinkManager extends LavalinkManager {
    constructor(options: ManagerOptions) {
        super(options);

        this.createPlayer = (options: PlayerOptions): AriiPlayer => {
            return new AriiPlayer(options, this);
        }
    }
}