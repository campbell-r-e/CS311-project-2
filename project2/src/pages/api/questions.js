// src/pages/api/questions.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

var size =0;
export default async function handler(req,res) {
  try{
    const questions = await prisma.flashcard.findMany();
    res.status(200).json(questions);// from online 
    
    
    

    
    
  }catch(error){
    res.status(500).json({ error: "Failed to fetch questions" });
    console.log(error)
  }


}


// modified from online resource 
