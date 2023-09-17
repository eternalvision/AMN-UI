export const FilteredData = ({ items }) => {
    if (items) {
        const Employees = items.units.map((unit) => {
            const hotelData = unit.locations.map((location) => {
                const positions = location.employees.reduce((acc, employee) => {
                    if (!acc[employee.position]) {
                        acc[employee.position] = [];
                    }
                    acc[employee.position].push(employee);
                    return acc;
                }, {});

                const positionsArray = Object.entries(positions).map(
                    ([positionName, employees]) => ({
                        positionName,
                        employees,
                    })
                );

                return {
                    hotelAmount: location.amount,
                    hotelName: location.name,
                    positions: positionsArray,
                };
            });

            return {
                unitName: unit.name,
                amount: unit.amount,
                hotels: hotelData,
            };
        });

        return { Termin: items.term, Employees };
    }
};
