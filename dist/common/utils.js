"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppFolder = exports.apiFootballRequest = exports.YYYYMMDD = void 0;
var iggs_utils_1 = require("iggs-utils");
function YYYYMMDD(date) {
    if (date)
        return date.getFullYear() + "-" + (date.getMonth() + 1 + '').padStart(2, '0') + "-" + (date.getDate() + '').padStart(2, '0');
}
exports.YYYYMMDD = YYYYMMDD;
function apiFootballRequest(url, parseSearch, method) {
    if (method === void 0) { method = 'GET'; }
    return function (search, xRapidApiKey, logger) {
        var _search = (parseSearch === null || parseSearch === void 0 ? void 0 : parseSearch(search)) || search || {};
        var httpReq = {
            method: method,
            url: url,
            searchParams: _search,
            headers: {
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
                'x-rapidapi-key': xRapidApiKey
            }
        };
        return new Promise(function (r) {
            var _a, _b;
            (_a = logger === null || logger === void 0 ? void 0 : logger.debug) === null || _a === void 0 ? void 0 : _a.call(logger, 'start http api-request: ', JSON.stringify(_search));
            (_b = logger === null || logger === void 0 ? void 0 : logger.trace) === null || _b === void 0 ? void 0 : _b.call(logger, JSON.stringify(httpReq));
            r();
        })
            .then(function () { return iggs_utils_1.http.httpRequest(httpReq); })
            .then(function (response) { return [JSON.parse(response === null || response === void 0 ? void 0 : response.data), response === null || response === void 0 ? void 0 : response.response]; });
    };
}
exports.apiFootballRequest = apiFootballRequest;
function getAppFolder() {
    return require('path').resolve('./');
}
exports.getAppFolder = getAppFolder;
//# sourceMappingURL=utils.js.map