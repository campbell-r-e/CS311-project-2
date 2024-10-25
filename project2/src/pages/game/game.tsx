import Layout from "../layout";





function Easy(){
   
}
function Medium(){
  
}
function Hard(){
  
}

export default function Home() {
 
  return (
    <Layout>
      <div id = "w"className="text-red-800 content-center">
      <h1>To play select a level</h1>
      <div className="h-56 row-auto columns-3 content-center ..." >
         <div> <button onClick={Easy}>
     Easy 
  </button>
  </div>
     
  <br></br>

  
  <div>
  <button onClick={Medium}>
     Medium 
  </button>
  </div>
  <br></br>
 <div>
 <button onClick={Hard}>
     Hard
  </button>
 </div>
  
      </div>
       
</div>
    </Layout>
   
    

    
    );
}