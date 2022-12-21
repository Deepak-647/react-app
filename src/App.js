
import './App.css';

function App() {

// I can write all the JavaScript code here bcoz this is not the JSX PART 
const name ="Deepak"


  return (
    // This is the JSX PART
    <div className="App">
      
        <h1>
        Hello to this react world !
        
         
        </h1>
        <p>{name}</p>
        { /* using javascript expression(javascript expression means whatever code you can write in one line ine javascript)
        inside JSX by curly braces, You cannot use javascript code */}

       {console.log("hello console")}
       {new Date().toDateString()} 
     
      
    </div>
  );
}

export default App;
