"use strict";
/**
 * 京东-下拉
 * cron: 0 9,13,16,19,23 * * *
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', UserName, index, uuid;
var shareCodeSelf = [], shareCode = [], shareCodeHW = [];
var activityId, encryptProjectId, inviteTaskId;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, e_1, _i, _a, t, i, _b, shareCode_1, code;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _c.sent();
                i = 0;
                _c.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 17];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                uuid = (0, TS_USER_AGENTS_1.randomString)(40);
                _c.label = 3;
            case 3:
                _c.trys.push([3, 5, , 6]);
                return [4 /*yield*/, api('showSecondFloorCardInfo', { "source": "card" })];
            case 4:
                res = _c.sent();
                activityId = res.data.result.activityBaseInfo.activityId;
                encryptProjectId = res.data.result.activityBaseInfo.encryptProjectId;
                return [3 /*break*/, 6];
            case 5:
                e_1 = _c.sent();
                console.log(e_1);
                return [3 /*break*/, 16];
            case 6: return [4 /*yield*/, api('superBrandTaskList', { "source": "card", "activityId": activityId, "assistInfoFlag": 1 })];
            case 7:
                res = _c.sent();
                _i = 0, _a = res.data.result.taskList;
                _c.label = 8;
            case 8:
                if (!(_i < _a.length)) return [3 /*break*/, 14];
                t = _a[_i];
                if (!!t.completionFlag) return [3 /*break*/, 13];
                if (!(t.assignmentName !== '邀请好友' && t.assignmentName !== '去首页限时下拉')) return [3 /*break*/, 11];
                console.log(t.assignmentName);
                return [4 /*yield*/, api('superBrandDoTask', { "source": "card", "activityId": activityId, "encryptProjectId": encryptProjectId, "encryptAssignmentId": t.encryptAssignmentId, "assignmentType": 1, "itemId": t.ext.shoppingActivity[0].itemId, "actionType": 0 })];
            case 9:
                res = _c.sent();
                if (res.data.bizCode === '0') {
                    console.log('任务完成', res.data.result.rewards[1].beanNum);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 10:
                _c.sent();
                _c.label = 11;
            case 11:
                if (!(t.assignmentName === '邀请好友')) return [3 /*break*/, 13];
                inviteTaskId = t.encryptAssignmentId;
                console.log('助力码', t.ext.assistTaskDetail.itemId);
                shareCodeSelf.push(t.ext.assistTaskDetail.itemId);
                return [4 /*yield*/, api('superBrandMyVoteFriendList', { "source": "card", "activityId": activityId, "encryptProjectId": encryptProjectId, "encryptAssignmentId": t.encryptAssignmentId, "assistInfoFlag": 1 })];
            case 12:
                res = _c.sent();
                console.log('收到助力', res.data.result.friendList.length, '/', 30);
                _c.label = 13;
            case 13:
                _i++;
                return [3 /*break*/, 8];
            case 14: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 15:
                _c.sent();
                _c.label = 16;
            case 16:
                i++;
                return [3 /*break*/, 2];
            case 17:
                console.log('内部助力', shareCodeSelf);
                if (!(shareCodeHW.length === 0)) return [3 /*break*/, 19];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('tw')];
            case 18:
                shareCodeHW = _c.sent();
                _c.label = 19;
            case 19:
                shareCode = Array.from(new Set(__spreadArray(__spreadArray([], shareCodeSelf, true), shareCodeHW, true)));
                i = 0;
                _c.label = 20;
            case 20:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 31];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                _b = 0, shareCode_1 = shareCode;
                _c.label = 21;
            case 21:
                if (!(_b < shareCode_1.length)) return [3 /*break*/, 30];
                code = shareCode_1[_b];
                console.log("\u8D26\u53F7 " + UserName + " \u53BB\u52A9\u529B " + code);
                return [4 /*yield*/, api('superBrandDoTask', { "source": "card", "activityId": activityId, "encryptProjectId": encryptProjectId, "encryptAssignmentId": inviteTaskId, "assignmentType": 2, "itemId": code, "actionType": 0 })];
            case 22:
                res = _c.sent();
                if (!(res.data.bizCode === '0')) return [3 /*break*/, 23];
                console.log('成功');
                return [3 /*break*/, 27];
            case 23:
                if (!(res.data.bizCode === '104')) return [3 /*break*/, 24];
                console.log('已助力过');
                return [3 /*break*/, 27];
            case 24:
                if (!(res.data.bizCode === '109')) return [3 /*break*/, 25];
                console.log('不能自己给自己助力');
                return [3 /*break*/, 27];
            case 25:
                console.log('助力失败', res.data.bizMsg);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 26:
                _c.sent();
                return [3 /*break*/, 30];
            case 27: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 28:
                _c.sent();
                _c.label = 29;
            case 29:
                _b++;
                return [3 /*break*/, 21];
            case 30:
                i++;
                return [3 /*break*/, 20];
            case 31: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/?uuid=" + uuid + "&client=wh5&appid=ProductZ4Brand&functionId=" + fn + "&t=" + +new Date() + "&body=" + encodeURIComponent(JSON.stringify(body)), '', {
                            headers: {
                                'Host': 'api.m.jd.com',
                                'Origin': 'https://prodev.m.jd.com',
                                'User-Agent': TS_USER_AGENTS_1["default"],
                                'Referer': 'https://prodev.m.jd.com/mall/active/ZskuZGqQMZ2j6L99PM1L8jg2F2a/index.html',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
                case 2:
                    e_2 = _a.sent();
                    console.log('Error');
                    (0, TS_USER_AGENTS_1.o2s)(e_2);
                    return [2 /*return*/, ''];
                case 3: return [2 /*return*/];
            }
        });
    });
}