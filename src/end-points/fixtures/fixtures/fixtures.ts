import { fixturesTypes } from './fixtures.d';
import { apiFootballRequest, YYYYMMDD } from '../../../common/utils';

/** https://www.api-football.com/documentation-v3#operation/get-fixtures */
export const fixtures = apiFootballRequest<fixturesTypes.SearchFixtures, fixturesTypes.FixtureResponse[]>('https://api-football-v1.p.rapidapi.com/v3/fixtures', parseSearch);

function parseSearch(searchFixtures: fixturesTypes.SearchFixtures) {
	if (!searchFixtures) return;

	const searchRequest = { ...searchFixtures } as unknown as SearchRequest;

	// format dates to strings YYYY-MM-DD
	if (searchFixtures?.date) searchRequest.date = YYYYMMDD(searchFixtures?.date);

	if (searchFixtures?.from) searchRequest.from = YYYYMMDD(searchFixtures?.from);

	if (searchFixtures?.to) searchRequest.to = YYYYMMDD(searchFixtures?.to);

	return searchRequest;
}

interface SearchRequest {
	/** The id of the fixture*/
	id?: number;

	/** Live */
	live?: 'all' | 'id-id';

	/** Fixtre date YYYY-MM-DD */
	date?: string;

	/** The id of the league */
	league?: number;

	/** The season of the league,
	 *  4 characters YYYY */
	season?: number;

	/** The id of the team */
	team?: number;

	/** <= 2 characters, For the X last fixtures */
	last?: number;

	/** <= 2 characters, For the X next fixtures */
	next?: number;

	/** From  date YYYY-MM-DD */
	from?: string;

	/** To date YYYY-MM-DD */
	to?: string;

	/** The round of the fixture */
	round?: string;

	/** The status short of the fixture */
	status?: fixturesTypes.FixtureStatus;

	/** A valid timezone from the endpoint Timezone */
	timezone?: string;
}
