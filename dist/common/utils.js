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
            var _a, _b, _c, _d, _e, _f, _g;
            (_b = (_a = s === null || s === void 0 ? void 0 : s.logger) === null || _a === void 0 ? void 0 : _a.debug) === null || _b === void 0 ? void 0 : _b.call(_a, 'start http api-request: ', url, JSON.stringify(_search));
            (_d = (_c = s === null || s === void 0 ? void 0 : s.logger) === null || _c === void 0 ? void 0 : _c.trace) === null || _d === void 0 ? void 0 : _d.call(_c, JSON.stringify(httpReq));
            try {
                (_e = s === null || s === void 0 ? void 0 : s.onBeforeExecute) === null || _e === void 0 ? void 0 : _e.call(s);
            }
            catch (error) {
                (_g = (_f = s === null || s === void 0 ? void 0 : s.logger) === null || _f === void 0 ? void 0 : _f.error) === null || _g === void 0 ? void 0 : _g.call(_f, error);
            }
            r();
        })
            .then(function () { return iggs_utils_1.http.httpRequest(httpReq); })
            .then(function (response) {
            var _a, _b, _c;
            var resp = JSON.parse(response === null || response === void 0 ? void 0 : response.data);
            if (isNotSubscribedToApi(resp)) {
                if (resp.message === 'You are not subscribed to this API.')
                    resp.errors = [resp.message + ' or invalid "xRapidApiKey":  ' + (s === null || s === void 0 ? void 0 : s.xRapidApiKey)];
                else
                    resp.errors = [resp.message];
            }
            (_a = resp === null || resp === void 0 ? void 0 : resp.errors) === null || _a === void 0 ? void 0 : _a.forEach(function (e) { var _a; return (_a = s === null || s === void 0 ? void 0 : s.logger) === null || _a === void 0 ? void 0 : _a.error(e); });
            try {
                s.onAfterExecute();
            }
            catch (error) {
                (_c = (_b = s === null || s === void 0 ? void 0 : s.logger) === null || _b === void 0 ? void 0 : _b.error) === null || _c === void 0 ? void 0 : _c.call(_b, error);
            }
            return [resp, response === null || response === void 0 ? void 0 : response.response];
        });
    };
}
exports.apiFootballRequest = apiFootballRequest;
function getAppFolder() {
    return require('path').resolve('./');
}
exports.getAppFolder = getAppFolder;
function isNotSubscribedToApi(response) {
    if (response === void 0) { response = {}; }
    return Object.keys(response).includes('message');
}
//# sourceMappingURL=utils.js.map