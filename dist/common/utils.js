"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppFolder = exports.apiFootballRequest = exports.YYYYMMDD = void 0;
const iggs_utils_1 = require("iggs-utils");
function YYYYMMDD(date) {
    if (date)
        return `${date.getFullYear()}-${(date.getMonth() + 1 + '').padStart(2, '0')}-${(date.getDate() + '').padStart(2, '0')}`;
}
exports.YYYYMMDD = YYYYMMDD;
function apiFootballRequest(url, parseSearch, method = 'GET') {
    return (search, xRapidApiKey) => {
        const _search = search || parseSearch?.(search);
        return iggs_utils_1.http
            .httpRequest({
            method,
            url,
            searchParams: _search,
            headers: {
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
                'x-rapidapi-key': xRapidApiKey
            }
        })
            .then(response => [JSON.parse(response?.data), response?.response]);
    };
}
exports.apiFootballRequest = apiFootballRequest;
function getAppFolder() {
    return require('path').resolve('./');
}
exports.getAppFolder = getAppFolder;
//# sourceMappingURL=utils.js.map