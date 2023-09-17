import React from "react";
import { TailSpin } from "react-loader-spinner";

export const Loader = () => {
    return (
        <section className="Tailspin">
            <TailSpin
                color="var(--layout-color)"
                backgroundColor="var(--background-color)"
                height={120}
                width={120}
                radius="0"
                wrapperStyle={{}}
                ariaLabel="tail-spin-loading"
            />
        </section>
    );
};
