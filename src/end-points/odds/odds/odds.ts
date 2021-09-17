import { apiFootballRequest, YYYYMMDD } from '../../../common/utils';
import { oddsTypes } from './types';

/** https://www.api-football.com/documentation-v3#operation/get-odds */
export const odds = apiFootballRequest<oddsTypes.SerachOdds, oddsTypes.OddsResponse[]>('https://api-football-v1.p.rapidapi.com/v3/odds', parseSearch);

interface SearchRequest {
	/** The id of the fixture */
	fixture?: number;

	/** The id of the league */
	league?: number;

	/**
	 * The season of the league
	 * 4 characters Like 2020, 2021 …
	 */
	season?: number;

	/** A valid date */
	date?: string;

	/**A valid timezone from the endpoint Timezone*/
	timezone?: string;
	/**
	 * Use for the pagination
	 * Default: 1
	 */
	page?: number;

	/** The id of the bookmaker */
	bookmaker?: number;

	/** The id of the bet */
	bet?: number;
}

function parseSearch(search: oddsTypes.SerachOdds): SearchRequest {
	if (!search) return;

	const retVal = { ...search } as unknown as SearchRequest;

	if (search?.date) retVal.date = YYYYMMDD(search?.date);

	return retVal;
}
