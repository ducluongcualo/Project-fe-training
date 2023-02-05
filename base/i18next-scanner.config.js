const locale = require('./src/locales/locales.json');
const typescriptTransform = require('i18next-scanner-typescript');

module.exports = {
  input: [
    'src/**/*.{ts,tsx}',
    // Use ! to filter out files or directories
    '!src/**/*.spec.{js,jsx}',
    '!src/translations/**',
    '!**/node_modules/**',
  ],
  output: './',
  options: {
    debug: true,
    removeUnusedKeys: true,
    sort: true,
    func: {
      list: ['i18next.t', 'i18n.t', 't'],
      extensions: ['.js', '.jsx'],
    },
    trans: {
      component: 'Trans',
      i18nKey: 'i18nKey',
      defaultsKey: 'defaults',
      // extensions: ['.js', '.jsx', '.ts', '.tsx'],
      extensions: ['.js', '.jsx'],
      fallbackKey: function(ns, value) {
        return value;
      },
      // acorn: {
      //   ecmaVersion: 10, // defaults to 10
      //   sourceType: 'module', // defaults to 'module'
      //   // Check out https://github.com/acornjs/acorn/tree/master/acorn#interface for additional options
      // }
    },
    lngs: locale.languages,
    ns: locale.namespaces,
    defaultLng: locale.defaultLanguage,
    defaultNs: locale.defaultNamespace,
    // @param {string} lng The language currently used.
    // @param {string} ns The namespace currently used.
    // @param {string} key The translation key.
    // @return {string} Returns a default value for the translation key.
    defaultValue: function(lng, ns, key, { defaultValue }) {
        return defaultValue || key;
    },
    resource: {
      loadPath: 'src/locales/{{ns}}/{{lng}}.json',
      savePath: 'src/locales/{{ns}}/{{lng}}.json',
      jsonIndent: 2,
      lineEnding: '\n'
    },
    nsSeparator: locale.namespaceSeparator, // namespace separator
    keySeparator: locale.keySeparator, // key separator
    pluralSeparator: locale.pluralSeparator, // plural separator
    interpolation: {
      prefix: '{{',
      suffix: '}}'
    }
  },
  transform: typescriptTransform({ extensions: ['ts', '.tsx'] }),
};
