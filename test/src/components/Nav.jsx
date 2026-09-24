import { useState } from "react";



function Nav(){

    const[ShowMsg,SetShowMsg] = useState(false);

function HomeOnClick(){
   SetShowMsg(true);
}
    return(
        <>
            <nav className="nav" >
                <h2>My Website</h2>
            <div className="nav-link">
                <button onClick={HomeOnClick}>Home</button>
                <button>Profiles</button>
                <button>Settings</button>
            </div>
        </nav>

        {ShowMsg && (
            <div className="alert">
                <h3>Hey there!</h3>
                <p>You clicked home!!</p>
            
            <button onClick={() => SetShowMsg(false)}>
                OK
            </button>
            </div>

        )}
       
     </>   
    );
}
export default Nav;