import { http } from 'iggs-utils';
import { ApiFootballResponse } from './types';
import { IncomingMessage } from 'http';

export function YYYYMMDD(date: Date): string {
	if (date) return `${date.getFullYear()}-${(date.getMonth() + 1 + '').padStart(2, '0')}-${(date.getDate() + '').padStart(2, '0')}`;
}

export function apiFootballRequest<R, T>(url: string, parseSearch?: (R) => any, method = 'GET'): (search: R, xRapidApiKey: string) => Promise<[ApiFootballResponse<R, T>, IncomingMessage]> {
	return (search: R, xRapidApiKey: string) => {
		const _search = search || parseSearch?.(search);

		return http
			.httpRequest({
				method,
				url,
				searchParams: _search as any,
				headers: {
					'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
					'x-rapidapi-key': xRapidApiKey
				}
			})
			.then(response => [JSON.parse(response?.data), response?.response]);
	};
}

export function getAppFolder(): string {
	return require('path').resolve('./');
}
