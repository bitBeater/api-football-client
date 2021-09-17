import { FixtureResult, RoundLeague, Team } from '../../../common/types';

export module fixturesTypes {
	export interface SearchFixtures {
		/** The id of the fixture*/
		id?: number;

		/** Live */
		live?: 'all' | 'id-id';

		/** Fixtre date */
		date?: Date;

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

		/** From  date */
		from?: Date;

		/** To date */
		to?: Date;

		/** The round of the fixture */
		round?: string;

		/** The status short of the fixture */
		status?: FixtureStatus;

		/** A valid timezone from the endpoint Timezone */
		timezone?: string;
	}

	export enum FixtureStatus {
		/**  : Time To Be Defined,
		 * Fixtures with the status TBD may indicate an incorrect fixture date or time because the fixture date or time is not yet known or final. Fixtures with this status are checked and updated daily. The same applies to fixtures with the status POST, CANC.
		 */
		TBD = 'TBD',

		/**  : Not Started */
		NS = 'NS',

		/**  : First Half, Kick Off */
		FH = '1H',

		/**  : Halftime */
		HT = 'HT',

		/**  : Second Half, 2nd Half Started */
		SH = '2H',

		/**  : Extra Time */
		ET = 'ET',

		/**  : Penalty In Progress */
		P = 'P',

		/**  : Match Finished */
		FT = 'FT',

		/**  : Match Finished After Extra Time */
		AET = 'AET',

		/**  : Match Finished After Penalty */
		PEN = 'PEN',

		/**  : Break Time (in Extra Time) */
		BT = 'BT',

		/**  : Match Suspended */
		SUSP = 'SUSP',

		/**  : Match Interrupted */
		INT = 'INT',

		/**  : Match Postponed */
		PST = 'PST',

		/**  : Match Cancelled */
		CANC = 'CANC',

		/**  : Match Abandoned */
		ABD = 'ABD',

		/**  : Technical Loss */
		AWD = 'AWD',

		/**  : WalkOver */
		WO = 'WO',

		/**  : In Progress * This status is used in very rare cases. It indicates a fixture in progress but the data indicating the half-time or elapsed time are not available. */
		LIVE = 'LIVE'
	}

	export interface FixtureResponse {
		fixture: FixtureResult;
		league: RoundLeague;
		teams: {
			home: FixtureTeam;
			away: FixtureTeam;
		};
		goals: Goals;
		score: {
			halftime: Goals;
			fulltime: Goals;
			extratime: Goals;
			penalty: Goals;
		};
	}

	export interface FixtureTeam extends Team {
		winner?: boolean;
	}

	export interface Goals {
		home?: number;
		away?: number;
	}
}
