
// 
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Layout from "../layout";

export default function Home() {



  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");


 

 
  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = () => {
    updates();
    setAnswer("");
    setPrompt("");


  };
  async function updates(){

 
    
 
    try {
      const response = await fetch("/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          prompts:prompt,
          answers:answer,
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to update");
      }
  
      const data = await response.json();
      console.log("Update response:", data);
    } catch (error) {
      console.error("Error updating amount understood:", error);
    }
  

     


  
  
}
 
    return (
      <Layout>
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

      </Layout>
     
      
  
      
      );
  }
  //modified from online resource 