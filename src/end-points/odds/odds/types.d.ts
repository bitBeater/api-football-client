import { Bookmaker, Fixture, League } from '../../../common/types';

export namespace oddsTypes {
	export interface SerachOdds {
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
		date?: Date;

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

	export interface OddsResponse {
		league: League;
		fixture: Fixture;
		update: string;
		bookmakers: Bookmaker[];
	}
}
