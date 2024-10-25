import React, { useState, useEffect } from 'react';
import Layout from '../layout';
// below from online resource
type Question = {
  Id: string;
  Prompts: string;
  Answer: string;
  Understood: string;
  time: string;
};




// above
export default function Document() {
   
  const [questions, setQuestions] = useState<Question[]>([]);
  // above from online resource example 
  useEffect(() => {
    fetch('/data.json') //from online
      .then((response) => response.json()) //from online 
      .then((data) => setQuestions(data['Easy Questions'])) // from online example
   
    
   
  }, []);
  // 
  return (
    
    // modified from online resource
    <Layout>
      <h1 id="heading">Easy Questions</h1>
      <div className="flex justify-center items-center h-screen">

      <div className="w-4/5 md:w-2/3 lg:w-1/2 space-y-4">
      <ul>
        {questions.map((question) => (
          <li key={question.Id} >
            <div className="border-4 w-4/5 place-items-center border-orange-50 text-red-500 ">
            <h3 id="heading2">{question.Prompts}</h3>
            <p id="paragraph"><strong>Answer:</strong> {question.Answer}</p>
            <br></br>
            
            </div>
            
           
          
          
           
          </li>
         
        ))}
      </ul>
      
      </div>
      </div>

    </Layout>

    // modified from online example
    
    // flex justify-center items-center h-screen and w-4/5 md:w-2/3 lg:w-1/2 space-y-4 from online resource
   

  
 
  );
}