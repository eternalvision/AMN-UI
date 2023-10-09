export const Languages = {
    LocalizationButtons: () => {
        return [
            { id: 1, text: "CZ", textId: "cz" },
            { id: 2, text: "EN", textId: "en" },
            { id: 3, text: "UA", textId: "ua" },
            { id: 4, text: "RU", textId: "ru" },
        ];
    },
    HeaderInterfaceButtons: ({ username }) => {
        return {
            cz: [
                {
                    id: 1,
                    text: "Profil",
                    linkTo: `/${username}`,
                    image: "Profile",
                },
                {
                    id: 2,
                    text: "Nastavení",
                    linkTo: `/${username}/settings`,
                    image: "Settings4",
                },
                {
                    id: 3,
                    text: "Odhlásit se",
                    linkTo: `/logout`,
                    image: "LogoutBox",
                },
            ],
            en: [
                {
                    id: 1,
                    text: "Profile",
                    linkTo: `/${username}`,
                    image: "Profile",
                },
                {
                    id: 2,
                    text: "Settings",
                    linkTo: `/${username}/settings`,
                    image: "Settings4",
                },
                {
                    id: 3,
                    text: "Logout",
                    linkTo: `/logout`,
                    image: "LogoutBox",
                },
            ],
            ua: [
                {
                    id: 1,
                    text: "Профіль",
                    linkTo: `/${username}`,
                    image: "Profile",
                },
                {
                    id: 2,
                    text: "Налаштування",
                    linkTo: `/${username}/settings`,
                    image: "Settings4",
                },
                {
                    id: 3,
                    text: "Вийти",
                    linkTo: `/logout`,
                    image: "LogoutBox",
                },
            ],
            ru: [
                {
                    id: 1,
                    text: "Профиль",
                    linkTo: `/${username}`,
                    image: "Profile",
                },
                {
                    id: 2,
                    text: "Настройки",
                    linkTo: `/${username}/settings`,
                    image: "Settings4",
                },
                {
                    id: 3,
                    text: "Выйти",
                    linkTo: `/logout`,
                    image: "LogoutBox",
                },
            ],
        };
    },
    MenuInterfaceButtons: () => {
        return {
            cz: [
                {
                    id: 1,
                    text: "Pracovní prostor",
                    linkTo: "/",
                    image: "BookRead",
                },
                {
                    id: 2,
                    text: "Dokumentace",
                    linkTo: "/documentation",
                    image: "Information",
                },
            ],
            en: [
                {
                    id: 1,
                    text: "Workspace",
                    linkTo: "/",
                    image: "BookRead",
                },
                {
                    id: 2,
                    text: "Documentation",
                    linkTo: "/documentation",
                    image: "Information",
                },
            ],
            ua: [
                {
                    id: 1,
                    text: "Робоча область",
                    linkTo: "/",
                    image: "BookRead",
                },
                {
                    id: 2,
                    text: "Документація",
                    linkTo: "/documentation",
                    image: "Information",
                },
            ],
            ru: [
                {
                    id: 1,
                    text: "Рабочая область",
                    linkTo: "/",
                    image: "BookRead",
                },
                {
                    id: 3,
                    text: "Документация",
                    linkTo: "/documentation",
                    image: "Information",
                },
            ],
        };
    },
    CardInterfaceElements: () => {
        return {
            cz: [
                {
                    id: 1,
                    text: "Celková částka",
                    calculationText: "Otevřít Výpočet pro",
                    searchText: "Vyhledávání",
                    hotelImage: "HotelBed",
                    cashImage: "Cash",
                    personImage: "User3",
                    caseImage: "Suitcase",
                    timeImage: "Time",
                    dollarImage: "MoneyDollarCircle",
                    searchImage: "Search2",
                },
            ],
            en: [
                {
                    id: 2,
                    text: "Total amount",
                    calculationText: "Open calculation for",
                    searchText: "Search",
                    hotelImage: "HotelBed",
                    cashImage: "Cash",
                    personImage: "User3",
                    caseImage: "Suitcase",
                    timeImage: "Time",
                    dollarImage: "MoneyDollarCircle",
                    searchImage: "Search2",
                },
            ],
            ua: [
                {
                    id: 3,
                    text: "Загальна cума",
                    calculationText: "Відкрити розрахунок для",
                    searchText: "Пошук",
                    hotelImage: "HotelBed",
                    cashImage: "Cash",
                    personImage: "User3",
                    caseImage: "Suitcase",
                    timeImage: "Time",
                    dollarImage: "MoneyDollarCircle",
                    searchImage: "Search2",
                },
            ],
            ru: [
                {
                    id: 4,
                    text: "Общая сумма",
                    calculationText: "Открыть расчет для",
                    searchText: "Поиск",
                    hotelImage: "HotelBed",
                    cashImage: "Cash",
                    personImage: "User3",
                    caseImage: "Suitcase",
                    timeImage: "Time",
                    dollarImage: "MoneyDollarCircle",
                    searchImage: "Search2",
                },
            ],
        };
    },
    PaginationInterfaceElements: () => {
        return {
            cz: [
                {
                    textYear: "Rok",
                    textMonth: "Měsíc",
                    imageRight: "ArrowRightCircle",
                    imageLeft: "ArrowLeftCircle",
                },
            ],
            en: [
                {
                    textYear: "Year",
                    textMonth: "Month",
                    imageRight: "ArrowRightCircle",
                    imageLeft: "ArrowLeftCircle",
                },
            ],
            ua: [
                {
                    textYear: "Рiк",
                    textMonth: "Mісяць",
                    imageRight: "ArrowRightCircle",
                    imageLeft: "ArrowLeftCircle",
                },
            ],
            ru: [
                {
                    textYear: "Год",
                    textMonth: "Mесяц",
                    imageRight: "ArrowRightCircle",
                    imageLeft: "ArrowLeftCircle",
                },
            ],
        };
    },
    TableInterfaceElements: () => {
        return {
            cz: [
                {
                    field: "hotelName",
                    title: "Hotel",
                    width: 110,
                    headerFilter: "input",
                },
                {
                    field: "position",
                    title: "Pozice",
                    width: 120,
                    headerFilter: "input",
                },
                {
                    field: "name",
                    title: "Jméno",
                    width: 110,
                    headerFilter: "input",
                },
                {
                    field: "hours",
                    title: "Čas",
                    width: 110,
                },
                {
                    field: "rate",
                    title: "Sazba",
                    width: 110,
                },
                {
                    field: "amount",
                    title: "Vyplaty",
                    width: 110,
                },
                {
                    field: "gross_wages",
                    title: "Hruba mzda učetní",
                    width: 110,
                    editor: "input",
                },
                {
                    field: "total_deductions",
                    title: "Odvody celkem učetní",
                    width: 110,
                    editor: "input",
                },
                {
                    field: "compensation",
                    title: "Náhrada",
                    width: 110,
                    editor: "input",
                },
                {
                    field: "total_internal_costs",
                    title: "Interni naklady celkem",
                    width: 110,
                },
                {
                    field: "internal_costs_according_to_the_formula",
                    title: "Interni naklady dle vzorce",
                    width: 110,
                },
                {
                    field: "internal_costs_per_hour",
                    title: "Interni naklady na hodiny",
                    width: 110,
                },
                {
                    field: "difference_fact_formula",
                    title: "Rozdil fakt/vzorec",
                    width: 110,
                },
            ],
            en: [
                {
                    field: "hotelName",
                    title: "Hotel",
                    width: 110,
                    headerFilter: "input",
                },
                {
                    field: "position",
                    title: "Position",
                    width: 110,
                    headerFilter: "input",
                },
                {
                    field: "name",
                    title: "Name",
                    width: 110,
                    headerFilter: "input",
                },
                {
                    field: "hours",
                    title: "Time",
                    width: 110,
                },
                {
                    field: "rate",
                    title: "Rate",
                    width: 110,
                },
                {
                    field: "amount",
                    title: "Amount",
                    width: 110,
                },
                {
                    field: "gross_wages",
                    title: "Gross salary of accountant",
                    width: 110,
                    editor: "input",
                },
                {
                    field: "total_deductions",
                    title: "Deductions quite reasonable",
                    width: 110,
                    editor: "input",
                },
                {
                    field: "compensation",
                    title: "Compensation",
                    width: 110,
                    editor: "input",
                },
                {
                    field: "total_internal_costs",
                    title: "Total internal costs",
                    width: 110,
                },
                {
                    field: "internal_costs_according_to_the_formula",
                    title: "Internal costs according to the formula",
                    width: 110,
                },
                {
                    field: "internal_costs_per_hour",
                    title: "Internal costs per hour",
                    width: 110,
                },
                {
                    field: "difference_fact_formula",
                    title: "Difference fact/formula",
                    width: 110,
                },
            ],
            ua: [
                {
                    field: "hotelName",
                    title: "Готель",
                    width: 110,
                    headerFilter: "input",
                },
                {
                    field: "position",
                    title: "Позиція",
                    width: 110,
                    headerFilter: "input",
                },
                {
                    field: "name",
                    title: "Ім'я",
                    width: 110,
                    headerFilter: "input",
                },
                {
                    field: "hours",
                    title: "Час",
                    width: 110,
                },
                {
                    field: "rate",
                    title: "Оцінка",
                    width: 110,
                },
                {
                    field: "amount",
                    title: "Сума",
                    width: 110,
                },
                {
                    field: "gross_wages",
                    title: "Валова зарплата",
                    width: 110,
                    editor: "input",
                },
                {
                    field: "total_deductions",
                    title: "Відрахування цілком",
                    width: 110,
                    editor: "input",
                },
                {
                    field: "compensation",
                    title: "Компенсація",
                    width: 110,
                    editor: "input",
                },
                {
                    field: "total_internal_costs",
                    title: "Загальні внутрішні витрати",
                    width: 110,
                },
                {
                    field: "internal_costs_according_to_the_formula",
                    title: "Витрати за формулою",
                    width: 110,
                },
                {
                    field: "internal_costs_per_hour",
                    title: "Витрати за годину",
                    width: 110,
                },
                {
                    field: "difference_fact_formula",
                    title: "Відмінність факт/формула",
                    width: 110,
                },
            ],
            ru: [
                {
                    field: "hotelName",
                    title: "Отель",
                    width: 110,
                    headerFilter: "input",
                },
                {
                    field: "position",
                    title: "Позиция",
                    width: 110,
                    headerFilter: "input",
                },
                {
                    field: "name",
                    title: "Имя",
                    width: 110,
                    headerFilter: "input",
                },
                {
                    field: "hours",
                    title: "Время",
                    width: 110,
                },
                {
                    field: "rate",
                    title: "Оценка",
                    width: 110,
                },
                {
                    field: "amount",
                    title: "Сумма",
                    width: 110,
                },
                {
                    field: "gross_wages",
                    title: "Валовая зарплата",
                    width: 110,
                    editor: "input",
                },
                {
                    field: "total_deductions",
                    title: "Отчисления в общем",
                    width: 110,
                    editor: "input",
                },
                {
                    field: "compensation",
                    title: "Компенсация",
                    width: 110,
                    editor: "input",
                },
                {
                    field: "total_internal_costs",
                    title: "Общие внутренние расходы",
                    width: 110,
                },
                {
                    field: "internal_costs_according_to_the_formula",
                    title: "Расходы по формуле",
                    width: 110,
                },
                {
                    field: "internal_costs_per_hour",
                    title: "Расходы за час",
                    width: 110,
                },
                {
                    field: "difference_fact_formula",
                    title: "Отличие факт/формула",
                    width: 110,
                },
            ],
        };
    },
    TableInterfaceElementsGroup: () => {
        return {
            cz: [
                {
                    workersTitle: "pracovníků",
                    totalAmountText: "Celková částka",
                },
            ],
            en: [
                {
                    workersTitle: "workers",
                    totalAmountText: "Total amount",
                },
            ],
            ua: [
                {
                    workersTitle: "робітників",
                    totalAmountText: "Загальна cума",
                },
            ],
            ru: [
                {
                    workersTitle: "рабочих",
                    totalAmountText: "Общая сумма",
                },
            ],
        };
    },
    SettingsElements: () => {
        return {
            cz: [
                {
                    textTitle: "Moje nastavení",
                    textName: "Jméno",
                    textSurname: "Příjmení",
                    textUsername: "Uživatelské jméno",
                    textEmail: "E-mail",
                    textPhoneNumber: "Telefonní číslo",
                    textPhotoLink: "Odkaz na fotografii",
                    textSave: "Uložit",
                    textPassword: "Heslo",
                },
            ],
            en: [
                {
                    textTitle: "My settings",
                    textName: "Name",
                    textSurname: "Surname",
                    textUsername: "Username",
                    textEmail: "Email",
                    textPhoneNumber: "Phone Number",
                    textPhotoLink: "Photo link",
                    textSave: "Save",
                    textPassword: "Password",
                },
            ],
            ua: [
                {
                    textTitle: "Мої настройки",
                    textName: "Ім'я",
                    textSurname: "Прізвище",
                    textUsername: "Ім'я користувача",
                    textEmail: "Електронна пошта",
                    textPhoneNumber: "Номер телефону",
                    textPhotoLink: "Посилання на фото",
                    textSave: "Зберегти",
                    textPassword: "Пароль",
                },
            ],
            ru: [
                {
                    textTitle: "Мои настройки",
                    textName: "Имя",
                    textSurname: "Фамилия",
                    textUsername: "Имя пользователя",
                    textEmail: "Электронная почта",
                    textPhoneNumber: "Номер телефона",
                    textPhotoLink: "Ссылка на фото",
                    textSave: "Сохранить",
                    textPassword: "Пароль",
                },
            ],
        };
    },
    RegistrationElements: () => {
        return {
            cz: [
                {
                    textTitle: "Registrace nového uživatele",
                    textName: "Jméno",
                    textSurname: "Příjmení",
                    textUsername: "Uživatelské jméno",
                    textEmail: "E-mail",
                    textPhoneNumber: "Telefonní číslo",
                    textPassword: "Heslo",
                    textPhotoLink: "Odkaz na fotografii",
                    textProfileType: "Typ profilu",
                    textRegister: "Registrovat",
                    textUser: "Uživatel",
                    textAdmin: "Správce",
                    showPassIcoHidden: "Lock",
                    ShowPassIcoVisible: "LockUnlock",
                },
            ],
            en: [
                {
                    textTitle: "New User Registration",
                    textName: "Name",
                    textSurname: "Surname",
                    textUsername: "Username",
                    textEmail: "Email",
                    textPhoneNumber: "Phone Number",
                    textPassword: "Password",
                    textPhotoLink: "Photo link",
                    textProfileType: "Profile type",
                    textRegister: "Register",
                    textUser: "User",
                    textAdmin: "Administrator",
                    showPassIcoHidden: "Lock",
                    ShowPassIcoVisible: "LockUnlock",
                },
            ],
            ua: [
                {
                    textTitle: "Реєстрація нового користувача",
                    textName: "Ім'я",
                    textSurname: "Прізвище",
                    textUsername: "Ім'я користувача",
                    textEmail: "Електронна пошта",
                    textPhoneNumber: "Номер телефону",
                    textPassword: "Пароль",
                    textPhotoLink: "Посилання на фото",
                    textProfileType: "Тип профілю",
                    textRegister: "Зареєструвати",
                    textUser: "Користувач",
                    textAdmin: "Адміністратор",
                    showPassIcoHidden: "Lock",
                    ShowPassIcoVisible: "LockUnlock",
                },
            ],
            ru: [
                {
                    textTitle: "Регистрация нового пользователя",
                    textName: "Имя",
                    textSurname: "Фамилия",
                    textUsername: "Имя пользователя",
                    textEmail: "Электронная почта",
                    textPhoneNumber: "Номер телефона",
                    textPassword: "Пароль",
                    textPhotoLink: "Ссылка на фото",
                    textProfileType: "Тип профиля",
                    textRegister: "Зарегистрировать",
                    textUser: "Пользователь",
                    textAdmin: "Администратор",
                    showPassIcoHidden: "Lock",
                    ShowPassIcoVisible: "LockUnlock",
                },
            ],
        };
    },
    UsersElements: () => {
        return {
            cz: [
                {
                    textTitle: "Seznam uživatelů",
                    deleteText: "Smazat uživatele",
                    deleteIcon: "DeleteBin7",
                    searchText: "Vyhledávání",
                },
            ],
            en: [
                {
                    textTitle: "Users",
                    deleteText: "Delete user",
                    deleteIcon: "DeleteBin7",
                    searchText: "Search",
                },
            ],
            ua: [
                {
                    textTitle: "Користувачі",
                    deleteText: "Видалити користувача",
                    deleteIcon: "DeleteBin7",
                    searchText: "Пошук",
                },
            ],
            ru: [
                {
                    textTitle: "Пользователи",
                    deleteText: "Удалить пользователя",
                    deleteIcon: "DeleteBin7",
                    searchText: "Поиск",
                },
            ],
        };
    },
    ValidationElements: ({ num }) => {
        return {
            cz: [
                {
                    min: `Minimální ${num} znaky!`,
                    max: `Maximálně ${num} znaky!`,
                    passValidate1: "Alespoň 2 velká písmena!",
                    passValidate2: "Alespoň 2 malá písmena!",
                    passValidate3: "Alespoň 2 čísla!",
                    passValidate4: "Alespoň 2 speciální znaky!",
                    passValidate5: "Mezery v hesle nejsou povoleny!",
                    emailValidate1: "E-mail by měl obsahovat @!",
                    passValidateRussian:
                        "Ruská písmena v hesle nejsou povolena!",
                },
            ],
            en: [
                {
                    min: `Minimum ${num} characters!`,
                    max: `Maximum of ${num} characters!`,
                    passValidate1: "At least 2 uppercase letters required!",
                    passValidate2: "At least 2 lowercase letters required!",
                    passValidate3: "At least 2 numbers required!",
                    passValidate4: "At least 2 special characters required!",
                    passValidate5: "Spaces in the password are not allowed!",
                    emailValidate1: "Email should contain @!",
                    passValidateRussian:
                        "Russian letters in password are not allowed!",
                },
            ],
            ua: [
                {
                    min: `Мінімум ${num} символів!`,
                    max: `Максимум ${num} символів!`,
                    passValidate1: "Потрібно мінімум 2 великі літери!",
                    passValidate2: "Потрібно мінімум 2 малі літери!",
                    passValidate3: "Потрібно мінімум 2 числа!",
                    passValidate4: "Потрібно мінімум 2 спеціальні символи!",
                    passValidate5: "Пробіли в паролі не дозволені!",
                    emailValidate1: "Email повинен містити @!",
                    passValidateRussian:
                        "Російські літери в паролі не дозволені!",
                },
            ],
            ru: [
                {
                    min: `Минимум ${num} символов!`,
                    max: `Максимум ${num} символов!`,
                    passValidate1: "Необходимо минимум 2 заглавные буквы!",
                    passValidate2: "Необходимо минимум 2 строчных буквы!",
                    passValidate3: "Необходимо минимум 2 цифры!",
                    passValidate4: "Необходимо минимум 2 специальных символа!",
                    passValidate5: "Пробелы в пароле не допускаются!",
                    emailValidate1: "Email должен содержать @!",
                    passValidateRussian: "Русские буквы в пароле запрещены!",
                },
            ],
        };
    },
    PasswordValidate: () => {
        return {
            cz: [
                {
                    textPassword: "Změnit heslo",
                    textPasswordEdit: "Změnit heslo",
                    showPassIcoHidden: "Lock",
                    ShowPassIcoVisible: "LockUnlock",
                },
            ],
            en: [
                {
                    textPassword: "Change password",
                    textPasswordEdit: "Change password",
                    showPassIcoHidden: "Lock",
                    ShowPassIcoVisible: "LockUnlock",
                },
            ],
            ua: [
                {
                    textPassword: "Змінити пароль",
                    textPasswordEdit: "Змінити пароль",
                    showPassIcoHidden: "Lock",
                    ShowPassIcoVisible: "LockUnlock",
                },
            ],
            ru: [
                {
                    textPassword: "Изменить пароль",
                    textPasswordEdit: "Изменить пароль",
                    showPassIcoHidden: "Lock",
                    ShowPassIcoVisible: "LockUnlock",
                },
            ],
        };
    },
};
