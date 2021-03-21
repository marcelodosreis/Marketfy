import { LanguageConstants } from '@/library/common/constants/LanguageConstants';

const currencyParser = (intl, value) => {
    const obj = {
        'pt-BR': '',
        'en-US': '',
        'es-ES': ''
    };
    return obj[intl];
};
