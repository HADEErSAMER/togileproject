import "./Search.css"
import { ThemeContext } from "../../App"
import { useContext } from "react"
function Search(){
    const passedValues=useContext(ThemeContext)
return(
    //<h1 className={passedValues.theme +"header"}>hhhh</h1>
    <div id="searchdiv" className={passedValues.theme +"header"}>
        
        <div id="searchside">
<img src="/assets/Shape 2.png"></img>
<input placeholder="Search GitHub username…" id="inputsearch" className={passedValues.theme +"header"} type="search"></input>
</div>
<button id="btnsearch" type="submit">Search</button>

    </div>
)
}
export default Search