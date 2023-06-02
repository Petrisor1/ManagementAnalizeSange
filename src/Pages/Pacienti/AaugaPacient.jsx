import React, { useState } from 'react';
import styled from 'styled-components';

import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/build/pdf';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

GlobalWorkerOptions.workerSrc = pdfjsWorker;

const FormContainer = styled.div`
display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 600px;
    margin: 0px auto;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
    border-radius: 4px;
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const FormInput = styled.input`
padding: 10px;
border: 1px solid #ccc;
border-radius: 4px;
font-size: 16px;
`;

const FormLabel = styled.label`
font-size: 18px;
margin-bottom: 5px;
`;

const FormButton = styled.button`
padding: 10px;
font-size: 16px;
border: 1px solid #ccc;
border-radius: 4px;
background-color: #3c4858;
color: white;
cursor: pointer;
margin-top: 20px;
&:hover {
  background-color: #4b6584;
}
`;

const AddPatient = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [sex, setSex] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [file, setFile] = useState(null);
  const [email,setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with values:', { firstName, lastName, dob, sex, contactNumber, address, file });
    // Implement your form submission logic here
  };

  const [text, setText] = useState('');

  const extractTextFromPdf = async (pdfFile) => {
    const reader = new FileReader();
    reader.onload = async (event) => {
        const pdf = await getDocument({ data: event.target.result }).promise;
        let extractedText = '';

        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            extractedText += content.items.map(item => item.str).join(' ');
        }

        setText(extractedText);
        var rez= extractTextBetweenStars(extractedText);
        for(var i=0;i<rez.length;i++) {
          console.log("\n"+ rez[i])
          console.log("\n");
          console.log("\n");
          console.log("\n");
          console.log("\n");

        }
        //console.log('Extracted text:', extractedText);
    };
    reader.readAsArrayBuffer(pdfFile);
};
function extractTextBetweenStars(input) {
  let splitInput = input.split('*');
  let result = [];

  for(let i = 1; i < splitInput.length; i += 2) {
      result.push(splitInput[i]);
  }

  return result;
}
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        console.log('Starting to extract text...');
        extractTextFromPdf(file);
       
        console.log('Finished extracting text');
    }
};

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
        <FormLabel>Nume:</FormLabel>
        <FormInput
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
        />
    </FormGroup>
    <FormGroup>
        <FormLabel>Prenume:</FormLabel>
        <FormInput
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
        />
 </FormGroup>
 <FormGroup> 

        <FormLabel>Email:</FormLabel>
        <FormInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
</FormGroup>
        <FormLabel>Data de Nastere:</FormLabel>
        <FormInput
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
 <FormGroup>
        <FormLabel>Sex:</FormLabel>
        <FormInput
          type="text"
          value={sex}
          onChange={(e) => setSex(e.target.value)}
          required
        />
</FormGroup>
<FormGroup> 

        <FormLabel>Numar de contact:</FormLabel>
        <FormInput
          type="tel"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
        />
</FormGroup>
<FormGroup> 
        <FormLabel>Adresa:</FormLabel>
        <FormInput
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
</FormGroup>
<FormGroup>

        <FormLabel>Incarca Test  PDF (optional):</FormLabel>
        {/* <FormInput type="file" accept="application/pdf" onChange={handleFileChange} required /> */}
        

        <FormButton type="submit">AdaugaPacient</FormButton>
        </FormGroup>
        <div>
            <input type="file" accept=".pdf" onChange={handleFileChange} />
            
        </div>
      </form>
      <p>{text}</p>
    </FormContainer>
  );
};

export default AddPatient;
