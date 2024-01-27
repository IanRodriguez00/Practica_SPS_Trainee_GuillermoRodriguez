
import { useEffect, useState } from "react";
import Candidatos from "./Candidatos"





//import { useEffect, useState } from "react"

const Index = () => {
  
  let url = 'https://pv3r532kmb.execute-api.us-east-2.amazonaws.com/test/items'
  const[data,setData] = useState([])
  useEffect(()=>{
   fetch(url).then(response => response.json())
   .then(data => setData(data))
  .catch(e => console.e("Ha ocurrido un error!", e))
  },[])

  console.log(data)
  return (
    <div className=" h-screen w-screen overflow-y-scroll">
<div className="m-10">
    {data.map((Candidato) => (
      // eslint-disable-next-line react/jsx-key
      <Candidatos Candidato={Candidato}/>
     //console.log(Candidato.nombre)
      ))}
      

     
    </div>

    </div>
    
  )
}

export default Index
