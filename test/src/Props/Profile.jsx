
function Profile(props){
    return(
        
        
        <div className = "pro">
            <h1>{props.name}</h1>
            <p>{props.role} | {props.uni}</p>
        </div>
        
        
        
    );
}
export default Profile;