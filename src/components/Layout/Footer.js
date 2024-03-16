import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkdinIcon from "@mui/icons-material/LinkedIn";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "white", color: "black", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& a": {
              color: "inherit",
              textDecoration: "none",
              "&:hover svg": {
                color: "goldenrod",
                transform: "translateX(5px)",
                transition: "all 400ms",
              },
            },
            "& svg": {
              fontSize: "30px",
              cursor: "pointer",
              mr: 2,
            },
          }}
        >
          {/* social media links */}
          <a href="https://www.instagram.com/aloktechuniverse?igsh=MTRjdnF4djQ5Z3gweA==">
            <InstagramIcon />
          </a>
          <a href="https://github.com/Alokjha1999">
            <GitHubIcon />
          </a>
          <a href="https://youtube.com/@aloktechuniverse?si=u-UGT4CMFb8PfXH1">
            <YouTubeIcon />
          </a>
          <a href="https://www.linkedin.com/in/ak28/">
            <LinkdinIcon />
          </a>
        </Box>
        {/* Footer text */}
        <Typography
          variant="body1"
          sx={{
            "@media (max-width:100px)": {
              fontSize: "1.5rem",
            },
          }}
        >
          &copy; 2024 Alok TechUniverse. All Rights Reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
