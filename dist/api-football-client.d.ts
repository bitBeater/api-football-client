/// <reference types="node" />
import { ApiFootballResponse } from './common/types';
import { statisticsTypes } from './end-points/fixtures/statistics/statistics.d';
import { palyersTypes } from './end-points/fixtures/players/types';
import { oddsTypes } from './end-points/odds/odds/types';
import { IncomingMessage } from 'http';
import { fixturesTypes } from '.';
export declare class ApiFootBallClient {
    private readonly xRapidApiKey;
    constructor(xRapidApiKey: string);
    /** https://www.api-football.com/documentation-v3#operation/get-fixtures */
    fixtures(search: fixturesTypes.SearchFixtures): Promise<[ApiFootballResponse<fixturesTypes.SearchFixtures, fixturesTypes.FixtureResponse[]>, IncomingMessage]>;
    /** https://www.api-football.com/documentation-v3#operation/get-fixtures-statistics */
    fixturesStatistics(search: statisticsTypes.SearchFixtureStatistics): Promise<[ApiFootballResponse<statisticsTypes.SearchFixtureStatistics, statisticsTypes.FixtureStatisticsResponse[]>, IncomingMessage]>;
    /** https://www.api-football.com/documentation-v3#operation/get-fixtures-players */
    fixturesPlayers(search: palyersTypes.SearchPlayersStatisticsByFixtureId): Promise<[ApiFootballResponse<palyersTypes.SearchPlayersStatisticsByFixtureId, palyersTypes.FixturesPlayersResponse[]>, IncomingMessage]>;
    /** https://www.api-football.com/documentation-v3#operation/get-odds */
    odds(search: oddsTypes.SerachOdds): Promise<[ApiFootballResponse<oddsTypes.SerachOdds, oddsTypes.OddsResponse[]>, IncomingMessage]>;
}
//# sourceMappingURL=api-football-client.d.ts.map