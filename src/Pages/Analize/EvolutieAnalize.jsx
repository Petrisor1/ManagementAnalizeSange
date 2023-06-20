
import React,{useEffect, useRef, useState} from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';
import styled from 'styled-components';



const Titlu=styled.p`
width: 100%;
font-size: 30px;
font-style: bold;
color:  #385170; 
`
const Paragraf=styled.p`
width: 100%; 
font-size: 25px;
`

const ContinerParinte=styled.div`
width: 100%;
padding: 50px; 
padding-top: 0px;
height: 100%;
`
const getStatistici = async (data) => {
    const resp = await axios.post('http://localhost:3000/rezultate/rezultateNume_valoare', data);
    return resp.data;
}


const generateColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

const EvolutieAnalize=()=>{
    const [numeTest, setNumeTest] = useState([]);
    const CNP = localStorage.getItem('CNP');

    const vaerticalBarChart= useRef();

    useEffect(() => {
        const fetchStatistici = async () => {
            console.log(CNP);
            const rezultat = await getStatistici({ "CNP": CNP });
            setNumeTest(rezultat);
        }

        fetchStatistici();
    }, [CNP]);

    useEffect(() => {
        console.log(numeTest);

        
        let dateUnice = [];
        Object.values(numeTest).flat().forEach(({ data }) => {
            if (!dateUnice.includes(data)) {
                dateUnice.push(data);
            }
        });
        dateUnice.sort();

     
        let datasets = [];
        Object.keys(numeTest).forEach((nume_test) => {
            let dataset = {
                label: nume_test,
                data: [],
                backgroundColor: generateColor(), // function to generate a unique color
                borderColor: generateColor(),
                borderWidth: 1,
            };

            dateUnice.forEach((data_test) => {
                const valueObj = numeTest[nume_test].find((value) => value.data === data_test);
                dataset.data.push(valueObj ? parseFloat(valueObj.valoare) : null);
            });

            datasets.push(dataset);
        });

        const barChart = new Chart(vaerticalBarChart.current, {
            type: 'bar',
            data: {
                labels: dateUnice,
                datasets: datasets,
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Evolutia totală a testelor',
                    },
                },
            },
        });

        return () => {
            barChart.destroy();
        };

    }, [numeTest, vaerticalBarChart]);

    return(
        <ContinerParinte>
        <Titlu>Evoluția testelor </Titlu>
        <canvas ref={vaerticalBarChart}> </canvas>
        </ContinerParinte>
    )
}


export default EvolutieAnalize;
