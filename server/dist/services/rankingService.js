"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
exports.getCurrentRankings = () => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios_1.default.get('https://statsapi.web.nhl.com/api/v1/standings');
    const rankings = [];
    data.records.forEach(division => {
        division.teamRecords.forEach(team => {
            rankings.push({
                id: team.team.id.toString(),
                rank: team.leagueRank,
                points: team.points.toString()
            });
        });
    });
    rankings.sort((team1, team2) => Number(team1.rank) - Number(team2.rank));
    return rankings;
});
//# sourceMappingURL=rankingService.js.map