import React, { useState } from "react";
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import { ChakraProvider } from "@chakra-ui/react";
//funcitie pentru inputuri (required)

  function validateRequired(value) {
    let error;
    if (!value) {
      error = 'Field is required';
    }
    return error;
  }
  ///
let fullData="";


////////Componenta
const AdaugaPacient = () => {
  const [file, setFile] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    axios.put("http://localhost:3000/rezultate/incarcaFisier", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((response) => {
        console.log(response.data);
        fullData=response.data
        // Handle the data returned from the server
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
      });
  };

  const onChange = (e) => {
    setFile(e.target.files[0]);
  };
  const [nume, setNume] = useState('');
  const [prenume, setPrenume] = useState('');
  const [cnp, setCnp] = useState('');
  const [dataNasterii, setDataNasterii] = useState('');
  const [dataAnalizelor, setDataAnalizelor] = useState('');
  const [email,setEmail]=useState('');
  const [gen, setGen]=useState('');

  const adaugaRezultate=(rezultat)=>{
    for(var i=0; i<rezultat.length; i++) {
     rezultat[i].CNP=`${cnp}`;
     rezultat[i].data_analiza=`${dataAnalizelor}`;
     rezultat[i].nume=`${nume}`;
     rezultat[i].prenume=`${prenume}`;
     rezultat[i].email_laborator=`${localStorage.getItem('email')}`;
     rezultat[i].gen=`${gen}`;
     rezultat[i].email=`${email}`;
     rezultat[i].data_nastere=`${dataNasterii}`;

    }
    console.log(rezultat);

    axios.post("http://localhost:3000/rezultate/incarcaRezultate" ,rezultat,
    {
      headers: {
       'Content-Type': 'application/json'
      }
    }).then(response =>alert(response.statusText)).catch(err =>alert("Eroare la incarcarea datelor"))
   }

  return (
   
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minH="100vh" >
       <ChakraProvider >
   <Formik
      initialValues={{
        nume: '',
        prenume: '',
        cnp: '',
        dataNasterii: '',
        dataAnalizelor: '',
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <Form onSubmit={onSubmit}>
          <Field name="nume" validate={validateRequired}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.nume && form.touched.nume}>
                <FormLabel htmlFor="nume">Nume</FormLabel>
                <Input {...field} id="nume" placeholder="Nume" value={nume}
            onChange={e => {form.setFieldValue('nume',e.target.value); setNume(e.target.value)}} />
                <FormErrorMessage>{form.errors.nume}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="prenume" validate={validateRequired}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.prenume && form.touched.prenume}>
                <FormLabel htmlFor="prenume">Prenume</FormLabel>
                <Input {...field} id="prenume" placeholder="Prenume" value={prenume}
            onChange={e => {form.setFieldValue('prenume',e.target.value); setPrenume(e.target.value)}} />
                <FormErrorMessage>{form.errors.prenume}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="gen" validate={validateRequired}>
    {({ field, form }) => (
        <FormControl isInvalid={form.errors.gen && form.touched.gen}>
            <FormLabel htmlFor="gen">Gen</FormLabel>
            <Select {...field} id="gen" placeholder="Selectează genul" 
                    value={gen} onChange={e => {form.setFieldValue('gen',e.target.value); setGen(e.target.value)}}>
                <option value="masculin">Masculin</option>
                <option value="feminin">Feminin</option>
            </Select>
            <FormErrorMessage>{form.errors.gen}</FormErrorMessage>
        </FormControl>
    )}
</Field>

          <Field name="email" validate={validateRequired}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.dataNasterii}>
                <FormLabel htmlFor="Email">Email</FormLabel>
                <Input {...field} id="email" placeholder="Email"  value={email}
            onChange={e => {form.setFieldValue('email',e.target.value); setEmail(e.target.value)}} />
                <FormErrorMessage>{form.errors.dataNasterii}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="cnp" validate={validateRequired}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.cnp && form.touched.cnp}>
                <FormLabel htmlFor="cnp">CNP</FormLabel>
                <Input {...field} id="cnp" placeholder="CNP" value={cnp}
            onChange={e => {form.setFieldValue('cnp',e.target.value); setCnp(e.target.value)}}/>
                <FormErrorMessage>{form.errors.cnp}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="dataNasterii" validate={validateRequired}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.dataNasterii && form.touched.dataNasterii}>
                <FormLabel htmlFor="dataNasterii">Data Nașterii</FormLabel>
                <Input {...field} id="dataNasterii" placeholder="Data Nașterii" type="date" value={dataNasterii}
            onChange={e => {form.setFieldValue('dataNasterii',e.target.value); setDataNasterii(e.target.value)}} />
                <FormErrorMessage>{form.errors.dataNasterii}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          

          <Field name="dataAnalizelor" validate={validateRequired}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.dataAnalizelor && form.touched.dataAnalizelor}>
                <FormLabel htmlFor="dataAnalizelor">Data efectuării analizelor</FormLabel>
                <Input {...field} id="dataAnalizelor" placeholder="Data efectuării analizelor" type="date" value={dataAnalizelor}
            onChange={e => {form.setFieldValue('dataAnalizelor',e.target.value); setDataAnalizelor(e.target.value)}} />
                <FormErrorMessage>{form.errors.dataAnalizelor}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
        
          <FormControl >
          <Input type="file" accept=".pdf" onChange={onChange} />
          <Button mt={4}  color="black" isLoading={props.isSubmitting} type="submit">
            Incarca teste
          </Button>
          </FormControl>
          {/* <button type="submit">Submit</button>  */}
         <Button mt={6} color="black" onClick={()=>adaugaRezultate(fullData)}>Adaugă pacient</Button> 
        </Form>
              )}
              </Formik>
              </ChakraProvider>
              </Box>
             
  
            )
       
     
  
};

export default AdaugaPacient;