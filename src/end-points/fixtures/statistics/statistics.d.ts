import { Team } from '../../../common/types';

export namespace statisticsTypes{
	export enum FixtureStatisticType {
		SHOTS_ON_GOAL = 'Shots on Goal',
		SHOTS_OFF_GOAL = 'Shots off Goal',
		TOTAL_SHOTS = 'Total Shots',
		BLOCKED_SHOTS = 'Blocked Shots',
		SHOTS_INSIDEBOX = 'Shots insidebox',
		SHOTS_OUTSIDEBOX = 'Shots outsidebox',
		FOULS = 'Fouls',
		CORNER_KICKS = 'Corner Kicks',
		OFFSIDES = 'Offsides',
		BALL_POSSESSION = 'Ball Possession',
		YELLOW_CARDS = 'Yellow Cards',
		RED_CARDS = 'Red Cards',
		GOALKEEPER_SAVES = 'Goalkeeper Saves',
		TOTAL_PASSES = 'Total passes',
		PASSES_ACCURATE = 'Passes accurate',
		PASSES_PERC = 'Passes %'
	}
	
	export interface FixtureStatisticsResponse {
		team: Team;
		statistics: { type: FixtureStatisticType; value: number }[];
	}
	
	export interface SearchFixtureStatistics {
		fixture: number;
		team?: number;
		team_id?: string;
	}
}
