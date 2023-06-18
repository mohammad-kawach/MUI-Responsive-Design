import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: { sm: "none", md: "block" },
      }}
    >
      <Box sx={{ position: "fixed" }}>
        <Typography varient="h6" fontWeight={100} mt={2} mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={4} style={{ justifyContent: "flex-end" }}>
          <Avatar alt="Remy Sharp" src="https://picsum.photos/id/50/50/50" />
          <Avatar alt="Travis Howard" src="https://picsum.photos/id/51/50/50" />
          <Avatar alt="Cindy Baker" src="https://picsum.photos/id/52/50/50" />
          <Avatar alt="Agnes Walker" src="https://picsum.photos/id/53/50/50" />
          <Avatar
            alt="Trevor Henderson"
            src="https://picsum.photos/id/54/50/50"
          />
        </AvatarGroup>
        <Typography varient="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList
          cols={2}
          rowHeight={100}
          gap={10}
          style={{ overflow: "hidden" }}
        >
          <ImageListItem>
            <img src="https://picsum.photos/id/53/100/100" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/id/54/100/100" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/id/55/100/100" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/id/56/100/100" alt="" />
          </ImageListItem>
        </ImageList>
        <Typography varient="h6" fontWeight={100} mt={2}>
          Latest Conversatios
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://picsum.photos/id/99/100/100"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
