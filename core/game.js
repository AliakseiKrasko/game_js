import {GameStatuses} from "./game-statuses";
import {ShogunNumberUtility} from "./shogun-number-utility";

export class Game {
    #status = GameStatuses.SETTINGS

    #gooslePosition = null
    #numberUtility;// = new ShogunNumberUtility()

    constructor(somethingSimilarToNumberUtility) {
        this.#numberUtility = somethingSimilarToNumberUtility
    }

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
            x: this.#numberUtility.getRandomIntegerNumber(0, this.#settings.gridSize.columnsCount),
            y: this.#numberUtility.getRandomIntegerNumber(0, this.#settings.gridSize.rowsCount),
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

