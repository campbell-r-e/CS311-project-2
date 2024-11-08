// src/pages/api/questions.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default async function handler(req,res) {
  try{
    const understood_percent = await prisma.viewStats.findUnique({
        where: {
           id:1,
           },
       })
    res.status(200).json(understood_percent);// from online 
    
    
    

    
    
  }catch(error){
    res.status(500).json({ error: "Failed to fetch questions" });
    console.log(error)
  }


}


// modified from online resource 
