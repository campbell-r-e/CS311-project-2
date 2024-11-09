// src/pages/api/questions.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default async function handler(req,res) {

  // found online to fix issue with calling function
  try{
    const { prompts, answers } = req.body;

    if (!prompts || !answers) {
      return res.status(400).json({ error: "Prompt and answer are required" });
    }
    //


    const user = await prisma.flashcard.create({
        data: {
          prompt: prompts,
          answer: answers,
        },
      })
    res.status(200).json(user);// from online 
    
    
    

    
    
  }catch(error){
    res.status(500).json({ error: "Failed to fetch questions" });
    console.log(error)
  }


}


// modified from online resource 
