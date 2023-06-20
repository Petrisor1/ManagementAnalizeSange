import React from "react";
import axios from "axios";
import { Select } from "@chakra-ui/react";
import {useState, useEffect} from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import genereazaRecomandari from "./recomandari.js";
import styled from "styled-components";

const Titlu=styled.p`
width: 100%;
font-size: 30px;
font-style: bold;
color:  #385170; 
`
const SubTitlu=styled.p`
font-size: 20px;
color: #005689;
`

const Paragraf=styled.p`
width: 100%; 
font-size: 17px;
font-style: italic;
`
const ParagrafCopil=styled.p`
font-size: 15px;

padding-left: 10px
`
const ContinerParinte=styled.div`
width: 100%;
padding: 50px; 
padding-top: 0px;
height: 100%;
display: flex;
justify-content: center;

flex-direction: column;
`
const Wrap=styled.div`
width: 100%;

`
const WrapParinte=styled.div`
width: 50%;
display: flex;
flex-direction: row;
align-items: center;
`
const Atentionare=styled.p`
color: #c24d2c;
font-size: 25px;
`
const AtentionareCopil=styled.p`
color: #c24d2c;
font-size: 20px;
padding-left: 10px;
font-style: italic;
`
const TesteNegative=()=>{
    let CNP=localStorage.getItem('CNP');
    const [selectedDate, setSelectedDate] = useState('');
    const [dates,setDates]=useState([]); 
    const [rezultate, setRezultate]=useState([]);

    const getRezultateNegative=async(data)=>{
        await axios.post('http://localhost:3000/teste/rezultateNegative',data)
        .then(rez=> {setRezultate(rez.data)}).catch(err=>{alert(err)});
    }
    const getDataAnalize=async(data)=>{
        await axios.post('http://localhost:3000/rezultate/dataAnalize',data).then(rez=>
        setDates(rez.data)
        ).catch(err=> alert(err));
    }
    useEffect(() => {
        getDataAnalize({CNP:CNP});
    }, []);

    useEffect(() => {
        if (selectedDate) {
            
            getRezultateNegative({CNP:CNP,data_test:selectedDate});
        }
    }, [selectedDate]);

    const preluareRecomandari = () => {
        return rezultate.map(rez => {
          return (
            <div key={rez.nume_test}>
              <SubTitlu>{rez.nume_test}</SubTitlu>
              <ParagrafCopil>{genereazaRecomandari(rez)}</ParagrafCopil>
            </div>
          );
        });
      };
    return (
        <ContinerParinte>
          <Titlu>Rezultate ce nu se încadrează în intervalul de siguranță și recomandări</Titlu>
           <br/>
          <WrapParinte>
          <Wrap>
            <Paragraf>
            Selectați data corespunzătoare efectuării analizelor 
            </Paragraf>
          </Wrap>
          <Wrap>
        <Select placeholder="Selectează data" onChange={(e) => setSelectedDate(e.target.value)}>
    {Array.isArray(dates) && dates.map((date, index) => (
        <option key={index} value={date.data_test}>
            {date.data_test}
        </option>
    ))}
    </Select>
    </Wrap>
    </WrapParinte>
     <br/>
     <Titlu>Rezultate:</Titlu>
     <br/>
       {rezultate && (
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nume test</Th>
              <Th>Valoare rezultat</Th>
              <Th>Valaore minima</Th>
              <Th>Valoare valoare maxima</Th>              
            </Tr>
          </Thead>
          <Tbody>
            {rezultate.map((rezultat, index) => (
              <Tr key={index}>
                <Td>{rezultat.nume_test}</Td>
                 <Td>{rezultat.valoare_rezultat}</Td>
                <Td>{rezultat.valoare_minima}</Td>
                <Td>{rezultat.valoare_maxima}</Td>
              </Tr>
            ))}

          </Tbody>
        </Table>
      )}
      <br/>
      <Titlu>Informații si recomandări:</Titlu>
      {preluareRecomandari()}
      <br/>
      <Atentionare>!! Atentie !!</Atentionare>
      <AtentionareCopil >Este important de reținut că acestea sunt doar sugestii generale bazate pe rezultatele analizelor dvs. și nu înlocuiesc sfatul medical personalizat. Pentru o înțelegere mai aprofundată a stării dvs. de sănătate și pentru a începe un plan de tratament adecvat, este esențial să consultați un profesionist medical.</AtentionareCopil>
      <AtentionareCopil>De asemenea, vă recomandăm să nu începeți sau să nu schimbați niciun tratament pe baza acestor informații fără a discuta mai întâi cu medicul dvs. Acesta cunoaște cel mai bine contextul dvs. medical și poate lua decizii informate privind îngrijirea dvs.
     </AtentionareCopil>
      <br/>
      <SubTitlu>Sănătatea dvs. este prioritatea noastră și vă încurajăm să acordați cea mai mare importanță acestor aspecte.</SubTitlu>
      </ContinerParinte>
    );
}

export default TesteNegative;