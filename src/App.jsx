import Rightbar from "./Components/Rightbar";
import Feed from "./Components/Feed";
import Sidebar from "./Components/Sidebar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import Add from "./Components/Add";

const App = () => {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
          <Add />
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default App;
