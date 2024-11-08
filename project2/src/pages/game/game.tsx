
import Layout from "../layout";






export default function Home() {
 
  function Easy(): void {
    
  }



  function Medium(): void {
    
  }



  function Hard(): void {
    
  }

  return (
    <Layout>

      <div>
      <button onClick={Easy}>
      Easy
    </button>

    <button onClick={Medium}>
      Medium
    </button>

    <button onClick={Hard}>
      Hard
    </button>
      </div>
     

    </Layout>
   
    

    
    );
}