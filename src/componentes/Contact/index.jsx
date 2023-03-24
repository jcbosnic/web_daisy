import React, { useState, useRef } from "react";
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Menu from "../Menu";
import { Title } from "../helperStyle"

import {
  ContainerForm,
  Form,
  Label,
  Input,
  Button,
  ErrorMessage,
  TextArea
} from "./styles";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = d => console.log(d, 'entramos');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_i7xn5jd', 'template_eke7oki', form.current, 'MRmz5szHvur34n9vg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <ContainerForm>
        <Title>Asesórate</Title>

        <Form ref={form} onSubmit={sendEmail}>
          <Label>Nombre</Label>
          <Input { ...register ('nombre', {required: true})} type="text" name="nombre" />
          {errors.name && <ErrorMessage>debes ingresar tu nombre</ErrorMessage>}
          <Label>Teléfono</Label>
          <Input {...register('telefono', {required: true})} name="telefono"  />
          {errors.phone && <ErrorMessage>debes ingresar un teléfono</ErrorMessage>}
          <Label>Correo</Label>
          <Input {...register('correo', {required: true})} type="email"  name="correo" />
          {errors.email && <ErrorMessage>debes ingresar un correo</ErrorMessage>}
          <Label>¿En qué te puedo ayudar?</Label>
          <TextArea {...register('mensaje', {required: true})} name="mensaje"  />
          {errors.message && <ErrorMessage>debes ingresar una mensaje</ErrorMessage>}
          <Button value="Send">enviar</Button>
        </Form>
        <Menu />
      </ContainerForm>
    </div>
  );
};

export default Contact;
