import { Button, Form, FormGroup, FormLabel } from "react-bootstrap"
import { useForm } from "../../../hooks/useForm"
import { FC } from "react";

interface IPropsFormProduct{
    handleAddProduct: Function
}


export const FormProduct : FC<IPropsFormProduct>= ({ handleAddProduct }) => {

const {handleChange, values, resetForm} = useForm(
    {
        nombre: '',
        imagen: '', 
        precio: 0
    }
);

console.log(values);

const handleSubmitForm = ()=>{
    handleAddProduct(values);
    resetForm();
}


  return (
    <Form className = "p-4 border rounded m-3">
        <FormGroup controlId="formNombre">
        <FormLabel>Nombre</FormLabel>
        <Form.Control
        type= "text"
        name = "nombre"
        placeholder="Ingrese nombre del producto" 
        value = {values.nombre}
        onChange={handleChange}/>
        </FormGroup>

        <FormGroup controlId="formNombre">
        <FormLabel>Imagen</FormLabel>
        <Form.Control
        type= "text"
        name = "imagen"
        placeholder="Ingrese imagen del producto" 
        value = {values.imagen}
        onChange={handleChange}/>
        </FormGroup>

        <FormGroup controlId="formNombre">
        <FormLabel>Precio</FormLabel>
        <Form.Control
        type= "number"
        name = "precio"
        placeholder="Ingrese precio del producto" 
        value = {values.precio}
        onChange={handleChange}/>
        </FormGroup>

        <div className="d-flex justify-content-center mt-4">
            <Button onClick={handleSubmitForm} variant= "primary" > Agregar Producto </Button>
        </div>

    </Form>
  )
}
