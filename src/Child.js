import Book from "./Book";

  function Child(props){
    console.log(props);
    return(
        <div>
            <p><Book/> My name is {props.na}</p>
        </div>
    );
}
 export default Child;