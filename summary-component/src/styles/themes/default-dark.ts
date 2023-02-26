import { createTheme } from "@nextui-org/react";

const darkTheme = createTheme({
    type: "dark",
    theme: {
        fonts: {
            sans: "Red Hat Display, sans-serif",
        },
        colors: {
            white: "#FFFFFF",
            black: "#D6E1FF",

            primary: "#FFFFFF"
        },
    },
});

export default darkTheme;