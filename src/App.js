import React from 'react';
import './App.css';



   function sideOn(){
      return(  
    
          document.getElementById('sidebar').style.marginLeft = '0'
          );
       }
   function sideoff(){
      return(  
      
           document.getElementById('sidebar').style.marginLeft = '-300px'
          );
       }
 

function App() {
  return (
    <>
    <div id="sidebar">
      <div className="upper">
      <div id="icon3" onClick={sideoff}>&times;</div>
       <h1>Lorem</h1>
       
      </div>
        <ul>
          <li><a href="#" className="active" >About</a></li>
          <li><a href="#" >Services</a></li>
          <li><a href="#" >Cuisine</a></li>
          <li><a href="#" >Gallery</a></li>
          <li><a href="#" >Contact</a></li>
          <li><a href="#" >Book</a></li>
          <button id="button">Cart</button>
        </ul>
      </div>


    <header className="header">
      <span className="icon" onClick={sideOn}>&#9776;</span>
      <span className="logo" onClick=""><h2>Lorem</h2></span>
      <span className="icon2" onClick=""><img src="/cart.png"/></span>
    </header>

    
    <section className="section">
     
      <div className="headline">
      <h2>What are you <br/>having for lunch?</h2>
      </div>

      <div className="pera">
        <p>Lorem ipsum Dolor sit amet,<br/>
           consectetur adipiscing elit,<br/>
           sed do eiusmod tempor<br/>
           incididunt ut labore et.
         </p>
        <div id="line"></div>
      </div>
       
       <div className="cards">
         <div id="card">
           <div  id="img">
               <div id="img1"  style={{background:'url(/taco.jpeg)',backgroundSize:"cover",boxSizing:"cover"}} >
               </div>
           </div>
           <div  id="name">
                <h3>Maxican Taco</h3>
           </div>
         </div>

         <div id="card">
           <div  id="img">
               <div id="img1"  style={{background:'url(/pizza.jpeg)',backgroundSize:"cover",boxSizing:"cover"}} >
               </div>
           </div>
           <div  id="name">
                <h3>Farmhouse Pizza</h3>
           </div>
          </div>

          <div id="card">
           <div  id="img">
               <div id="img1"  style={{background:'url(/burger.jpeg)',backgroundSize:"cover",boxSizing:"cover"}} >
               </div>
           </div>
           <div  id="name">
                <h3>Chicken Burger</h3>
           </div>
          </div>


         <div id="card">
           <div  id="img">
               <div id="img1"  style={{background:'url(/nachos.jpeg)',backgroundSize:"cover",boxSizing:"cover"}} >
               </div>
           </div>
           <div  id="name">
                <h3>Loaded Nachos</h3>
           </div>
         </div>


         <div id="card">
           <div  id="img">
               <div id="img1"  style={{background:'url(/hakka.jpeg)',backgroundSize:"cover",boxSizing:"cover"}} >
               </div>
           </div>
           <div  id="name">
                <h3>Hakka Noodles</h3>
           </div>
         </div>
       
       </div>

    </section>
      
    </>
  );
}

export default App;
