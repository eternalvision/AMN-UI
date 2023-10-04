export const ValidationHelper = (LanguageSets, selectedLang) => {
    const getValidationMessage = (type, num) => {
        const validationMessages = LanguageSets.ValidationElements({ num })[
            selectedLang
        ][0];
        return validationMessages[type];
    };

    const passwordValidation = (value) => {
        if (!/[A-Z]{2,}/.test(value))
            return getValidationMessage("passValidate1");
        if (!/[a-z]{2,}/.test(value))
            return getValidationMessage("passValidate2");
        if (!/[0-9]{2,}/.test(value))
            return getValidationMessage("passValidate3");
        if (!/[^a-zA-Z0-9]{2,}/.test(value))
            return getValidationMessage("passValidate4");
        if (/\s/.test(value)) return getValidationMessage("passValidate5");
    };

    return {
        validate: {
            name: (value) => {
                if (value.length < 3) return getValidationMessage("min", 3);
                if (value.length > 20) return getValidationMessage("max", 20);
            },
            surname: (value) => {
                if (value.length < 3) return getValidationMessage("min", 3);
                if (value.length > 20) return getValidationMessage("max", 20);
            },
            username: (value) => {
                if (value.length < 5) return getValidationMessage("min", 5);
                if (value.length > 15) return getValidationMessage("max", 15);
            },
            email: (value) => {
                if (value.length < 4) return getValidationMessage("min", 4);
                if (value.length > 256) return getValidationMessage("max", 256);
            },
            phoneNumber: (value) => {
                if (value.length > 15) return getValidationMessage("max", 15);
                if (value.length < 5) return getValidationMessage("min", 5);
            },
            password: passwordValidation,
            linkToPhoto: (value) => {
                if (value.length > 250) return getValidationMessage("max", 250);
                if (value.length < 5) return getValidationMessage("min", 5);
            },
        },
    };
};
