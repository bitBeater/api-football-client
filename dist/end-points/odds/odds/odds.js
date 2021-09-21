"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.odds = void 0;
const utils_1 = require("../../../common/utils");
/** https://www.api-football.com/documentation-v3#operation/get-odds */
exports.odds = utils_1.apiFootballRequest('https://api-football-v1.p.rapidapi.com/v3/odds', parseSearch);
function parseSearch(search) {
    if (!search)
        return;
    const retVal = { ...search };
    if (search?.date)
        retVal.date = utils_1.YYYYMMDD(search?.date);
    return retVal;
}
//# sourceMappingURL=odds.js.map