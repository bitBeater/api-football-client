export interface Team {
    id: number,
    name: string,
    logo: string,
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
