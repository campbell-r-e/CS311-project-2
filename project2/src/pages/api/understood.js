// src/pages/api/questions.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default async function handler(req,res) {
  try{
    const totalCount = await prisma.flashcard.count({
        where: {
          status: 'ACTIVE',
        },
      });
    res.status(200).json(totalCount);// from online 
    
    
    

    
    
  }catch(error){
    res.status(500).json({ error: "Failed to fetch questions" });
    console.log(error)
  }


}


// modified from online resource 
