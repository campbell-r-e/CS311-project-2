// modifed from online resources to make this work


import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";


type Question = {
  id: number;
  prompt: string;
  answer: string;
};

export default function Home(){
  const [questions, setQuestions] = useState<Question[]>([]);
   const [currentIndex, setCurrentIndex] = useState(0);
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


  

  const handle = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the first question
    }
  };

  return (
    
    <div className="flex justify-center items-center h-screen space-x-4 text-red-700 "> 
      
       {questions.length > 0 && (
        <div className="border-[5px] border-red-500 p-4">
          <h3>Prompt: {questions[currentIndex].prompt}</h3>
          <p>Answer: {questions[currentIndex].answer}</p>



        </div>
        
        
      )}
      <br></br>
      <div>



        <div>
      <div  className='text-center '>
      <h1>All Cards in Database</h1>
      </div>
    
    <br></br>
   
   <br></br>
  </div>
</div>

<div>
<button onClick={handle}>
Easy
</button>

<button onClick={handle}>
Medium
</button>

<button onClick={handle}>
Hard
</button>
</div>

    
  </div>
    
     
    
  );
};
