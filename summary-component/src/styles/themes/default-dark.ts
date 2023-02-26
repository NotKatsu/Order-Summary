import { createTheme } from "@nextui-org/react";

const darkTheme = createTheme({
    type: "dark",
    theme: {
        fonts: {
            sans: "Red Hat Display, sans-serif",
        },
        colors: {
            white: "#FFFFFF",
            black: "#E0E8FF",

            primary: "#FFFFFF"
        },
    },
});

export default darkTheme;