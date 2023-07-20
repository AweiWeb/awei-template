import * as veeValidate from 'vee-validate';
import rules from '@vee-validate/rules';
import { localize, loadLocaleFromURL } from '@vee-validate/i18n';
// import zh_CH from '@vee-validate/i18n/dist/locale/zh_CN.json';
import yup from './yup';
loadLocaleFromURL(
  'https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_CN.json'
);

// 多语言注册
veeValidate.configure({
  generateMessage: localize('zh_CN'),
});
//这里进行批量注册验证规则
Object.keys(rules).forEach((key) => {
  veeValidate.defineRule(key, rules[key] as any);
});
// function defineRules() {
//   Object.keys(rules).forEach((key) => {
//     defineRule(key, rules[key] as any);
//     console.log(rules[key]);
//   });
// }

// 导出
const module = { yup, ...veeValidate };

export default module;
