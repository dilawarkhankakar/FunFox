import React from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  Typography,
  Backdrop,
  IconButton,
  Avatar,
} from "@mui/material";

function HintModal({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullScreen
      PaperProps={{
        sx: {
          backgroundColor: "transparent",
          backdropFilter: "blur(10px)",
        },
      }}
      BackdropComponent={Backdrop}
      BackdropProps={{
        sx: { backdropFilter: "blur(10px)" },
      }}
    >
      <Box p={6} sx={{ height: "100%" }}>
        <Box
          p={4}
          sx={{
            border: "3px solid white",
            height: "90%",
            borderRadius: 8,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={handleClose}>
              <Avatar src="asset/close.svg" />
            </IconButton>
          </Box>
          <DialogTitle
            textAlign="center"
            sx={{
              fontSize: "32px",
              lineHeight: "39.41px",
              color: "white",
            }}
          >
            Guide Sheet
          </DialogTitle>
          <Box
            sx={{
              height: "70%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{
                  fontSize: "20px",
                  lineHeight: "29px",
                  color: "white",
                  marginBottom: 3,
                }}
              >
                So, what do you think the definition of setting is? Any guesses?
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    lineHeight: "29px",
                    color: "white",
                    width: "182px",
                  }}
                >
                  Any guesses?
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    border: "3px dashed #CCCCCC",
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "column",
                    padding: "3px 10px 0",
                  }}
                >
                  <Box sx={{ margin: "auto 0 0" }}>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        lineHeight: "29px",
                        color: "white",
                      }}
                    >
                      {`> Setting is the time and place of a story.`}
                    </Typography>
                    <hr style={{ marginTop: "-1px" }} />
                  </Box>
                </Box>
                <Typography
                  sx={{
                    fontSize: "20px",
                    lineHeight: "29px",
                    color: "white",
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
            </Box>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}

export default HintModal;
