import React, { useState, useEffect } from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import { ChakraProvider, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import { TableContainer, Table, Thead, Tr, Th, Tbody, Tfoot, Td } from '@chakra-ui/react';
import styles from 'styled-components';
import { Box } from "@chakra-ui/react";

const Wrapper=styles.div`
width: 90%;

padding-left: 150px;
padding-right: 50px;
padding-bottom: 20px;
`
const Pacienti = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedDataTest, setSelectedDataTest] = useState(null);
  const [CNP, setCNP] = useState(null);
  const [pacienti, setPacienti] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dataPacient, setDataPacient] = useState([]);
  useEffect(() => {
    if (selectedRow) {
      // Make the request here using selectedRow.id or any unique property from selectedRow.
    }
  }, [selectedRow]);

  const handleSearch = (searchTerm, filter) => {
    console.log(`Searching for '${searchTerm}' with filter '${filter}'`);
    // Implement your search and filter logic here
  };

  const requestDataTest = async (date) => {
      await axios.post(`http://localhost:3000/rezultate/rezultateDataCnp`, {date}).then(rasp=>{
      return rasp;
    }).catch(err=>{alert("Eroare la obinerea datelor")});
  }

  const onOpenWithDataTest = () => {
    const rasp=requestDataTest({selectedDataTest, CNP});
    setDataPacient(rasp);
    onOpen();
  }

  const requestDate = async () => {
    const response = await axios.get("http://localhost:3000/pacienti/pacientiData_test");
    setPacienti(response.data);
  }

  useEffect(() => {
    requestDate();
  }, []);

  return (
    <Wrapper>
      <SearchBar onSearch={handleSearch} />
      <ChakraProvider>
        <TableContainer>
          <Table size='md'>
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
              {pacienti.map(row =>
                <Tr _hover={{ bg: "gray.200" }} key={row.Nume_Prenume} onClick={() => { setSelectedRow(row); setSelectedDataTest(row.data_test);setCNP(row.CNP); onOpenWithDataTest(); }}>
                  <Td>{row.Nume_Prenume}</Td>
                  <Td>{row.CNP}</Td>
                  <Td >{row.data_nastere}</Td>
                  <Td>{row.gen}</Td>
                  <Td>{row.data_test}</Td>
                </Tr>
              )}
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
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Datele pacientului</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {

              <TableContainer>
                <Table>
              <Thead>
                <Tr>
                  <Th>Nume test</Th>
                  <Th>rezultat</Th>
                  <Th>Interval de referință</Th>
                  <Th>Unitate de măsură</Th>
                </Tr>
              </Thead>
              </Table>
              </TableContainer>
              
              }
            </ModalBody>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </Wrapper>
  );
}

export default Pacienti;
