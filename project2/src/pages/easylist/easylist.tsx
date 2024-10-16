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
  // modified from example slides 
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
      <h1>Easy Questions</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.Id} >
            <h3>{question.Prompts}</h3>
            <p><strong>Answer:</strong> {question.Answer}</p>
            <br></br>
           
          
          
           
          </li>
         
        ))}
      </ul>

    </Layout>

    // modified from online example
    
    
   

  
 
  );
}