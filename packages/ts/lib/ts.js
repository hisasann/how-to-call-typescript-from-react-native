"use strict";
// 案①
//@ts-ignore
// import js from 'js';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ts = void 0;
// 案②
const js = require('js');
// via TypeScript未対応のモジュールをimportするときのエラー対策 - Qiita - https://qiita.com/ichironagata/items/58855c5108f2cbcd18b7
js();
const ts = () => {
    console.log('ts');
};
exports.ts = ts;
