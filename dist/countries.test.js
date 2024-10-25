"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const countries_1 = __importDefault(require("./countries"));
describe('Countries Data', () => {
    it('should map data correctly to Country objects', () => {
        const expectedCountry = {
            code: 'VN',
            label: 'Viet Nam',
            flag: '/flags/VN.svg',
        };
        console.log('countries', countries_1.default);
        expect(countries_1.default).toContainEqual(expectedCountry);
    });
});
