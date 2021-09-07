"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statistics = void 0;
const iggs_utils_1 = require("iggs-utils");
function statistics(search, xRapidApiKey) {
    return iggs_utils_1.http.httpRequest({
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics',
        searchParams: search,
        headers: {
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
            'x-rapidapi-key': xRapidApiKey
        }
    }).then(response => JSON.parse(response.data));
}
exports.statistics = statistics;
//# sourceMappingURL=statistics.js.map