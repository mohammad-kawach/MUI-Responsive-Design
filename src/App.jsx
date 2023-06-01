import Rightbar from "./Components/Rightbar";
import Feed from "./Components/Feed";
import Sidebar from "./Components/Sidebar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./Components/Navbar";
import { useState } from "react";

const App = () => {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <Navbar />
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default App;
