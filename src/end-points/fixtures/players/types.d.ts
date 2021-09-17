import { Player, Team } from '../../../common/types';

export module palyersTypes {
	export interface SearchPlayersStatisticsByFixtureId {
		/** The id of the fixture */
		fixture: number;

		/** The id of the team */
		team?: number;
	}

	export interface FixturesPlayersResponse {
		team: UpdatedTeam;
		players: PlayerStatistics[];
	}

	export interface UpdatedTeam extends Team {
		/** date */
		update: string;
	}

	export interface Games {
		minutes: number;
		number: number;
		position: string;
		rating: string;
		captain: boolean;
		substitute: boolean;
	}

	export interface Shots {
		total: number;
		on: number;
	}

	export interface Goals {
		total?: any;
		conceded: number;
		assists?: any;
		saves: number;
	}

	export interface Passes {
		total: number;
		key: number;
		accuracy: string;
	}

	export interface Tackles {
		total?: any;
		blocks: number;
		interceptions: number;
	}

	export interface Duels {
		total?: any;
		won?: any;
	}

	export interface Dribbles {
		attempts: number;
		success: number;
		past?: any;
	}

	export interface Fouls {
		drawn: number;
		committed: number;
	}

	export interface Cards {
		yellow: number;
		red: number;
	}

	export interface Penalty {
		won?: any;
		commited?: any;
		scored: number;
		missed: number;
		saved: number;
	}

	export interface Statistic {
		games: Games;
		offsides?: any;
		shots: Shots;
		goals: Goals;
		passes: Passes;
		tackles: Tackles;
		duels: Duels;
		dribbles: Dribbles;
		fouls: Fouls;
		cards: Cards;
		penalty: Penalty;
	}

	export interface PlayerStatistics {
		player: Player;
		statistics: Statistic[];
	}
}
