import "./Togile.css"
import { ThemeContext } from "../../App"
import { useContext} from "react"

function Togile(){
    const passedValues=useContext(ThemeContext)
    const theme= useContext(ThemeContext)
    function onHandleChange(event){
let newvalue

if (event.target.checked== false){
    newvalue="light"
    
} else{
    newvalue="dark"
    
}
theme.settheme(newvalue)
    }

return(
    <div id="togllediv" className={passedValues.theme +"header"}>
<label id="devfinder" className={passedValues.theme +"header"}>devfinder</label>
<button id="btndark" className={passedValues.theme +"header"} onClick={onHandleChange }   >DARK 
    <img id="darkimg" src="/assets/moon.svg"></img>
</button>
    </div>
)



}
export default Togile