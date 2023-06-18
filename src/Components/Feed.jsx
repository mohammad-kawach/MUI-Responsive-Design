import { Box } from "@mui/material";
import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post
        image="https://picsum.photos/id/28/1500/1500"
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
        avtarBGColor="red"
        avatarLetter="R"
      />
      <Post
        image="https://picsum.photos/id/29/1500/1500"
        title="Photo 29"
        subheader="August 15, 2017"
        avtarBGColor="blue"
        avatarLetter="B"
      />
      <Post
        image="https://picsum.photos/id/30/1500/1500"
        title="Photo 30"
        subheader="September 18, 2017"
        avtarBGColor="green"
        avatarLetter="G"
      />
      <Post
        image="https://picsum.photos/id/33/1500/1500"
        title="Photo 31"
        subheader="December 21, 2017"
        avtarBGColor="Orange"
        avatarLetter="O"
      />
    </Box>
  );
};

export default Feed;
