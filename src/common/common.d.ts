export interface Team {
    id: number,
    name: string,
    logo: string,
}

export interface Player {
    id: number;
    name: string;
    photo: string;
}

export interface ApiFootballResponse<P,R>{
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
    round: string;
}