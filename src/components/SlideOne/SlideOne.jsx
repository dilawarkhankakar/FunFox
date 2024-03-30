import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function CustomCloudBox(imageUrl, text, height, width) {
  return (
    <Grid item lg={2.4} md={4}>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            backgroundImage: `url(${imageUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: `${height}px`,
            width: `${width}px`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              lineHeight: "24.63px",
              color: "#000",
              textAlign: "center",
            }}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </Box>
      </Box>
    </Grid>
  );
}

function SlideOne() {
  return (
    <Box
      sx={{
        background: "white",
        borderRadius: "25px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        gap: 2,
      }}
    >
      <Box
        sx={{
          borderRadius: "40px",
          padding: "20px",
          background: "#FE6784",
          border: "3px dashed #FFAEBE",
          width: "60%",
        }}
      >
        <Typography
          sx={{
            fontSize: "32px",
            lineHeight: "35px",
            textAlign: "center",
            color: "white",
          }}
        >
          Elements of Story Writing
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Typography
          sx={{ fontSize: "24px", lineHeight: "29px", color: "#1E242F" }}
        >
          Welcome to term 2 of Writers Club. Are you excited for this amazing
          journey? <br />
          Over the next week, we will be practicing the different elements of
          story writing. <br />
          Our aim is to make stories more interesting and exciting.
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            padding: "15px",
            display: "flex",
            justifyContent: "space-between",
            border: "3px dashed #A4FDFB",
            borderRadius: "4px",
            background: "#25A3A1",
            position: "relative",
          }}
        >
          <Typography
            sx={{ fontSize: "24px", lineHeight: "29px", color: "white" }}
          >
            There are elements which make the foundation for story <br />
            writing. An element is an essential part of something and <br />
            every fiction story has the same key elements:
          </Typography>
          <Image
            src={"asset/child.svg"}
            height={131}
            width={110}
            style={{ position: "absolute", right: 20, top: -3 }}
          />
        </Box>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{ padding: "20px", justifyContent: "space-around" }}
      >
        {CustomCloudBox("asset/cloud1.png", "Setting", "101", "185")}
        {CustomCloudBox("asset/cloud2.png", "CHARACTERS", "108.25", "181")}
        {CustomCloudBox("asset/cloud1.png", "PLOT", "101", "185")}
        {CustomCloudBox(
          "asset/cloud3.png",
          `PROBLEM <br /> OR <br /> CONFLICT`,
          "105.15",
          "176"
        )}
        {CustomCloudBox("asset/cloud2.png", "RESOLUTION", "108", "181")}
      </Grid>
      <Box
        sx={{
          width: "100%",
          background: "#FE6784",
          padding: "5px 0",
          borderRadius: "8px",
        }}
      >
        <Box
          sx={{
            padding: "10px 30px",
            backgroundImage: "url(/asset/paper-background.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Typography
            sx={{ fontSize: "24px", lineHeight: "29px", color: "#1E242F" }}
          >
            For today’s lesson, we will try to understand and practice writing
            the setting for our stories. <br /> The setting is an important
            element of every fiction story.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default SlideOne;
