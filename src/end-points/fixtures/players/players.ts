import { apiFootballRequest } from '../../../common/utils';
import { SearchPlayersStatisticsByFixtureId, FixturesPlayersResponse } from './types';

/** https://www.api-football.com/documentation-v3#operation/get-fixtures-players */
export const players = apiFootballRequest<SearchPlayersStatisticsByFixtureId, FixturesPlayersResponse[]>('https://api-football-v1.p.rapidapi.com/v3/fixtures/players');
