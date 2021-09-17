import { ApiFootballResponse } from './common/types';

import { fixtures } from './end-points/fixtures/fixtures/fixtures';
import { statistics } from './end-points/fixtures/statistics/statistics';

import { odds } from './end-points/odds/odds/odds';
import { IncomingMessage } from 'http';
import { players } from './end-points/fixtures/players/players';
import { SearchFixtures, FixtureResponse, SearchFixtureStatistics, FixtureStatisticsResponse, SearchPlayersStatisticsByFixtureId, FixturesPlayersResponse, SerachOdds, OddsResponse } from '.';

export class ApiFootBallClient {
	private readonly xRapidApiKey: string;

	constructor(xRapidApiKey: string) {
		this.xRapidApiKey = xRapidApiKey;
	}

	/** https://www.api-football.com/documentation-v3#operation/get-fixtures */
	public fixtures(search: SearchFixtures): Promise<[ApiFootballResponse<SearchFixtures, FixtureResponse[]>, IncomingMessage]> {
		return fixtures(search, this.xRapidApiKey);
	}

	/** https://www.api-football.com/documentation-v3#operation/get-fixtures-statistics */
	public fixturesStatistics(search: SearchFixtureStatistics): Promise<[ApiFootballResponse<SearchFixtureStatistics, FixtureStatisticsResponse[]>, IncomingMessage]> {
		return statistics(search, this.xRapidApiKey);
	}

	/** https://www.api-football.com/documentation-v3#operation/get-fixtures-players */
	public fixturesPlayers(search: SearchPlayersStatisticsByFixtureId): Promise<[ApiFootballResponse<SearchPlayersStatisticsByFixtureId, FixturesPlayersResponse[]>, IncomingMessage]> {
		return players(search, this.xRapidApiKey);
	}

	/** https://www.api-football.com/documentation-v3#operation/get-odds */
	public odds(search: SerachOdds): Promise<[ApiFootballResponse<SerachOdds, OddsResponse[]>, IncomingMessage]> {
		return odds(search, this.xRapidApiKey);
	}
}
