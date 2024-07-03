import React ,{useContext} from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

import { Box, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';


import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';


const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} style={{ cursor: 'pointer' }}>
        <img src={LeftArrowIcon} alt="left-arrow" />
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} style={{ cursor: 'pointer' }}>
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };


  const HorizontalScrollbar = ({ data, setBodyPart, bodyPart, isBodyParts }) => (

<Box sx={{ width: 1500, overflowX: 'auto' }}>
<ScrollMenu scrollWheel={true} LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
           { isBodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> :<ExerciseCard exercise={item}/>} 
        </Box>
      )
    )}
    
    </ScrollMenu>
    </Box>
    

  );

export default HorizontalScrollbar
