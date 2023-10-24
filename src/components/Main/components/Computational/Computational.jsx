import { useLocation, Navigate } from "react-router-dom";
import { ComputationalComponents } from "./components/Components";
const { Table } = ComputationalComponents;

export const Computational = ({
    LanguageSets,
    selectedLang,
    NumberFormatter,
    Loader,
    patchWorkerData,
    getWorkerData,
    showUniqueToast,
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
                    patchWorkerData={patchWorkerData}
                    getWorkerData={getWorkerData}
                    showUniqueToast={showUniqueToast}
                />
            );
        }
    }

    return <Navigate to={`/`} />;
};
