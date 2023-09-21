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
                    filed: "position",
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
                    filed: "position",
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
                    filed: "position",
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
};
