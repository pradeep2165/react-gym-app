import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import Details from "../components/Details";
import ExerciseVideo from "../components/ExerciseVideo";
import SimilarExercises from "../components/SimilarExercises";
const ExerciseDetail = () => {
  return (
    <Box>
      <Details />
      <ExerciseVideo />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
