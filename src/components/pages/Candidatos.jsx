

const Candidatos = ({Candidato}) => {
  const id = Candidato.id
  const nombre = Candidato.nombre

  let urlDelete = `https://pv3r532kmb.execute-api.us-east-2.amazonaws.com/test/items/${id}`



const handleSubmit = (e) => {
  e.preventDefault();
    console.log('enviando formulario')
    fetch(urlDelete, {
      method: "DELETE",
      })
      .then(response => response.json())
      .then(data => {
      alert("Eliminado exitosamente.")
      window.location.reload()
      })
      .catch(e => {
      console.log("Ha ocurrido un error!", e)
      alert("Ha ocurrido un error!")
      })
    }

  return (
    <>
    <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg py-10 px-5 md:flex w-auto mb-8" action="">
     <label className=" block text-gray-700 font-bold text-2xl mb-3 md:w-full">Nombre: {nombre}</label>
     <div className="md:flex w-full ">
<a className="w-full md:mr-3" href={"/Candidatos/"+id} >
     <input 
    className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-lg hover:bg-indigo-700 cursor-pointer transition-all mt-4 md:mt-0 md:ml-3 text-center" defaultValue='Detalles' />
     </a >    
     <a className="w-full md:mr-5" href="">
     <button className=" bg-red-600 w-full p-3 text-white uppercase font-bold rounded-lg hover:bg-red-700 cursor-pointer transition-all mt-4 md:mt-0 md:ml-3" type="submit">Eliminar
      </button> 
    
     </a>
     </div> 
    </form>
    </>  
  )
}

export default Candidatos
