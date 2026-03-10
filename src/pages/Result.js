import { useLocation } from "react-router-dom";

function Result(){

 const location = useLocation();

 return(

 <div className="container mt-5 text-center">

 <h2>Result</h2>

 <h4>{location.state.message}</h4>

 </div>
 );
}

export default Result;