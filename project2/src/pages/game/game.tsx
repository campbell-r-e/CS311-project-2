// modifed from online resources to make this work


import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Layout from "../layout";


type Question = {
  id: number;
  prompt: string;
  answer: string;
};


export default function Home(){
  const [questions, setQuestions] = useState<Question[]>([]);
   const [currentIndex, setCurrentIndex] = useState(0);
   const [count, setcount] = useState<number>(0); 
   const [percent, setpercent] = useState(0); 
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
      mathematics();
    } else {
      setCurrentIndex(0); // Loop back to the first question
    }

    
  };

  const loser = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the first question
    }
   updates();
  
  };



  

  useEffect(() => {
   
  

    async function fetchcount() {
      try {
        const response = await fetch('/api/understood');
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setcount(data);
      } catch (error) {
        console.error("Failed to fetch questions:", error);
      }
    }

    fetchcount();
  }, []);

  const num_records= count;
  console.log(num_records)
  async function mathematics(){
     const done =(currentIndex/num_records) * 100;
     console.log(done)

     //
     try {
      const response = await fetch("/api/stat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ num: done }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to update");
      }
  
      const data = await response.json();
      console.log("Update response:", data);
    } catch (error) {
      console.error("Error updating amount understood:", error);
    }
    updates()
     // between comments borroewed from online resource

  }
  async function updates(){

 
    
 
   
  

         
      try {
        const response = await fetch('/api/statrecieve');
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
    <Layout>

      
      <div id='nav' className="flex justify-center items-center  space-x-4 text-red-700 ">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
   <button onClick={handle}>
     Easy
     </button>
     <span>&nbsp;</span>
     <span>&nbsp;</span>


    <button onClick={handle}>
       Medium
    </button>
    <span>&nbsp;</span>
    <span>&nbsp;</span>

    <button onClick={loser}>
   Hard
   </button>


   <button onClick={handle}>
   done
   </button>

   <span>&nbsp;</span>
   <span>&nbsp;</span>

   <label htmlFor="Understood percent">Percent Understood:{percent}%</label>
    </div>


<div className="flex justify-center items-center h-screen space-x-4 text-red-700 "> 
      
      {questions.length > 0 && (
       <div className="border-[5px] border-red-500 p-4">
         <h3>Prompt: {questions[currentIndex].prompt}</h3>
         <p>Answer: {questions[currentIndex].answer}</p>



       </div>
       
       
     )}
     <br></br>
    



   
 </div>
 
 
 
    
   
    </Layout>
    
    
     
    
  );
};
