import {Game} from "./game.js"
import {GameStatuses} from "./game-statuses";
import {ShogunNumberUtility} from "./shogun-number-utility";

describe('game', () => {
    it('game should be created and return status', () => {
        const numberUtil = new ShogunNumberUtility()
        const game = new Game(numberUtil)
        expect(game.status).toBe(GameStatuses.SETTINGS)
    })
    it('game should be created and return status', async () => {
        const numberUtil = new ShogunNumberUtility()
        const game = new Game(numberUtil)
        await game.start()
        expect(game.status).toBe(GameStatuses.IN_PROGRESS)
    })

    it('google should be in the Grid after start', async ()  => {
        const numberUtil = new ShogunNumberUtility()
        for(let i = 0; i < 100; i++){
            const game = new Game(numberUtil)
            expect(game.gooslePosition).toBeNull()
            await game.start()
            expect(game.gooslePosition.x).toBeLessThan(game.gridSize.columnsCount)
            expect(game.gooslePosition.x).toBeGreaterThanOrEqual(0)
            expect(game.gooslePosition.y).toBeLessThan(game.gridSize.rowsCount)
            expect(game.gooslePosition.y).toBeGreaterThanOrEqual(0)
        }

    })

    it('google should be in the Gridafter but in new position after jump', async () => {
        const numberUtil = new ShogunNumberUtility()
        const game = new Game(numberUtil)
        game.googleJumpInterval = 1;
        await game.start()

        for(let i = 0; i <= 100; i++){
            const prevGooglePosition = game.gooslePosition
            await delay(1)
            const currentGooglePosition = game.gooslePosition
            expect(prevGooglePosition).not.toEqual(currentGooglePosition)
        }
    } )
});

const delay = (ms) => new Promise(res =>setTimeout(res, ms))