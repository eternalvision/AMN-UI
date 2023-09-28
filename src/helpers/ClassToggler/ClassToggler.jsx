export const ClassToggler = ({ children, useLocalStorageState }) => {
    const [activeNoneClass, setActiveNoneClass] = useLocalStorageState({
        key: "activeNoneClass",
        initialValue: false,
    });

    const handleClick = () => {
        setActiveNoneClass(!activeNoneClass);
    };

    return children({ activeNoneClass, handleClick });
};
