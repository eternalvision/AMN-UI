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
}) => {
    const { selectedLang } = useLanguage();
    const username = "eternalvision";

    return (
        <>
            <main className="Main">
                <Menu
                    GetLogo={GetLogo}
                    LanguageSets={LanguageSets}
                    selectedLang={selectedLang}
                    Username={username}
                />
                <section className="Rear-block">
                    <RoutesComponent
                        GetLogo={GetLogo}
                        MainComponents={MainComponents}
                        LanguageSets={LanguageSets}
                        selectedLang={selectedLang}
                        username={username}
                        useFetchData={useFetchData}
                        FilteredData={FilteredData}
                        useCurrentDate={useCurrentDate}
                        NumberFormatter={NumberFormatter}
                        Loader={Loader}
                        useLocalStorageState={useLocalStorageState}
                    />
                </section>
            </main>
        </>
    );
};
