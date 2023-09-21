export const FilteredData = ({ items }) => {
    if (!items) return;

    const Employees = items.units.map((unit) => ({
        unitName: unit.name,
        amount: unit.amount,
        hotels: unit.locations.map((location) => ({
            hotelAmount: location.amount,
            hotelName: location.name,
            positions: Object.entries(
                location.employees.reduce((acc, employee) => {
                    (acc[employee.position] =
                        acc[employee.position] || []).push(employee);
                    return acc;
                }, {})
            ).map(([positionName, employees]) => ({
                positionName,
                employees,
            })),
        })),
    }));

    return { Termin: items.term, Employees };
};
