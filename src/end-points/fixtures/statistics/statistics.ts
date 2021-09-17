import { statisticsTypes   } from './statistics.d';
import { apiFootballRequest } from '../../../common/utils';

/** https://www.api-football.com/documentation-v3#operation/get-fixtures-statistics */
export const statistics = apiFootballRequest<statisticsTypes.SearchFixtureStatistics, statisticsTypes.FixtureStatisticsResponse[]>('https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics');
