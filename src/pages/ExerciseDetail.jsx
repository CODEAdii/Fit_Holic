import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Box,Button,TextField,Typography,Stack} from  '@mui/material';

import { exerciseOptions,fetchData } from '../utilities/fetchData';

import Detail from  '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos';

import SimilarExercises from '../components/SimilarExercises';






const ExerciseDetail = () => {
  const [exerciseDetail,setExerciseDetail]=useState({});
  const {id}=useParams();

  useEffect(()=>{
    const fetchExerciseData = async()=>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      // const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      // setExerciseVideos(exerciseVideosData.contents);

      // const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      // setTargetMuscleExercises(targetMuscleExercisesData);

      // const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      // setEquipmentExercises(equimentExercisesData);

      
    }
  })

  return (
    <Box>
      <Detail/>
      <ExerciseVideos/>
      <SimilarExercises/>
    </Box>
  )
}

export default ExerciseDetail