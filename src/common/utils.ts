import { http } from 'iggs-utils';
import { ApiFootballResponse, Logger, ApiRequest } from './types';
import { IncomingMessage } from 'http';

export function YYYYMMDD(date: Date): string {
	if (date) return `${date.getFullYear()}-${(date.getMonth() + 1 + '').padStart(2, '0')}-${(date.getDate() + '').padStart(2, '0')}`;
}

export function apiFootballRequest<R, T>(url: string, parseSearch?: (R) => any, method = 'GET'): (s: ApiRequest<R, T>) => Promise<[ApiFootballResponse<R, T>, IncomingMessage]> {
	return s => {
		const _search = parseSearch?.(s?.search) || s?.search || {};
		const httpReq: http.HttpRequestOptions = {
			method,
			url,
			searchParams: _search as any,
			headers: {
				'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
				'x-rapidapi-key': s?.xRapidApiKey
			}
		};

		return new Promise<void>(r => {
			s?.logger?.debug?.('start http api-request: ', JSON.stringify(_search));
			s?.logger?.trace?.(JSON.stringify(httpReq));
			s?.onBeforeExecute?.();
			r();
		})
			.then(() => http.httpRequest(httpReq))
			.then(response => {
				s.onAfterExecute();
				return response;
			})
			.then(response => [JSON.parse(response?.data), response?.response]);
	};
}

export function getAppFolder(): string {
	return require('path').resolve('./');
}
