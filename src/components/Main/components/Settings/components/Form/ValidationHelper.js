export const ValidationHelper = (LanguageSets, selectedLang) => {
    const getValidationMessage = (type, num) => {
        const validationMessages = LanguageSets.ValidationElements({ num })[
            selectedLang
        ][0];
        return validationMessages[type];
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
            password: (value) => {
                if (value.length < 8) return getValidationMessage("min", 8);
            },
            linkToPhoto: (value) => {
                if (value.length > 250) return getValidationMessage("max", 250);
                if (value.length < 5) return getValidationMessage("min", 5);
            },
        },
    };
};
