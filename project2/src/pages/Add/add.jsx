
// 
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function Home() {



  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");

  // State to hold the submitted values
  const [submittedPrompt, setSubmittedPrompt] = useState("");
  const [submittedAnswer, setSubmittedAnswer] = useState("");

  // Handlers to update the state when text fields change
  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = () => {
    setSubmittedPrompt(prompt);
    setSubmittedAnswer(answer);



  };
  async function updates(){

 
    
 
   
  

         
    try {
      const response = await fetch('/api/create');
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setpercent(data.amountUnderstood);
    } catch (error) {
      console.error("Failed to fetch questions:", error);
    }
   return percent


  
  
}
 
    return (
      <div>
       <br></br>
       <div>
        <div>
          <TextField
            id="outlined-basic"
            label="Prompt"
            variant="outlined"
            value={prompt}
            onChange={handlePromptChange}
          />
        </div>

        <div>
          <TextField
            id="filled-basic"
            label="Answer"
            variant="filled"
            value={answer}
            onChange={handleAnswerChange}
          />
        </div>
      </div>
      <div>
      <br></br>
      <br></br>

       <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      
    
      </div>
     
      
  
      
      );
  }
  // example from online resource 