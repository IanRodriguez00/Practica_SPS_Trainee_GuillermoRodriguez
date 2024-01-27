

const Candidatos = ({Candidato}) => {
  const id = Candidato.id
  const nombre = Candidato.nombre
  return (
    <>
    <form className="bg-white shadow-xl rounded-lg py-10 px-5 md:flex w-auto mb-8" action="">
     <label className=" block text-gray-700 font-bold text-2xl mb-3 md:w-full">Nombre: {nombre}</label>
     <div className="md:flex w-full ">
<a className="w-full md:mr-3" href={"/Candidatos/"+id} >
     <input 
    className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-lg hover:bg-indigo-700 cursor-pointer transition-all mt-4 md:mt-0 md:ml-3 text-center " value="Detalles" />
     </a >    
     <a className="w-full md:mr-5" href="">
     <input 
    className=" bg-red-600 w-full p-3 text-white uppercase font-bold rounded-lg hover:bg-red-700 cursor-pointer transition-all mt-4 md:mt-0 md:ml-3" type="submit" value="Eliminar" />
     </a>
     </div> 
    </form>
    </>  
  )
}

export default Candidatos
