import { Typography, Stack } from "@mui/material";

import React from "react";
import Icon from "../assets/assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        // backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "288px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={Icon} alt="dumbell" className="body-part-icon" style={{ width: "40px", height: "40px" }} />
      <Typography fontSize="24px" fontWeight="bold" color="#321212" textTransform="capitalize">
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
