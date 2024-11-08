// src/pages/api/questions.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default async function handler(req,res,prompts,answers) {
  try{
    const user = await prisma.user.create({
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
