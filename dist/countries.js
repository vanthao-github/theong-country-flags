"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_json_1 = __importDefault(require("./data.json"));
const countries = data_json_1.default.map((country) => ({
    code: country.code,
    label: country.label,
    flag: `/flags/${country.code}.svg`,
}));
exports.default = countries;
