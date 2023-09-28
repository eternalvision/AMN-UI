import { MainComponents } from "./components/MainComponents";
const { Menu } = MainComponents;

export const Main = ({
    RoutesComponent,
    LanguageSets,
    useLanguage,
    GetLogo,
    useFetchData,
    FilteredData,
    useCurrentDate,
    NumberFormatter,
    Loader,
    useLocalStorageState,
    activeNoneClass,
    ApiRequests,
    userData,
    Login,
}) => {
    const { selectedLang } = useLanguage();

    return (
        <>
            <main className="Main">
                <Menu
                    GetLogo={GetLogo}
                    LanguageSets={LanguageSets}
                    selectedLang={selectedLang}
                    userData={userData}
                    activeNoneClass={activeNoneClass}
                />
                <section className="Rear-block">
                    <RoutesComponent
                        GetLogo={GetLogo}
                        MainComponents={MainComponents}
                        LanguageSets={LanguageSets}
                        selectedLang={selectedLang}
                        userData={userData}
                        useFetchData={useFetchData}
                        FilteredData={FilteredData}
                        useCurrentDate={useCurrentDate}
                        NumberFormatter={NumberFormatter}
                        Loader={Loader}
                        useLocalStorageState={useLocalStorageState}
                        Login={Login}
                        ApiRequests={ApiRequests}
                    />
                </section>
            </main>
        </>
    );
};
