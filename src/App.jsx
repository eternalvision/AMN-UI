import { Components } from "./components/Components";
import { RoutesComponent } from "./routes/RoutesComponent";

const { Header, Main } = Components;

export const App = ({
    useDisableEvents,
    DarkMode,
    LocalizationComponent,
    LanguageSets,
    useLanguage,
    useDarkMode,
    useLocalStorageState,
    NumberFormatter,
    GetLogo,
    Alert,
    useFetchData,
    FilteredData,
    useCurrentDate,
    Loader,
}) => {
    useDisableEvents();
    return (
        <>
            <Header
                DarkMode={DarkMode}
                LocalizationComponent={LocalizationComponent}
                LanguageSets={LanguageSets}
                useLanguage={useLanguage}
                useDarkMode={useDarkMode}
                GetLogo={GetLogo}
            />
            <Main
                RoutesComponent={RoutesComponent}
                LanguageSets={LanguageSets}
                useLanguage={useLanguage}
                GetLogo={GetLogo}
                useFetchData={useFetchData}
                FilteredData={FilteredData}
                useCurrentDate={useCurrentDate}
                NumberFormatter={NumberFormatter}
                Loader={Loader}
            />
        </>
    );
};
