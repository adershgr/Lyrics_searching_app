import React from 'react'

const Searchbar =()=> {
    const styleObj={
        fontSize : 20 ,
        color : "black",
        textAlign : "center",
        display:"inline-flex",
        alignItems:"center"
    }
  return (
<div style={{ border: "1px solid blue", boxSizing:" border-box", padding:"20px", marginLeft:"200px", marginRight:"200px"}}>
   <div className="title">
   <div style={styleObj}>  
    <svg xmlns="http://www.w3.org/2000/svg" height="70" width="70" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 20 20">
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fillRule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
</svg> <br></br>
    <h1 >Search For A Song</h1>
</div>
   <p style={{marginBottom:"0.7rem"}}>Get the lyrics for any track</p>
    </div>
    <div className="d-grid gap-2 col-12 mx-auto  ">
    <input type="text" placeholder="search here..."></input>
    </div>
    <br></br>
    <div className="d-grid gap-2 col-12 mx-auto mb-3 ">
  <button className="btn btn-primary" type="button">Search Lyrics here</button>

</div>
    
</div>
    
  )
}

export default Searchbar