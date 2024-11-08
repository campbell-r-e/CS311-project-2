





function List(){
   window.location.href = "list/list";
}
function game(){
   window.location.href = "game/game";
}

function add(){
   window.location.href = "Add/add";
}


export default function Home() {
 
  return (
   <div>
      <div id="title">
      <h1>Ham Radio Technician Class Flash Cards</h1>
      </div>
      
   
 
      <div className = "custom-flex h-56 row-auto columns-2 content-center ...">
       
         <div> <button onClick={List}>
     View all cards &nbsp;
  </button>
  
  </div>

     
  <div className="text-color-bg-red-500"> 
   <button onClick={game}>
    Game
  </button>

  
  
  
  </div>

 
     
  <div className="text-color-bg-red-500"> 
   <button onClick={add}>
    add cards
  </button>

  
  
  
  </div>
</div>
</div>

   
   
    

    
    );
}

