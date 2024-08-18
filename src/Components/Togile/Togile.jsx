import "./Togile.css"
import { ThemeContext } from "../../App"
import { useContext} from "react"

function Togile(){
    const passedValues=useContext(ThemeContext)
    const theme= useContext(ThemeContext)
    function onHandleChange(event){
let newvalue

if (event.target.value== "light"){
    newvalue="dark"
    
} else{
    newvalue="light"
    
}
theme.settheme(newvalue)
    }

return(
    <div id="togllediv" className={passedValues.theme +"header"}>
<label id="devfinder" className={passedValues.theme +"header"}>devfinder</label>
<button value={theme.theme} id="btndark" className={passedValues.theme +"header"} onClick={onHandleChange }   >{theme.theme} 
    <img id="darkimg" src="/assets/moon.svg"></img>
</button>
    </div>
)



}
export default Togile