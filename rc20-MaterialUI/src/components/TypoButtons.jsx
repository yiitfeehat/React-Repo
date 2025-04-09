import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import SendIcon from '@mui/icons-material/Send';

const TypoButtons = () => {
  return (
    <div>
      <Container maxWidth="md">
        {/* maxWidth="md" width en fazla md büyüklükte olsun.  gutterBottom={true}
      alttan margin. component attribute ü  sadece console da etkilidir , görüntü yine variant neyse odur*/}

        <Typography
          variant="h1"
          component="h3"
          gutterBottom
          align="center"
          color="error"
          sx={{ background: "#eee", mt: 4, border: "1px solid red" }}
        >
          Typography Container Box Button
        </Typography>

        <Typography color="warning" sx={{ mr: 4 }} variant="button">
          span olacak
        </Typography>
        <Typography variant="button">span olacak</Typography>

        <Typography variant="body1">p etiketi</Typography>
        <Typography variant="body2">p etiketi</Typography>

        <Box sx={{ display: "flex", flexDirection: "column", marginTop: 4 }}>
          <Button startIcon={<SendIcon/>} variant="outlined" color="error">
            Contained
          </Button>
          <Button endIcon={<SendIcon/>} variant="contained" color="success" sx={{ color: "blue", mt:4 }}>
            Contained
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default TypoButtons;
