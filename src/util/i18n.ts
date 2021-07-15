import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import translations_de from '../assets/i18n/de/translation.json'

import translations_en from '../assets/i18n/en/translation.json'

const initializeI18n = (fallbackLocale:string = 'de') => {
    const resources = {
        en: {
            translation: {
                ...translations_en
            }
        },
        de: {
            translation: {
                ...translations_de
            }
        }
    };    

    i18n
        .use(initReactI18next)
        .init({
            resources,
            fallbackLng: fallbackLocale,
            debug: false,
            keySeparator: ".",
            interpolation: {
                escapeValue: false,
                prefix: "{",
                suffix: "}",
            },
            react: {
                transSupportBasicHtmlNodes: true,
                transKeepBasicHtmlNodesFor: ['br','strong', 'i'],
            }
        });
}

export default initializeI18n;

