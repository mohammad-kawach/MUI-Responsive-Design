import { Box, Typography } from "@mui/material";

const Rightbar = () => {
  return (
    <Box
      flex={1} 
      p={2}
      sx={{
        display: { xs: 'none', sm: 'block'  }
      }}
    >
      <Box sx={{ position: 'fixed' }}>
        <Typography varient='h6' fontWeight={100}>Online Friends</Typography>
      </Box>
    </Box>
  )
}

export default Rightbar;
