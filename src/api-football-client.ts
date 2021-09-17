import { ApiFootballResponse } from './common/types';
import { fixturesTypes  } from './end-points/fixtures/fixtures/fixtures.d';
import { fixtures } from './end-points/fixtures/fixtures/fixtures';
import { statistics } from './end-points/fixtures/statistics/statistics';
import { statisticsTypes } from './end-points/fixtures/statistics/statistics.d';
import { palyersTypes } from './end-points/fixtures/players/types';
import { oddsTypes } from './end-points/odds/odds/types';
import { odds } from './end-points/odds/odds/odds';
import { IncomingMessage } from 'http';
import { players } from './end-points/fixtures/players/players';

export class ApiFootBallClient {
	private readonly xRapidApiKey: string;

	constructor(xRapidApiKey: string) {
		this.xRapidApiKey = xRapidApiKey;
	}

	/** https://www.api-football.com/documentation-v3#operation/get-fixtures */
	public fixtures(search: fixturesTypes.SearchFixtures): Promise<[ApiFootballResponse<fixturesTypes.SearchFixtures, fixturesTypes.FixtureResponse[]>, IncomingMessage]> {
		return fixtures(search, this.xRapidApiKey);
	}

	/** https://www.api-football.com/documentation-v3#operation/get-fixtures-statistics */
	public fixturesStatistics(search: statisticsTypes.SearchFixtureStatistics): Promise<[ApiFootballResponse<statisticsTypes.SearchFixtureStatistics, statisticsTypes.FixtureStatisticsResponse[]>, IncomingMessage]> {
		return statistics(search, this.xRapidApiKey);
	}

	/** https://www.api-football.com/documentation-v3#operation/get-fixtures-players */
	public fixturesPlayers(search: palyersTypes.SearchPlayersStatisticsByFixtureId): Promise<[ApiFootballResponse<palyersTypes.SearchPlayersStatisticsByFixtureId, palyersTypes.FixturesPlayersResponse[]>, IncomingMessage]> {
		return players(search, this.xRapidApiKey);
	}

	/** https://www.api-football.com/documentation-v3#operation/get-odds */
	public odds(search: oddsTypes.SerachOdds): Promise<[ApiFootballResponse<oddsTypes.SerachOdds, oddsTypes.OddsResponse[]>, IncomingMessage]> {
		return odds(search, this.xRapidApiKey);
	}
}
