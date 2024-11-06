import Link from "next/link";
import Layout from "../layout";






export default function Home() {
 
  return (
    <Layout>
      <div id = "w"className="text-red-800 content-center">
      <h1>To play select a level</h1>
      <div className="h-56 row-auto columns-3 content-center ..." >
      <Link href ={"/easy/easy"}>
    Easy
  </Link>
  </div>
     
  <br></br>

  
  <div>
  <Link href ={"/medium/medium"}>
    Medium
  </Link>
  </div>
  <br></br>
 <div>
 <Link href ={"/hard/hard"}>
   Hard
  </Link>
 </div>
  
      </div>
       

    </Layout>
   
    

    
    );
}