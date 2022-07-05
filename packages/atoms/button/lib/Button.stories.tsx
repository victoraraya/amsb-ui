import AirMilesThemeProvider from "@amsb-ui/theme";
import Button from "./Button";

export default { title: "Button" };

export const primary = () => (
  <AirMilesThemeProvider>
    <Button color="primary" variant="contained">
      Hello Button
    </Button>
  </AirMilesThemeProvider>
);
