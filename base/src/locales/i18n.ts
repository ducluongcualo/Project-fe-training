import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { LANGUAGE } from "constants/language";
import locale from "./locales.json";

const { languages, namespaces, defaultNamespace, namespaceSeparator, keySeparator, pluralSeparator } = locale as {
    languages: LANGUAGE[];
    defaultLanguage: LANGUAGE;
    [name: string]: any;
};

const resources = {} as { [lang: string]: { [namespace: string]: any } };
languages.forEach((lang: string) => {
    resources[lang] = {};
    namespaces.forEach((namespace: string) => {
        const translations = require(`./${namespace}/${lang}.json`);
        resources[lang][namespace] = translations;
    });
});

i18n.use(initReactI18next).init({
    resources,
    lng: LANGUAGE.EN,
    ns: namespaces,
    defaultNS: defaultNamespace,
    nsSeparator: namespaceSeparator,
    keySeparator: keySeparator,
    pluralSeparator: pluralSeparator,
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
});

export default i18n;
