import { useForm } from "../../hooks/useForm"

export const FormComponent = () => {
    const {values, handleChange, resetForm} = useForm({
        email: "",
        nombre: "",
        edad: 0,
    });

    const{email,nombre,edad} = values;
    
    const handleSubmitForm = ()=>{
        console.log(values)
    }

    const handleResetForm = ()=>{
        resetForm();
    }

  return (
    <div>
        <div>
            <h2>Formulario</h2>
        </div>

        <div style = {{display : "flex", flexDirection : 'column' , gap : '2vh'}}> 
            <input name='email' value={email} onChange = {handleChange} type= 'email' placeholder="ejemplo@ejemplo.com"/>
            <input name='nombre' value={nombre} onChange = {handleChange} type = 'text' placeholder = "nombre"/>
            <input name='edad' value={edad} onChange = {handleChange} type = 'number' placeholder = "Ingrese edad"/>

        </div>
        <div>
            <button onClick = {handleSubmitForm}>Enviar</button>
            <button onClick = {handleResetForm}>Resetear</button>
        </div>

    </div>
  )
}
