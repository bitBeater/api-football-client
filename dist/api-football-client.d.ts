/// <reference types="node" />
import { ApiFootballResponse } from './common/types';
import { IncomingMessage } from 'http';
import { FixtureResponse, SearchFixtures } from './end-points/fixtures/fixtures/types';
import { FixtureStatisticsResponse, SearchFixtureStatistics } from './end-points/fixtures/statistics/types';
import { FixturesPlayersResponse, SearchPlayersStatisticsByFixtureId } from './end-points/fixtures/players/types';
import { OddsResponse, SerachOdds } from './end-points/odds/odds/types';
export declare class ApiFootBallClient {
	private readonly xRapidApiKey;
	constructor(xRapidApiKey: string);
	/** https://www.api-football.com/documentation-v3#operation/get-fixtures */
	fixtures(search: SearchFixtures): Promise<[ApiFootballResponse<SearchFixtures, FixtureResponse[]>, IncomingMessage]>;
	/** https://www.api-football.com/documentation-v3#operation/get-fixtures-statistics */
	fixturesStatistics(search: SearchFixtureStatistics): Promise<[ApiFootballResponse<SearchFixtureStatistics, FixtureStatisticsResponse[]>, IncomingMessage]>;
	/** https://www.api-football.com/documentation-v3#operation/get-fixtures-players */
	fixturesPlayers(search: SearchPlayersStatisticsByFixtureId): Promise<[ApiFootballResponse<SearchPlayersStatisticsByFixtureId, FixturesPlayersResponse[]>, IncomingMessage]>;
	/** https://www.api-football.com/documentation-v3#operation/get-odds */
	odds(search: SerachOdds): Promise<[ApiFootballResponse<SerachOdds, OddsResponse[]>, IncomingMessage]>;
}
//# sourceMappingURL=api-football-client.d.ts.map
