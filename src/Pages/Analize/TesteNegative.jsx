import React from "react";
import axios from "axios";
import { Select } from "@chakra-ui/react";
import {useState, useEffect} from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";


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

    return (
        <div>
        <Select placeholder="Selectează data" onChange={(e) => setSelectedDate(e.target.value)}>
    {Array.isArray(dates) && dates.map((date, index) => (
        <option key={index} value={date.data_test}>
            {date.data_test}
        </option>
    ))}
    </Select>
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
      </div>
    );
}

export default TesteNegative;