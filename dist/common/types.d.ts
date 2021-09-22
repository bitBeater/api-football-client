export interface Team {
    id: number;
    name: string;
    logo: string;
}
export interface Player {
    id: number;
    name: string;
    photo: string;
}
export interface ApiFootballResponse<P, R> {
    get: string;
    parameters: P;
    errors: any[];
    results: number;
    paging: {
        current: number;
        total: number;
    };
    response: R;
}
export interface Fixture {
    id: number;
    referee: string;
    timezone: string;
    date: string;
    timestamp: number;
}
export interface FixtureResult extends Fixture {
    periods: {
        first?: number;
        second?: number;
    };
    venue: {
        id?: number;
        name: string;
        city: string;
    };
    status: {
        long: string;
        short: string;
        elapsed?: number;
    };
}
export interface League {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
}
export interface RoundLeague extends League {
    round: string;
}
export interface Odd {
    value: string;
    odd: string;
}
export interface Bet {
    id: number;
    name: string;
    values: Odd[];
}
export interface Bookmaker {
    id: number;
    name: string;
    bets: Bet[];
}
export interface Logger {
    trace?(...data: any[]): any;
    debug?(...data: any[]): any;
    info?(...data: any[]): any;
    warn?(...data: any[]): any;
    error?(...data: any[]): any;
    fatal?(...data: any[]): any;
}
export interface ApiRequest<R, T> {
    search: R;
    xRapidApiKey: string;
    logger?: Logger;
    onBeforeExecute?: () => void;
    onAfterExecute?: () => void;
}
//# sourceMappingURL=types.d.ts.map