"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiFootBAllClient = void 0;
const fixtures_1 = require("./end-points/fixtures/fixtures/fixtures");
const statistics_1 = require("./end-points/fixtures/statistics/statistics");
const odds_1 = require("./end-points/odds/odds/odds");
const players_1 = require("./end-points/fixtures/players/players");
class ApiFootBAllClient {
    constructor(xRapidApiKey) {
        this.xRapidApiKey = xRapidApiKey;
    }
    /** https://www.api-football.com/documentation-v3#operation/get-fixtures */
    fixtures(search) {
        return fixtures_1.fixtures(search, this.xRapidApiKey);
    }
    /** https://www.api-football.com/documentation-v3#operation/get-fixtures-statistics */
    fixturesStatistics(search) {
        return statistics_1.statistics(search, this.xRapidApiKey);
    }
    /** https://www.api-football.com/documentation-v3#operation/get-fixtures-players */
    fixturesPlayers(search) {
        return players_1.players(search, this.xRapidApiKey);
    }
    /** https://www.api-football.com/documentation-v3#operation/get-odds */
    odds(search) {
        return odds_1.odds(search, this.xRapidApiKey);
    }
}
exports.ApiFootBAllClient = ApiFootBAllClient;
//# sourceMappingURL=api-football-client.js.map