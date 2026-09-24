import { useState } from "react";



function Nav(){
    const [isClick,SetClick] = useState(false);

    function ClickNav()
{
   SetClick(true);
}
    return(
        <>
        <nav  className="gu">
            <button onClick = {ClickNav}>Home</button>
            <button onClick = {ClickNav}>Profile</button>
            <button onClick = {ClickNav}>Settings</button>
        </nav>

        {isClick && (
            <div className="alert">
                <h3>Hello</h3>
                <p>you Clicked!</p>

                <button onClick={()=>{SetClick(false)}}>OK</button>
            </div>
        )}
    </>
    );

}
export default Nav;