import { useLocation } from "react-router-dom";
import { ComputationalComponents } from "./components/Components";
const { Table } = ComputationalComponents;

export const Computational = ({
    LanguageSets,
    selectedLang,
    NumberFormatter,
    Loader,
}) => {
    const location = useLocation();
    const { hotels, unitName } = location.state;
    return location ? (
        <Table
            LanguageSets={LanguageSets}
            selectedLang={selectedLang}
            Hotels={hotels}
            UnitName={unitName}
            NumberFormatter={NumberFormatter}
        />
    ) : (
        <Loader />
    );
};
