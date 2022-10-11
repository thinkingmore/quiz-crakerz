import { Link, redirect } from "react-router-dom";
export default function NotFound() {
    const style = {
      color: "white",
      backgroundColor: "DodgerBlue",
      marginRight:"20px",
      padding: "30px",
      fontSize: "10rem"
    }
    return (
        <div>
            <h1 style={{marginBottom:"50px"}}>Oops! You seem to be lost.</h1>
            <span style={style}>4</span>         
            <span style={style}>0</span>         
            <span style={style}>4</span>         
        </div>
    )
}