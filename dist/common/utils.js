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
    return function (s) {
        var _search = (parseSearch === null || parseSearch === void 0 ? void 0 : parseSearch(s === null || s === void 0 ? void 0 : s.search)) || (s === null || s === void 0 ? void 0 : s.search) || {};
        var httpReq = {
            method: method,
            url: url,
            searchParams: _search,
            headers: {
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
                'x-rapidapi-key': s === null || s === void 0 ? void 0 : s.xRapidApiKey
            }
        };
        return new Promise(function (r) {
            var _a, _b, _c, _d, _e;
            (_b = (_a = s === null || s === void 0 ? void 0 : s.logger) === null || _a === void 0 ? void 0 : _a.debug) === null || _b === void 0 ? void 0 : _b.call(_a, 'start http api-request: ', JSON.stringify(_search));
            (_d = (_c = s === null || s === void 0 ? void 0 : s.logger) === null || _c === void 0 ? void 0 : _c.trace) === null || _d === void 0 ? void 0 : _d.call(_c, JSON.stringify(httpReq));
            (_e = s === null || s === void 0 ? void 0 : s.onBeforeExecute) === null || _e === void 0 ? void 0 : _e.call(s);
            r();
        })
            .then(function () { return iggs_utils_1.http.httpRequest(httpReq); })
            .then(function (response) {
            s.onAfterExecute();
            return response;
        })
            .then(function (response) { return [JSON.parse(response === null || response === void 0 ? void 0 : response.data), response === null || response === void 0 ? void 0 : response.response]; });
    };
}
exports.apiFootballRequest = apiFootballRequest;
function getAppFolder() {
    return require('path').resolve('./');
}
exports.getAppFolder = getAppFolder;
//# sourceMappingURL=utils.js.map