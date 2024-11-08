// src/pages/api/questions.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default async function handler(num) {
  try{
    const stats = await prisma.viewStats.update({
        where: {
          id: 1,
        },
        data: {
            amountUnderstood:num,
        },
      })
   if(stats != null){
    console.log("successful"); 


   }else{
    console.log("Failed insertion")
   }
    
    
    

    
    
  }catch(error){
    console.log(error)
  }


}


// modified from online resource 
