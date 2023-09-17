export const NumberFormatter = ({ number }) => {
    const [whole, decimal] = number.toString().split(".");
    const formattedNumber = `${whole.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}${
        decimal ? "," + decimal : ""
    }`;

    return <span>{formattedNumber}</span>;
};
