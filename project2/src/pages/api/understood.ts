// src/pages/api/questions.ts
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try{
    const totalCount = await prisma.flashcard.count();
    res.status(200).json(totalCount);// from online 
    console.log(totalCount)
    
    
    

    
    
  }catch(error){
    res.status(500).json({ error: "Failed to fetch questions" });
    console.log(error)
  }


}


// modified from online resource 
