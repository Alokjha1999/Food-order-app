import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "3rem",
              
            },
          },
        }}
      >
        <Typography variant="h4">About Our Company</Typography>
        <p>
          Welcome to Tarrace Restaurant, where we take pride in serving delicious food made with fresh, local ingredients.
           Our restaurant offers a warm and inviting atmosphere, perfect for dining with family and friends.
        </p>
        <p>
          Our mission is to provide exceptional dining experiences, offering a diverse menu of mouthwatering dishes crafted with care and attention to detail. </p>
        <Typography variant="h4">Our Team</Typography>
        <p>
          Meet the talented individuals behind Tarrace Restaurant. Our dedicated team is passionate about delivering outstanding service and creating memorable dining moments for our guests. From our skilled chefs to our friendly servers, each member plays a vital role in ensuring your satisfaction.
        </p>
        <Typography variant="h4">Community Engagement</Typography>
        <p>
          At Tarrace Restaurant, we believe in giving back to the community. We actively participate in local events, support charitable organizations, and promote sustainability practices. By investing in our community, we strive to make a positive impact and contribute to a brighter future for all.
        </p>
        <Typography variant="h4">Contact Us</Typography>
        <p>
          We'd love to hear from you! Whether you have questions, feedback, or simply want to make a reservation, feel free to reach out to us. You can visit our restaurant, give us a call, or send us an email. We're here to serve you and ensure your dining experience is nothing short of excellent.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
