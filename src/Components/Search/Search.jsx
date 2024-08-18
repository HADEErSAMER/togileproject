import "./Search.css"
import { ThemeContext } from "../../App"
import { useContext, useEffect, useState } from "react"
function Search(){
    const[formdata,setformdata]=useState(
[{
    "login": "HADEErSAMER",
    "id": 165737104,
    "node_id": "U_kgDOCeDykA",
    "avatar_url": "https://avatars.githubusercontent.com/u/165737104?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/HADEErSAMER",
    "html_url": "https://github.com/HADEErSAMER",
    "followers_url": "https://api.github.com/users/HADEErSAMER/followers",
    "following_url": "https://api.github.com/users/HADEErSAMER/following{/other_user}",
    "gists_url": "https://api.github.com/users/HADEErSAMER/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/HADEErSAMER/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/HADEErSAMER/subscriptions",
    "organizations_url": "https://api.github.com/users/HADEErSAMER/orgs",
    "repos_url": "https://api.github.com/users/HADEErSAMER/repos",
    "events_url": "https://api.github.com/users/HADEErSAMER/events{/privacy}",
    "received_events_url": "https://api.github.com/users/HADEErSAMER/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 9,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2024-04-02T00:46:12Z",
    "updated_at": "2024-08-17T21:34:24Z"
}]
       
    )
      
        
     
    const passedValues=useContext(ThemeContext)


    function onhandlsubmit(event){
        useEffect (()=>{
            function githubusers(){
                fetch ("https://api.github.com/users/HADEErSAMER")
                .then((response)=>response.json())
                .then((finalresult)=>setformdata(finalresult))
            }
            githubusers()
    
        },[])
        event.preventDefault()

    }


    function onhandlchange(event){
       console.log(event.target.value)
       console.log(event.target.name)

    } 
return(
    
    <form onSubmit={onhandlsubmit} id="searchdiv" className={passedValues.theme +"header"}>
        
                
                <div id="searchside">

                <img src="/assets/Shape 2.png"></img>
                <input onChange={onhandlchange} placeholder="Search GitHub username…" id="inputsearch" className={passedValues.theme +"header"} type="search" ></input>
                </div>
                <button id="btnsearch" type="submit">Search</button>
                
            
      
      
    </form>
)
}
export default Search