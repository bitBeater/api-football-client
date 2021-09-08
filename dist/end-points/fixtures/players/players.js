"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.players = void 0;
const utils_1 = require("../../../common/utils");
/** https://www.api-football.com/documentation-v3#operation/get-fixtures-players */
exports.players = utils_1.apiFootballRequest('https://api-football-v1.p.rapidapi.com/v3/fixtures/players');
//# sourceMappingURL=players.js.map