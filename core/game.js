import {GameStatuses} from "./game-statuses";

export class Game {
    #status = GameStatuses.SETTINGS

    #gooslePosition = null

    #settings = {
        gridSize: {
            columnsCount: 4,
            rowsCount: 4
        },
        googleJumpInterval: 1000
    }

    start() {
        if (this.#status !== GameStatuses.SETTINGS) {
            throw new Error("Game must be in Settings before Start")
        }
        this.#status = GameStatuses.IN_PROGRESS
        this.#gooslePosition = {
            x: 0,
            y: 0
        }
    }

    get status() {
        return this.#status
    }
    get gooslePosition() {
        return this.#gooslePosition
    }
    get gridSize() {
        return this.#settings.gridSize
    }
}

