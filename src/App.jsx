import { Box } from "@mui/material";
import Router from "./routes/Router";
import { useTheme } from "@mui/material/styles";

function App() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Router />
    </Box>
  );
}

export default App;