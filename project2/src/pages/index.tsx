import Image from "next/image";
import localFont from "next/font/local";

function Easy(){

}
function Medium(){
  
}
function Hard(){
  
}

export default function Home() {
 
  return (
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
   
    

    
    );
}
