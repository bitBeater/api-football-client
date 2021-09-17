import { apiFootballRequest } from '../../../common/utils';
import { palyersTypes } from './types';

/** https://www.api-football.com/documentation-v3#operation/get-fixtures-players */
export const players = apiFootballRequest<palyersTypes.SearchPlayersStatisticsByFixtureId, palyersTypes.FixturesPlayersResponse[]>('https://api-football-v1.p.rapidapi.com/v3/fixtures/players');
