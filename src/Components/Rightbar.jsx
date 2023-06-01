import { Box } from "@mui/material";

const Rightbar = () => {
  return (
    <Box 
      bgcolor={"gray"} 
      flex={1} 
      p={2}
      sx={{
        display: { xs: 'none', sm: 'block'  }
      }}
    >
      Rightbar
    </Box>
  )
}

export default Rightbar;