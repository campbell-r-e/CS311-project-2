
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Only POST requests are allowed" });
      }
    
      const { num } = req.body;
  try{
    const stats = await prisma.viewStats.update({
        where: {
          id: 1,
        },
        data: {
            amountUnderstood:num,
        },
      })
      console.log(stats);
      if (stats) {
        console.log("Successful update");
        res.status(200).json({ message: "Update successful" });
      } else {
        console.log("Failed insertion");
        res.status(500).json({ message: "Failed to update" });
      }
    
    

    
    
  }catch(error){
    console.log(error);
    res.status(500).json({ message: "An error occurred", error });
  }


}


// modified from online resource 
