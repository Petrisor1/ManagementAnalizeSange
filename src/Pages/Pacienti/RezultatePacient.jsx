import React, { useState, useEffect } from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import {
  ChakraProvider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Tfoot,
  Td,
} from "@chakra-ui/react";
import styles from "styled-components";
import { Box } from "@chakra-ui/react";

const Wrapper = styles.div`
width: 90%;

padding-left: 150px;
padding-right: 50px;
padding-bottom: 20px;
`;

const ContainerTitluTabel=styles.div`
width: 100%;
background-color: #385170;
display: flex;
justify-content: center;

`
const TitluTabel= styles.div`
fontSize= 20px;
color: white;
`
const RezultatePacienti = () => {
  
  const [selectedRow, setSelectedRow] = useState(null);
  const [data_test, setDataTest] = useState(null);
  const [CNP, setCNP] = useState(null);
  const [pacienti, setPacienti] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dataPacient, setDataPacient] = useState([]);
  const [filter, setFilter] = useState("");
  const [allPacienti, setAllPacienti] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };

  useEffect(() => {
    requestDate();
  }, []);

  useEffect(() => {
    if (CNP && data_test) {
      onOpenWithDataTest();
    }
  }, [CNP, data_test]);

  // ...restul codului...

  const filteredPacienti = pacienti.filter(pacient => 
    pacient.Nume_Prenume.toLowerCase().includes(searchTerm.toLowerCase()) || 
    pacient.CNP.toString().includes(searchTerm)
  );
  
 

  const requestDataTest = async (date) => {
    console.log(date);
    await axios
      .post(`http://localhost:3000/rezultate/rezultateDataCnp`, date)
      .then((rasp) => {
        setDataPacient(rasp.data);
      })
      .catch((err) => {
        alert("Eroare la obinerea datelor");
      });
  };

  const onOpenWithDataTest = async () => {
    await requestDataTest({ data_test, CNP });
    console.log(dataPacient);
    onOpen();
  };

  const requestDate = async () => {
    const response = await axios.post(
      "http://localhost:3000/pacienti/analizePacient",{CNP:`${localStorage.getItem('CNP')}`}
    );
    setPacienti(response.data);
  };

  
  

  useEffect(() => {
    requestDate();
  }, []);

  useEffect(() => {
    if (CNP && data_test) {
      onOpenWithDataTest();
    }
  }, [CNP, data_test]);
  const handleRowClick = async (row) => {
  setSelectedRow(row);
  setCNP(row.CNP);
  setDataTest(row.data_test);
};
const hemato=[];
const bio=[];
const imuno=[];
const urina=[];
const vsh=[];
 const tipuriTeste=()=>{
  dataPacient.map(data=>{
    if(data.tip_nume=="HEMATOLOGIE"){
      hemato.push(data);
    }
    else if(data.tip_nume=="BIOCHIMIE"){
      bio.push(data);
    }
    else if(data.tip_nume=="IMUNOLOGIE SI SEROLOGIE")
    {
      imuno.push(data);
    }
    else if(data.tip_nume=="URINA"){
      urina.push(data);
    }
    else if(data.tip_nume=="VSH"){
      vsh.push(data);
    }
  })
 }

 const formatAnalize=()=>{
  let tables=[];
  if(hemato.length!=0){
    tables.push(<TableContainer>
      <ContainerTitluTabel>
      <TitluTabel style={{fontSize:"20px" ,fontColor:"white"}}>HEMATOLOGIE</TitluTabel>  
      </ContainerTitluTabel>     
       <Table>
         <Thead>
           <Tr>
             <Th>Nume test</Th>
             <Th>Valoare rezultat</Th>
             <Th>Interval de referință</Th>
             <Th>Descriere test</Th>
             <Th>Unitate de măsură</Th>
           </Tr>
         </Thead>
         <Tbody>
           {hemato.map((row) => (
             <Tr key={row.nume_test}>
               <Td>{row.nume_test}</Td>
               <Td>{row.valoare_rezultat}</Td>
               <Td>
                 {"[" +
                   row.valoare_minima +
                   " - " +
                   row.valoare_maxima +
                   "]"}
               </Td>
               <Td>{row.descriere_test}</Td>
               <Td>{row.unitate}</Td>
             </Tr>
           ))}
         </Tbody>
       </Table>
     </TableContainer>);
    
  }
  if(bio.length !=0){
    tables.push(
    <TableContainer>
      <ContainerTitluTabel>
      <TitluTabel style={{fontSize:"20px",fontColor:"white" }} >BIOCHIMIE</TitluTabel>  
      </ContainerTitluTabel>     
       <Table>
         <Thead>
           <Tr>
             <Th>Nume test</Th>
             <Th>Valoare rezultat</Th>
             <Th>Interval de referință</Th>
             <Th>Descriere test</Th>
             <Th>Unitate de măsură</Th>
           </Tr>
         </Thead>
         <Tbody>
           {bio.map((row) => (
             <Tr key={row.nume_test}>
               <Td>{row.nume_test}</Td>
               <Td>{row.valoare_rezultat}</Td>
               <Td>
                 {"[" +
                   row.valoare_minima +
                   " - " +
                   row.valoare_maxima +
                   "]"}
               </Td>
               <Td>{row.descriere_test}</Td>
               <Td>{row.unitate}</Td>
             </Tr>
           ))}
         </Tbody>
       </Table>
     </TableContainer>);
    
  }
  if(urina.length !=0)
  { tables.push(
  <TableContainer>
    <ContainerTitluTabel>
    <TitluTabel style={{fontSize:"20px",fontColor:"white" }}>URINA</TitluTabel>    
    </ContainerTitluTabel>   
     <Table>
       <Thead>
         <Tr>
           <Th>Nume test</Th>
           <Th>Valoare rezultat</Th>
           <Th>Interval de referință</Th>
           <Th>Descriere test</Th>
           <Th>Unitate de măsură</Th>
         </Tr>
       </Thead>
       <Tbody>
         {urina.map((row) => (
           <Tr key={row.nume_test}>
             <Td>{row.nume_test}</Td>
             <Td>{row.valoare_rezultat}</Td>
             <Td>
               {"[" +
                 row.valoare_minima +
                 " - " +
                 row.valoare_maxima +
                 "]"}
             </Td>
             <Td>{row.descriere_test}</Td>
             <Td>{row.unitate}</Td>
           </Tr>
         ))}
       </Tbody>
     </Table>
   </TableContainer>)
    
  }
  if(imuno.length !=0){
    tables.push(<TableContainer>
      <ContainerTitluTabel>
      <TitluTabel style={{fontSize:"20px",fontColor:"white" }}>IMUNOLOGIE SI SEROLOGIE</TitluTabel>       
      </ContainerTitluTabel>
       <Table>
         <Thead>
           <Tr>
             <Th>Nume test</Th>
             <Th>Valoare rezultat</Th>
             <Th>Interval de referință</Th>
             <Th>Descriere test</Th>
             <Th>Unitate de măsură</Th>
           </Tr>
         </Thead>
         <Tbody>
           {imuno.map((row) => (
             <Tr key={row.nume_test}>
               <Td>{row.nume_test}</Td>
               <Td>{row.valoare_rezultat}</Td>
               <Td>
                 {"[" +
                   row.valoare_minima +
                   " - " +
                   row.valoare_maxima +
                   "]"}
               </Td>
               <Td>{row.descriere_test}</Td>
               <Td>{row.unitate}</Td>
             </Tr>
           ))}
         </Tbody>
       </Table>
     </TableContainer>)
  }
  if(vsh.length !=0)
  {
  tables.push( <TableContainer>
    <ContainerTitluTabel>
    <TitluTabel style={{fontSize:"20px",fontColor:"white" }}>VSH</TitluTabel>
    </ContainerTitluTabel>
          
     <Table>
       <Thead>
         <Tr>
           <Th>Nume test</Th>
           <Th>Valoare rezultat</Th>
           <Th>Interval de referință</Th>
           <Th>Descriere test</Th>
           <Th>Unitate de măsură</Th>
         </Tr>
       </Thead>
       <Tbody>
         {vsh.map((row) => (
           <Tr key={row.nume_test}>
             <Td>{row.nume_test}</Td>
             <Td>{row.valoare_rezultat}</Td>
             <Td>
               {"[" +
                 row.valoare_minima +
                 " - " +
                 row.valoare_maxima +
                 "]"}
             </Td>
             <Td>{row.descriere_test}</Td>
             <Td>{row.unitate}</Td>
           </Tr>
         ))}
       </Tbody>
     </Table>
   </TableContainer>)
   
  }
  return tables;
 }
  return (
    <Wrapper>
      {/* <SearchBar onSearch={handleSearch} /> */}
     
      <ChakraProvider>
        <TableContainer>
          <Table size="md">
            <Thead>
              <Tr>
                <Th>Nume complet</Th>
                <Th>CNP</Th>
                <Th>Data nastere</Th>
                <Th>gen</Th>
                <Th>Data analiza</Th>
              </Tr>
            </Thead>
            <Tbody>
              
              {filteredPacienti.map((row) => (
                <Tr
                
                  _hover={{ bg: "gray.200" }}
                  key={row.CNP}
                  onClick={() =>  { handleRowClick(row) }}
                >
                  <Td>{row.Nume_Prenume}</Td>
                  <Td>{row.CNP}</Td>
                  <Td>{row.data_nastere}</Td>
                  <Td>{row.gen}</Td>
                  <Td>{row.data_test}</Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Nume complet</Th>
                <Th>CNP</Th>
                <Th>Data nastere</Th>
                <Th>gen</Th>
                <Th>Data analiza</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
        <Modal isOpen={isOpen} onClose={onClose}  >
          <ModalOverlay />
          
          <ModalContent  style={{ maxWidth: '90%' }}>
            <ModalHeader>Datele pacientului</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <TableContainer>
                
                {/* <Table>
                  <Thead>
                    <Tr>
                      <Th>Nume test</Th>
                      <Th>Valoare rezultat</Th>
                      <Th>Interval de referință</Th>
                      <Th>Descriere test</Th>
                      <Th>Unitate de măsură</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {dataPacient.map((row) => (
                      <Tr key={row.nume_test}>
                        <Td>{row.nume_test}</Td>
                        <Td>{row.valoare_rezultat}</Td>
                        <Td>
                          {"[" +
                            row.valoare_minima +
                            " - " +
                            row.valoare_maxima +
                            "]"}
                        </Td>
                        <Td>{row.descriere_test}</Td>
                        <Td>{row.unitate}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table> */}
                {tipuriTeste()}
               { formatAnalize()}
              </TableContainer>
            </ModalBody>
            
          </ModalContent>
          
        </Modal>
      </ChakraProvider>
    </Wrapper>
  );
};

export default RezultatePacienti;
