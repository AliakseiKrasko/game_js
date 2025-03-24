import {GameStatuses} from "./game-statuses";
import {ShogunNumberUtility} from "./shogun-number-utility";

export class Game {
    #status = GameStatuses.SETTINGS

    #gooslePosition = null
    /**
     * @private
     * @type {ShogunNumberUtility}
     * Утилита для работы со случайными числами.
     */
    #numberUtility;// = new ShogunNumberUtility()
    /**
     * Создаёт экземпляр игры с переданной утилитой случайных чисел.
     *
     * @param {ShogunNumberUtility} somethingSimilarToNumberUtility - Объект, содержащий метод генерации случайных чисел.
     */
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
    /**
     * Устанавливает новый интервал прыжка для "гугла".
     *
     * @param {number} newValue - Новый интервал в миллисекундах. Должен быть положительным числом.
     * @throws {TypeError} Если передано не число или число меньше/равно нулю.
     */

    set googleJumpInterval(newValue) {
        if (typeof newValue !== 'number') {
            throw new TypeError('Interval must be a number.');
        }
        if (newValue <= 0) {
            throw new TypeError('Interval must be greater than 0.');
        }
        this.#settings.googleJumpInterval = newValue;
    }

    start() {
        if (this.#status !== GameStatuses.SETTINGS) {
            throw new Error("Game must be in Settings before Start")
        }
        this.#status = GameStatuses.IN_PROGRESS
        this.#makeGoogleJump()

        setInterval(() => {
            this.#makeGoogleJump()
        }, this.#settings.googleJumpInterval )
    }

    #makeGoogleJump() {
        const newPosition = {
            x: this.#numberUtility.getRandomIntegerNumber(0, this.#settings.gridSize.columnsCount),
            y: this.#numberUtility.getRandomIntegerNumber(0, this.#settings.gridSize.rowsCount),
        }
        if(newPosition.x === this.gooslePosition?.x && newPosition.y === this.gooslePosition.y) {
            this.#makeGoogleJump()
            return
        }
        this.#gooslePosition = newPosition
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

