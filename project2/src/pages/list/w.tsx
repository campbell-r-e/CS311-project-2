// modifed from online resources to make this work
// borrowed this from online to 

import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

type Question = {
  id: number;
  prompt: string;
  answer: string;
};

const App = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
   
    const generatedQuestions = Array.from({ length:10}, (_, index) => ({
      id: index,
      prompt: faker.lorem.sentence(),
      answer: faker.lorem.word(),
    }));
    setQuestions(generatedQuestions);

    async function fetchQuestions() {
      try {
        const response = await fetch('/api/questions');
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error("Failed to fetch questions:", error);
      }
    }

    fetchQuestions();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen space-x-4 text-red-700 "> <ul style={{ width: "400px", height: "700px", overflowY: "scroll" }}>
    
    {questions.map((question) => (
      <div 
      key={question.id}
      className="flex justify-center items-center  border-[5px] h-75 w-70 border-red-500 space-x-4">
        <li>Prompt:
        {question.prompt} 
        
        Answer:{question.answer}</li>
        
        <div>
        </div>
         </div>
         
      
    ))} 
  </ul>
 
  </div>
    
     
    
  );
};

export default App;
// modified from online