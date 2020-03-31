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
const moment = require("moment");
exports.getTeamInfoForComparison = (teamId) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios_1.default.get(`https://statsapi.web.nhl.com/api/v1/teams/${teamId}?expand=team.stats`);
    const splits = data.teams[0].teamStats[0].splits;
    return {
        id: teamId,
        points: splits[0].stat.pts,
        info: {
            firstYearOfPlay: data.teams[0].firstYearOfPlay,
            venue: data.teams[0].venue.name,
            city: data.teams[0].locationName,
            division: data.teams[0].division.name,
            conference: data.teams[0].conference.name
        },
        record: {
            wins: splits[0].stat.wins,
            losses: splits[0].stat.losses,
            otl: splits[0].stat.ot
        },
        rankings: {
            goalsFor: parseInt(splits[1].stat.goalsPerGame),
            goalsAgainst: parseInt(splits[1].stat.goalsAgainstPerGame),
            powerPlay: parseInt(splits[1].stat.powerPlayPercentage),
            penaltyKill: parseInt(splits[1].stat.penaltyKillPercentage),
            faceoffPerc: parseInt(splits[1].stat.faceOffWinPercentage)
        }
    };
});
exports.fetchPreviousFiveGames = (teamId) => __awaiter(void 0, void 0, void 0, function* () {
    const endDate = moment().subtract(1, 'days').format('YYYY-MM-DD');
    const startDate = moment().subtract(2, 'months').format('YYYY-MM-DD');
    const { data: schedule } = yield axios_1.default.get(`https://statsapi.web.nhl.com/api/v1/schedule?teamId=${teamId}&startDate=${startDate}&endDate=${endDate}`);
    const lastFiveGameIds = schedule.dates.slice(-5).map(game => game.games[0].gamePk);
    const gameDataPromises = lastFiveGameIds.map(gameId => axios_1.default.get(`https://statsapi.web.nhl.com/api/v1/game/${gameId}/boxscore`));
    const lastFiveGames = yield Promise.all(gameDataPromises);
    return lastFiveGames.map(gameData => {
        const teams = gameData.data.teams;
        if (teams.away.team.id === teamId) {
            return teams.away.teamStats.teamSkaterStats;
        }
        return teams.home.teamStats.teamSkaterStats;
    });
});
//# sourceMappingURL=comparisonService.js.map