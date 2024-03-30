"use client";
import React from "react";
import { Short_Stack } from "next/font/google";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import SlideOne from "@/src/components/SlideOne/SlideOne";
import SlideTwo from "@/src/components/SlideTwo/SlideTwo";
import BackgroundIcon from "@/src/shared-components/BackgroundIcon";
import { useDialog } from "@/src/components/hooks/useDialog";
import HintModal from "@/src/components/SlideTwo/HintModal";

const shortStack = Short_Stack({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const slides = [<SlideOne />, <SlideTwo />];
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const {
    isDialogOpen: isHintDialogOpen,
    openDialog: openHintDialog,
    closeDialog: closeHintDialog,
  } = useDialog();

  const handleNextSlide = () => {
    if (currentSlide === slides.length) {
      return;
    }
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const handdlePreviousSlide = () => {
    if (currentSlide === 1) {
      return;
    }
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  return (
    <main className={shortStack.className}>
      <Box
        sx={{
          background: "#F8D1E0",
          padding: "4.5rem 4.5rem 0",
          position: "relative",
          backgroundImage: `url(asset/background-icon-left.svg), url(asset/background-icon-right.svg)`,
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: "left, right",
        }}
      >
        {currentSlide === 1 && (
          <Box
            sx={{
              backgroundImage: `url(asset/week-holder.svg)`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              padding: 2,
              width: "153px",
              position: "absolute",
              left: 150,
              top: 5,
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                lineHeight: "29.55px",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Week 1
            </Typography>
          </Box>
        )}
        <BackgroundIcon
          icon="asset/logo.png"
          top={20}
          left={0}
          width={150}
          height={80}
        />
        <BackgroundIcon
          icon="asset/pencil.png"
          top={120}
          left={2}
          width={61.41}
          height={37.33}
        />
        <BackgroundIcon
          icon="asset/bag.png"
          top={"46%"}
          left={2}
          width={61.41}
          height={54.86}
        />
        <BackgroundIcon
          icon="asset/open-book.png"
          bottom={120}
          left={2}
          width={66.41}
          height={60.66}
        />
        <BackgroundIcon
          icon="asset/ruller.png"
          top={120}
          right={2}
          width={92}
          height={94.57}
        />
        {currentSlide % 2 === 0 ? (
          <IconButton
            sx={{ position: "absolute", right: 2, top: "46%" }}
            onClick={openHintDialog}
          >
            <BackgroundIcon
              icon="asset/help.svg"
              right={0}
              width={74}
              height={73.36}
            />
          </IconButton>
        ) : (
          <BackgroundIcon
            icon="asset/close-book.png"
            top={"46%"}
            right={2}
            width={74}
            height={73.36}
          />
        )}
        <BackgroundIcon
          icon="asset/graduation.png"
          bottom={120}
          right={2}
          width={82.21}
          height={77}
        />
        {slides[currentSlide - 1]}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 0",
          }}
        >
          <IconButton>
            <Avatar src="asset/sound-icon.svg" variant="square" />
          </IconButton>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <IconButton
              disabled={currentSlide === 1}
              onClick={handdlePreviousSlide}
            >
              <Avatar src="asset/previous-icon.svg" variant="square" />
            </IconButton>
            <Box
              sx={{
                borderRadius: "8px",
                height: "37px",
                width: "75px",
                background: "#CD3F97",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {currentSlide}
            </Box>
            <IconButton
              disabled={currentSlide === slides.length}
              onClick={handleNextSlide}
            >
              <Avatar src="asset/next-icon.svg" variant="square" />
            </IconButton>
          </Box>
          <IconButton>
            <Avatar src="asset/info-icon.svg" variant="square" />
          </IconButton>
        </Box>
        {isHintDialogOpen && (
          <HintModal open={isHintDialogOpen} handleClose={closeHintDialog} />
        )}
      </Box>
    </main>
  );
}
