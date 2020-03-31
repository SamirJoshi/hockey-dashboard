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
const express_1 = require("express");
const comparisonService_1 = require("../services/comparisonService");
const router = express_1.Router();
router.get('/team', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { team1, team2 } = req.query;
    if (!!team1 && !!team2) {
        const team1Data = yield comparisonService_1.getTeamInfoForComparison(team1);
        const team2Data = yield comparisonService_1.getTeamInfoForComparison(team2);
        return res.status(200).send({
            team1: team1Data,
            team2: team2Data
        });
    }
    if (!!team1) {
        const team1Data = yield comparisonService_1.getTeamInfoForComparison(team1);
        return res.status(200).send({ team1: team1Data });
    }
    if (!!team2) {
        const team2Data = yield comparisonService_1.getTeamInfoForComparison(team2);
        return res.status(200).send({ team2: team2Data });
    }
    return res.status(400).send();
}));
router.get('/last-five', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { teamId } = req.query;
    if (!!teamId) {
        const lastFive = yield comparisonService_1.fetchPreviousFiveGames(teamId);
        return res.status(200).send(lastFive);
    }
    return res.status(400).send();
}));
router.get('/details', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { teamId } = req.query;
    if (!!teamId) {
        const teamData = yield comparisonService_1.getTeamInfoForComparison(teamId);
        const lastFive = yield comparisonService_1.fetchPreviousFiveGames(teamId);
        return res.status(200).send({
            teamData,
            lastFive
        });
    }
    return res.status(400).send();
}));
exports.default = router;
//# sourceMappingURL=comparisonRouter.js.map