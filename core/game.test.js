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
        const game = new Game()
        await game.start()
        expect(game.status).toBe(GameStatuses.IN_PROGRESS)
    })

    it('google should be in the Grid after start', async ()  => {
        const game = new Game()
        expect(game.gooslePosition).toBeNull()
        await game.start()
        expect(game.gooslePosition.x).toBeLessThan(game.gridSize.columnsCount)
        expect(game.gooslePosition.x).toBeGreaterThanOrEqual(0)
        expect(game.gooslePosition.y).toBeLessThan(game.gridSize.rowsCount)
        expect(game.gooslePosition.y).toBeGreaterThanOrEqual(0)
    })
});