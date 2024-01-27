import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'

const Candidato = () => {
  const [nombre, setNombre] = useState('')
 const [fecha, setFecha] = useState('')
 const [java, setJava] = useState(false)
 const [microservicios, setMicroservicios] = useState(false)
 const [elastic, setElastic] = useState(false)



  const {id} = useParams();
  console.log(id)
  
  let url = `https://pv3r532kmb.execute-api.us-east-2.amazonaws.com/test/items/${id}`
  const[data,setData] = useState([])
  useEffect(()=>{
   fetch(url).then(response => response.json())
   .then(data => {
    setNombre(data.nombre)
    setFecha(data.fecha)
    setJava(data.java)
    setMicroservicios(data.microservicios)
    setElastic(data.elastic)
   })
  .catch(e => console.log("Ha ocurrido un error!", e))
  },[])
  
 


  
const handleCheckJava =()=>setJava(!java)
const handleCheckMicroservicios =()=>setMicroservicios(!microservicios)
const handleCheckElastic =()=>setElastic(!elastic)


 const handleSubmit = (e) => {
  e.preventDefault();
  if(nombre, fecha){
    console.log('enviando formulario')

     let urlPUT = 'https://pv3r532kmb.execute-api.us-east-2.amazonaws.com/test/items'
    fetch(urlPUT,{
      method: 'PUT',
      corse: 'same-origin',
      body: JSON.stringify({
        id: id,
        nombre: nombre,
        fecha: fecha,
        java: java,
        microservicios: microservicios,
        elastic: elastic
      })
     }).then(response => response.json())
     .then(data => {console.log(data)
      window.location.href = '/';
    alert("Actualizado Correctamente")})
    .catch(e => alert("Ha ocurrido un error!", e))


  }
  else{
    alert('llenar todo los campos vacios')
  }
 }

  return (
    <>
    <form onSubmit={handleSubmit} action="" className=" bg-white shadow-lg rounded-lg py-20 px-5 font-bold text-2xl text-left ">

        <label className="block text-gray-700 p-2 mb-1">Nombre del Candidato:</label>
        <input className="block w-full border-2 p-2 rounded-lg placeholde-gray-500" placeholder="Nombre:" type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} 
        />
        <label className="block text-gray-700 p-2">Fecha:</label>
        <input className="block p-2 mb-2 text-gray-500" type="date" id="fecha" 
        value={fecha} onChange={(e) => setFecha(e.target.value)} />
        <div className=" w-max gap-4 m-4">
        
         <div>
          <input
          className="  text-indigo-500 focus:ring-indigo-700 m-3 p-3 peer relative left-0 h-5 w-5 rounded-full shrink-0 outline-none cursor-pointer"
          type="checkbox" name="" id="java" value={java} onChange={handleCheckJava} checked={java} />
          <label className=" text-gray-700 text-xl " htmlFor="">Java</label>
         </div>
         <div>
          <input
          className="  text-indigo-500 focus:ring-indigo-700 m-3 p-3 peer relative left-0 h-5 w-5 rounded-full shrink-0 outline-none cursor-pointer"
          type="checkbox" id="microservicios" value={microservicios} onChange={handleCheckMicroservicios} checked={microservicios}  />
          <label className=" text-gray-700 text-xl " htmlFor="">Microservicios</label>
         </div>
         <div>
          <input
          className="  text-indigo-500 focus:ring-indigo-700 m-3 p-3 peer relative left-0 h-5 w-5 rounded-full shrink-0 outline-none cursor-pointer"
          type="checkbox" name="" id="" value={elastic} onChange={handleCheckElastic} checked={elastic} />
          <label className=" text-gray-700 text-xl " htmlFor="">Elastic</label>
         </div>
    </div>
    
    <div className="">
    
    <a href="/">
    <button className=" bg-green-600 w-full p-3 block text-white uppercase font-bold rounded-lg hover:bg-green-700 cursor-pointer transition-all text-xl text-center ">Editar
    </button>
   </a>
    <a className=" bg-indigo-500 w-full p-3 block text-white uppercase font-bold rounded-lg hover:bg-indigo-700 cursor-pointer transition-all text-xl text-center mt-5 md:w-auto"  href='/'>regresar
    </a>  
    </div>
    
    </form>
    
    
    </>
  )
}

export default Candidato
