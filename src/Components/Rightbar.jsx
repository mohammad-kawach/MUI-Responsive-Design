import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from "@mui/material";

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
        <Typography varient='h6' fontWeight={100} mt={2} mb={2}>Online Friends</Typography>
        <AvatarGroup max={4} style={{ justifyContent: 'flex-end' }}>
          <Avatar alt="Remy Sharp" src="https://picsum.photos/id/50/50/50" />
          <Avatar alt="Travis Howard" src="https://picsum.photos/id/51/50/50" />
          <Avatar alt="Cindy Baker" src="https://picsum.photos/id/52/50/50" />
          <Avatar alt="Agnes Walker" src="https://picsum.photos/id/53/50/50" />
          <Avatar alt="Trevor Henderson" src="https://picsum.photos/id/54/50/50" />
        </AvatarGroup>
        <Typography varient='h6' fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
        <ImageList cols={2} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://picsum.photos/id/53/100/100"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://picsum.photos/id/54/100/100"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://picsum.photos/id/55/100/100"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://picsum.photos/id/56/100/100"
              alt=""
            />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  )
}

export default Rightbar;
