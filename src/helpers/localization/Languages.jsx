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
    MenuInterfaceButtons: ({ username }) => {
        return {
            cz: [
                {
                    id: 1,
                    text: "Pracovní prostor",
                    linkTo: `/${username}/workspace`,
                    image: "BookRead",
                },
                {
                    id: 2,
                    text: "Výpočetní",
                    linkTo: `/${username}/computational/:date`,
                    image: "Calculator",
                },
                {
                    id: 3,
                    text: "Dokumentace",
                    linkTo: "/documentation",
                    image: "Information",
                },
            ],
            en: [
                {
                    id: 1,
                    text: "Workspace",
                    linkTo: `/${username}/workspace`,
                    image: "BookRead",
                },
                {
                    id: 2,
                    text: "Computational",
                    linkTo: `/${username}/computational/:date`,
                    image: "Calculator",
                },
                {
                    id: 3,
                    text: "Documentation",
                    linkTo: "/documentation",
                    image: "Information",
                },
            ],
            ua: [
                {
                    id: 1,
                    text: "Робоча область",
                    linkTo: `/${username}/workspace`,
                    image: "BookRead",
                },
                {
                    id: 2,
                    text: "Розрахунок",
                    linkTo: `/${username}/computational/:date`,
                    image: "Calculator",
                },
                {
                    id: 3,
                    text: "Документація",
                    linkTo: "/documentation",
                    image: "Information",
                },
            ],
            ru: [
                {
                    id: 1,
                    text: "Рабочая область",
                    linkTo: `/${username}/workspace`,
                    image: "BookRead",
                },
                {
                    id: 2,
                    text: "Расчет",
                    linkTo: `/${username}/computational/:date`,
                    image: "Calculator",
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
                    id: 0,
                    textId: "hours",
                    text: "Čas",
                },
                {
                    id: 1,
                    textId: "rate",
                    text: "Sazba",
                },
                {
                    id: 2,
                    textId: "amount",
                    text: "Vyplaty",
                },
                {
                    id: 3,
                    textId: "gross_wages",
                    text: "Hruba mzda učetní",
                },
                {
                    id: 4,
                    textId: "total_deductions",
                    text: "Odvody celkem učetní",
                },
                {
                    id: 5,
                    textId: "compensation",
                    text: "Náhrada",
                },
                {
                    id: 6,
                    textId: "total_internal_costs",
                    text: "Interni naklady celkem",
                },
                {
                    id: 7,
                    textId: "internal_costs_according_to_the_formula",
                    text: "Interni naklady dle vzorce",
                },
                {
                    id: 8,
                    textId: "internal_costs_per_hour",
                    text: "Interni naklady na hodiny",
                },
                {
                    id: 9,
                    textId: "difference_fact_formula",
                    text: "Rozdil fakt/vzorec",
                },
            ],
            en: [
                {
                    id: 0,
                    textId: "hours",
                    text: "Time",
                },
                {
                    id: 1,
                    textId: "rate",
                    text: "Rate",
                },
                {
                    id: 2,
                    textId: "amount",
                    text: "Amount",
                },
                {
                    id: 3,
                    textId: "gross_wages",
                    text: "Gross salary of accountant",
                },
                {
                    id: 4,
                    textId: "total_deductions",
                    text: "Deductions quite reasonable",
                },
                {
                    id: 5,
                    textId: "compensation",
                    text: "Compensation",
                },
                {
                    id: 6,
                    textId: "total_internal_costs",
                    text: "Total internal costs",
                },
                {
                    id: 7,
                    textId: "internal_costs_according_to_the_formula",
                    text: "Internal costs according to the formula",
                },
                {
                    id: 8,
                    textId: "internal_costs_per_hour",
                    text: "Internal costs per hour",
                },
                {
                    id: 9,
                    textId: "difference_fact_formula",
                    text: "Difference fact/formula",
                },
            ],
            ua: [
                {
                    id: 0,
                    textId: "hours",
                    text: "Час",
                },
                {
                    id: 1,
                    textId: "rate",
                    text: "Оцінка",
                },
                {
                    id: 2,
                    textId: "amount",
                    text: "Сума",
                },
                {
                    id: 3,
                    textId: "gross_wages",
                    text: "Валова зарплата",
                },
                {
                    id: 4,
                    textId: "total_deductions",
                    text: "Відрахування цілком",
                },
                {
                    id: 5,
                    textId: "compensation",
                    text: "Компенсація",
                },
                {
                    id: 6,
                    textId: "total_internal_costs",
                    text: "Загальні внутрішні витрати",
                },
                {
                    id: 7,
                    textId: "internal_costs_according_to_the_formula",
                    text: "Витрати за формулою",
                },
                {
                    id: 8,
                    textId: "internal_costs_per_hour",
                    text: "Витрати за годину",
                },
                {
                    id: 9,
                    textId: "difference_fact_formula",
                    text: "Відмінність факт/формула",
                },
            ],
            ru: [
                {
                    id: 0,
                    textId: "hours",
                    text: "Время",
                },
                {
                    id: 1,
                    textId: "rate",
                    text: "Оценка",
                },
                {
                    id: 2,
                    textId: "amount",
                    text: "Сумма",
                },
                {
                    id: 3,
                    textId: "gross_wages",
                    text: "Валовая зарплата",
                },
                {
                    id: 4,
                    textId: "total_deductions",
                    text: "Отчисления в общем",
                },
                {
                    id: 5,
                    textId: "compensation",
                    text: "Компенсация",
                },
                {
                    id: 6,
                    textId: "total_internal_costs",
                    text: "Общие внутренние расходы",
                },
                {
                    id: 7,
                    textId: "internal_costs_according_to_the_formula",
                    text: "Расходы по формуле",
                },
                {
                    id: 8,
                    textId: "internal_costs_per_hour",
                    text: "Расходы за час",
                },
                {
                    id: 9,
                    textId: "difference_fact_formula",
                    text: "Отличие факт/формула",
                },
            ],
        };
    },
};
