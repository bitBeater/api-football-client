import { ApiFootballResponse } from './common/types';

import { fixtures } from './end-points/fixtures/fixtures/fixtures';
import { statistics } from './end-points/fixtures/statistics/statistics';
import { odds } from './end-points/odds/odds/odds';
import { IncomingMessage } from 'http';
import { players } from './end-points/fixtures/players/players';
import { FixtureResponse, SearchFixtures } from './end-points/fixtures/fixtures/types';
import { FixtureStatisticsResponse, SearchFixtureStatistics } from './end-points/fixtures/statistics/types';
import { FixturesPlayersResponse, SearchPlayersStatisticsByFixtureId } from './end-points/fixtures/players/types';
import { OddsResponse, SerachOdds } from './end-points/odds/odds/types';

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
