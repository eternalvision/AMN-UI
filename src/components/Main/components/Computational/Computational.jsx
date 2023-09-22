import { useLocation, Navigate } from "react-router-dom";
import { ComputationalComponents } from "./components/Components";
const { Table } = ComputationalComponents;

export const Computational = ({
    LanguageSets,
    selectedLang,
    NumberFormatter,
    Loader,
}) => {
    const location = useLocation();

    if (location && location.state) {
        const { hotels, unitName } = location.state;

        if (hotels && unitName) {
            return (
                <Table
                    LanguageSets={LanguageSets}
                    selectedLang={selectedLang}
                    Hotels={hotels}
                    UnitName={unitName}
                    NumberFormatter={NumberFormatter}
                    Loader={Loader}
                />
            );
        }
    }

    return <Navigate to={`/workspace`} />;
};
