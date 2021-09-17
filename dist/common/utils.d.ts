/// <reference types="node" />
import { ApiFootballResponse } from './types';
import { IncomingMessage } from 'http';
export declare function YYYYMMDD(date: Date): string;
export declare function apiFootballRequest<R, T>(url: string, parseSearch?: (R: any) => any, method?: string): (search: R, xRapidApiKey: string) => Promise<[ApiFootballResponse<R, T>, IncomingMessage]>;
export declare function getAppFolder(): string;
//# sourceMappingURL=utils.d.ts.map