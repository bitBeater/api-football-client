import { FixtureStatistics,SearchFixtureStatistics } from './statistics.d';
import {http}from "iggs-utils"
import { ApiFootballResponse } from 'common/common';

export function statistics(search:SearchFixtureStatistics, xRapidApiKey:string):Promise<ApiFootballResponse<SearchFixtureStatistics,FixtureStatistics[]>>{
    return http.httpRequest({
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics',
        searchParams: search as any,
        headers: {
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
          'x-rapidapi-key': xRapidApiKey
        }
    }).then(response => JSON.parse(response.data));
}
