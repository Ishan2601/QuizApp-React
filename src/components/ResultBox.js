import React from 'react'; 
import {Alert,Button} from 'reactstrap';

const Result = ({score, playAgain}) => ( 
  <div className="score-board"> 
    <Alert color="success"> Your score is {score} / 5 ! ! ! </Alert> 
    <Button className="m-1"onClick={playAgain} > Play Again </Button> 
  </div> 
) 
  
export default Result; 
