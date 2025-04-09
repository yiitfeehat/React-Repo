import { useDispatch, useSelector } from "react-redux";
import loadingGif from "../assets/loading.gif";

import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect } from "react";
import { getirData } from "../features/haberSlice";


const News = () => {
  const dispatch = useDispatch();

const {loading, haberler}=useSelector((state)=>state.haberSlice)

  useEffect(() => {
    dispatch(getirData());
  }, []);

  return (
    <>
      {loading ? (
        <img src={loadingGif} alt="" height="800px" />
      ) : (
        <Box
          xs={{ d: "flex" }}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          {haberler.map((haber) => (
            <Card sx={{ maxWidth: 345, maxHeight:600 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={haber.urlToImage}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {haber.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {haber.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button  size="small">Clear</Button>
                <Button href={haber.url} target="_blank" size="small">DETAIL</Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      )}
    </>
  );
};

export default News;