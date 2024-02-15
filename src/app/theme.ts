import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "var(--font-rubik)",
    body: "var(--font-rubik)",
  },
  styles: {
    global: {
      // Aqui você define estilos globais
      body: {
        color: "white", // Define a cor do texto para branco
      },
      h1: {
        fontSize: "3rem",
        fontWeight: "bold",
      },
      h2: {
        fontSize: "2.5rem",
        fontWeight: "bold",
      },
      h3: {
        fontSize: "2rem",
        fontWeight: "bold",
      },
      h4: {
        fontSize: "1.5rem",
        fontWeight: "bold",
      },
      h5: {
        fontSize: "1rem",
        fontWeight: "bold",
      },
      pre: {
        border: "2px solid rgba(63, 63, 70, 0.4)",
        padding: "1rem",
        marginBlock: "1rem",
      },
    },
  },
  colors: {
    primary: {
      purple: "rgb(195, 0, 255)",
      purple03: "rgba(195, 0, 255, 0.3)",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC", // Example primary color
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
    secondary: "#FFD700", // Example secondary color (single value)
    // Add more colors as needed
  },
});
