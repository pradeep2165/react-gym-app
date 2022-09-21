import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import Details from "../components/Details";
import ExerciseVideo from "../components/ExerciseVideo";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      console.log(exerciseDetailData);
      setExerciseDetail(exerciseDetailData);
    };
    fetchExercisesData();
  }, [id]);
  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      {/* <ExerciseVideo />
      <SimilarExercises /> */}
    </Box>
  );
};

export default ExerciseDetail;
