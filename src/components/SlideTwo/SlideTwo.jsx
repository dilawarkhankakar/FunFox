import { Avatar, Box, IconButton, Typography } from "@mui/material";
import React from "react";

function customeImageContainer(src, text) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0.5,
      }}
    >
      <Box
        sx={{
          borderRadius: "8px",
          padding: "10px 25px",
          border: "3px dashed #CCCCCC",
          borderSpacing: "6px",
        }}
      >
        <img src={src} alt={src} width={170.9} height={140.35} />
      </Box>
      <Typography
        textAlign="center"
        sx={{ fontSize: "20px", lineHeight: "24.63px" }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </Box>
  );
}

function SlideTwo() {
  return (
    <Box
      sx={{
        background: "white",
        borderRadius: "25px",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        gap: 2,
      }}
    >
      <Typography
        sx={{ fontSize: "32px", lineHeight: "39.41px", color: "#1E242F" }}
      >
        Can you figure out the definition of setting from the following
        examples?
      </Typography>
      <Typography
        sx={{
          fontSize: "24px",
          lineHeight: "29.55px",
          color: "#1E242F",
        }}
      >
        (take a minute to think about this)
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "space-around",
        }}
      >
        {customeImageContainer("asset/day.png", "Sunny day at a beach")}
        {customeImageContainer(
          "asset/night.png",
          `A cold rainy night in a <br /> haunted house in October`
        )}
      </Box>
      <Typography
        sx={{ fontSize: "20px", lineHeight: "29px", color: "#1E242F" }}
      >
        So, what do you think the definition of setting is?
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            lineHeight: "29px",
            color: "#1E242F",
            width: "180px",
          }}
        >
          Any guesses?
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "44px",
            border: "3px dashed #CCCCCC",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            padding: "0 10px",
          }}
        >
          <hr style={{ margin: "auto 0 5px" }} />
        </Box>
        <Typography
          sx={{
            fontSize: "20px",
            lineHeight: "29px",
            color: "#1E242F",
          }}
        >
          Hint:
        </Typography>
        <IconButton>
          <Avatar src="asset/clock-icon.svg" />
        </IconButton>
        <IconButton>
          <Avatar src="asset/home-icon.svg" />
        </IconButton>
      </Box>
      <Box
        sx={{
          background: "#25A3A1",
          padding: "15px",
          border: "3px dashed #cccccc",
          borderRadius: "4px",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            lineHeight: "33px",
            color: "white",
            display: "flex",
            gap: 1,
          }}
        >
          Setting is the time
          <Avatar src="asset/clock-icon.svg" /> and place
          <Avatar src="asset/home-icon.svg" /> of a story. It often answers the
          questions: when? and where?
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: "24px",
          lineHeight: "24.63px",
          color: "#1E242F",
        }}
      >
        The time of the story could be in the past, future, day, night, summer
        or winter. A story may take place in a school, a mall, a desert, an
        airplane or in a variety of other places.
      </Typography>
    </Box>
  );
}

export default SlideTwo;
