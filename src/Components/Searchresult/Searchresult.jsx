import "./Searchresult.css"
import { ThemeContext } from "../../App"
import { useContext } from "react"
function Searchresult(){
    const passedValues=useContext(ThemeContext)
return(
    <div  className={passedValues.theme +"header"} id="searchresult" >
        <div id="octocatdiv" >
            <div id="catdiv" >
<img id="catimg" src="public/assets/Bitmap.png"></img>
</div>
<div id="octocatinformation">
    <div id="joineddiv">
<label id="octocatlabel"  className={passedValues.theme +"header"} >The Octocat</label>
<label id="joind" className={passedValues.theme +"header"}  >Joined 25 Jan 2011</label>
</div>
<label id="blueoctocat">@octocat</label>
<p id="p" className={passedValues.theme +"header"} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
<div id="middlediv" className={passedValues.theme +"header"}>
<div id="followersdiv">
    <label className="reposlabel">Repos</label>
    <label className="reposlabel">Followers</label>
    <label className="reposlabel">Following</label>

</div>
<div id="numberdiv">
    <label   className="numberlabel">8</label>
    <label className="numberlabel">3938</label>
    <label className="numberlabel">9</label>

</div>

</div>


<div id="lastdiv">
<div className="footerdiv">
    <div className="minidiv">
    <img src="public/assets/Shape.png"></img>
    <label className="k">San Francisco</label>
    </div>
    <div className="minidiv">
    <img src="public/assets/002-url.svg"></img>
    <label className="k">https://github.blog</label>
    </div>
</div>


<div className="footerdiv">
    <div className="minidiv">
<img src="public/assets/004-twitter.svg"></img>
<label className="k">Not Available</label>
</div>
<div className="minidiv">
    <img src="public/assets/Shape (1).png"></img>
    <label className="k">@github</label>
    </div>
</div>
</div>









</div>
        </div>
    </div>
)
}
export default Searchresult