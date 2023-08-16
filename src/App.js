import { useState } from "react"

export default function App(){

    const [bilgi,bilgiGuncelle]=useState("")

    let deneme=()=>{alert("buton tıklandı")}

    const fonk=(e)=>{ bilgiGuncelle(e.target.value) }

    return(
        <>
          <input onChange={fonk} type="text"/>
        
          <button onClick={deneme}>Uyarı</button>
          <p>{bilgi.length>10? " 10 karakteri geçemez": ""}</p>
        </>
        
    
      )


}