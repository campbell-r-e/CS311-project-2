import Layout from "../layout";





function Easy(){
   window.location.href = "easylist/easylist";
}
function Medium(){
  
}
function Hard(){
  
}

export default function Home() {
 
  return (
    <Layout>
       <button onClick={Easy}>
     Easy 
  </button>
  <br></br>

  <button onClick={Medium}>
     Medium 
  </button>
  <br></br>

  <button onClick={Hard}>
     Hard
  </button>

    </Layout>
   
    

    
    );
}