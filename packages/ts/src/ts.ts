// 案①
//@ts-ignore
// import js from 'js';

// 案②
const js = require('js');

// via TypeScript未対応のモジュールをimportするときのエラー対策 - Qiita - https://qiita.com/ichironagata/items/58855c5108f2cbcd18b7

js();

const ts = () => {
  console.log('ts');
}


export { ts };
