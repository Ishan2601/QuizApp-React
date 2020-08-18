import React, {useState} from "react";
import { Card, CardBody, CardHeader,
  CardTitle, Button} from 'reactstrap'; 
  
// Function to question inside our app 
const QuestionBox = ({ question, options, selected}) => { 
  const [answer, setAnswer] = useState(options); 
  return (
    <Card className="m-2">
      <CardHeader>
        <CardTitle>{question}</CardTitle>
      </CardHeader> 
        <CardBody>
        {answer.map((text, index) => ( 
          <Button 
              key={index} 
              className="btn-info m-1"
              onClick={()=>{
                    setAnswer([text]);
                    selected(text); 
                  }}> {text} 
         </Button>
        ))}
        </CardBody>
    </Card>
  ) 
}; 
  
export default QuestionBox; 
