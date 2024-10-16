import Layout from "./layout";





function List(){
   window.location.href = "easylist/easylist";
}
function game(){
  
}


export default function Home() {
 
  return (
    <Layout>
       <button onClick={List}>
     View all cards in database
  </button>
  <br></br>

  <button onClick={game}>
     Medium 
  </button>
  <br></br>



    </Layout>
   
    

    
    );
}
