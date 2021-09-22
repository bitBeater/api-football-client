"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiFootBallClient = void 0;
var fixtures_1 = require("./end-points/fixtures/fixtures/fixtures");
var statistics_1 = require("./end-points/fixtures/statistics/statistics");
var odds_1 = require("./end-points/odds/odds/odds");
var players_1 = require("./end-points/fixtures/players/players");
var ApiFootBallClient = /** @class */ (function () {
    function ApiFootBallClient(xRapidApiKey, logger) {
        this.xRapidApiKey = xRapidApiKey;
        this.logger = logger;
    }
    /** https://www.api-football.com/documentation-v3#operation/get-fixtures */
    ApiFootBallClient.prototype.fixtures = function (search) {
        return fixtures_1.fixtures(search, this.xRapidApiKey, this.logger);
    };
    /** https://www.api-football.com/documentation-v3#operation/get-fixtures-statistics */
    ApiFootBallClient.prototype.fixturesStatistics = function (search) {
        return statistics_1.statistics(search, this.xRapidApiKey, this.logger);
    };
    /** https://www.api-football.com/documentation-v3#operation/get-fixtures-players */
    ApiFootBallClient.prototype.fixturesPlayers = function (search) {
        return players_1.players(search, this.xRapidApiKey, this.logger);
    };
    /** https://www.api-football.com/documentation-v3#operation/get-odds */
    ApiFootBallClient.prototype.odds = function (search) {
        return odds_1.odds(search, this.xRapidApiKey, this.logger);
    };
    return ApiFootBallClient;
}());
exports.ApiFootBallClient = ApiFootBallClient;
//# sourceMappingURL=api-football-client.js.map