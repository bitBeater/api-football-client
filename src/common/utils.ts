import { http } from 'iggs-utils';
import { ApiFootballResponse, Logger } from './types';
import { IncomingMessage } from 'http';

export function YYYYMMDD(date: Date): string {
	if (date) return `${date.getFullYear()}-${(date.getMonth() + 1 + '').padStart(2, '0')}-${(date.getDate() + '').padStart(2, '0')}`;
}

export function apiFootballRequest<R, T>(url: string, parseSearch?: (R) => any, method = 'GET'): (search: R, xRapidApiKey: string, logger?: Logger) => Promise<[ApiFootballResponse<R, T>, IncomingMessage]> {
	return (search: R, xRapidApiKey: string, logger?: Logger) => {
		const _search = parseSearch?.(search) || search || {};
		const httpReq: http.HttpRequestOptions = {
			method,
			url,
			searchParams: _search as any,
			headers: {
				'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
				'x-rapidapi-key': xRapidApiKey
			}
		};

		return new Promise<void>(r => {
			logger?.debug?.('start http api-request: ', JSON.stringify(_search));
			logger?.trace?.(JSON.stringify(httpReq));
			r();
		})
			.then(() => http.httpRequest(httpReq))
			.then(response => [JSON.parse(response?.data), response?.response]);
	};
}

export function getAppFolder(): string {
	return require('path').resolve('./');
}
