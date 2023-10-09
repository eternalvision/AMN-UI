export const ValidationHelper = (LanguageSets, selectedLang) => {
    const getValidationMessage = (type, num) => {
        return LanguageSets.ValidationElements({ num })[selectedLang][0][type];
    };

    const passwordValidation = (value) => {
        let upperCaseCount = 0;
        let lowerCaseCount = 0;
        let digitCount = 0;
        let specialCharCount = 0;

        const hasRussianLetters = /[а-яА-ЯёЁ]/.test(value);
        if (hasRussianLetters)
            return getValidationMessage("passValidateRussian");

        for (let char of value) {
            if (char >= "A" && char <= "Z") upperCaseCount++;
            else if (char >= "a" && char <= "z") lowerCaseCount++;
            else if (char >= "0" && char <= "9") digitCount++;
            else if (char.trim()) specialCharCount++;
        }

        if (upperCaseCount < 2) return getValidationMessage("passValidate1");
        if (lowerCaseCount < 2) return getValidationMessage("passValidate2");
        if (digitCount < 2) return getValidationMessage("passValidate3");
        if (specialCharCount < 2) return getValidationMessage("passValidate4");
        if (value.includes(" ")) return getValidationMessage("passValidate5");
    };

    const lengthValidation = (min, max, type) => (value) => {
        if (value.length < min) return getValidationMessage("min", min);
        if (value.length > max) return getValidationMessage("max", max);
    };

    const emailValidation = (value) => {
        if (!value.includes("@")) {
            return getValidationMessage("emailValidate1");
        }
    };

    return {
        validate: {
            name: lengthValidation(3, 20),
            surname: lengthValidation(3, 20),
            username: lengthValidation(5, 15),
            email: (value) => {
                const lengthError = lengthValidation(4, 256)(value);
                if (lengthError) return lengthError;
                return emailValidation(value);
            },
            phoneNumber: lengthValidation(5, 15),
            password: passwordValidation,
            linkToPhoto: lengthValidation(5, 250),
        },
    };
};
