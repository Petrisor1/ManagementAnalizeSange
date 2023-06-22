import React from 'react';
import {useState, useEffect,useRef} from 'react';
import { Select } from "@chakra-ui/react";
import axios from 'axios';
import { Chart } from 'chart.js/auto';
import moment from 'moment';
import 'chartjs-adapter-moment';
import styled from 'styled-components';


const Continer=styled.div`
width: 50%;
height: 50%;
display: flex;
flow-direction: row;
`
const Titlu=styled.p`
width: 100%;
font-size: 30px;
font-style: bold;
color:  #385170; 
`
const Paragraf=styled.p`
width: 100%; 
font-size: 25px;
font-style: italic;
`
const ContinerParinte=styled.div`
width: 100%;
padding: 50px; 
padding-top: 0px;
height: 100%;

`

const Statistici =()=>{
    const [tipTest, setTipTest]=useState([]);
    const [date, setDate]=useState([]);
    const [hasFetchedTipTest, setHasFetchedTipTest] = useState(false);
    const [rezultate,setRezultate]=useState([]);
    const [CNP,setCNP]=useState('');
    const [teste20, setTeste20]=useState([]);
    const [teste100,setTeste100]=useState([]);
    const [teste400,setTeste400]=useState([]);
    const [teste2000,setTeste2000]=useState([]);
    // const [teste]
    const chartInstanceRef = useRef(null);
    const chartRef = useRef(null);
    const chartRef2 = useRef(null);
    const chartRef3 = useRef(null);
    const teste20Temp = {};
    const teste100Temp = {};
    const teste400Temp = {};
    const teste2000Temp = {};

    const transformData = (data) => {
        return data.reduce((acc, curr) => {
          if (!acc[curr.nume_test]) {
            acc[curr.nume_test] = [];
          }
          acc[curr.nume_test].push({
            valoare_rezultat: curr.valoare_rezultat,
            data_test: curr.data_test,
          });
          return acc;
        }, {});
      };

      function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    const getTipTest=async(data)=>{
    await axios.get("http://localhost:3000/tipuri_teste/toate_tipuri_teste",data)
     .then(resp=>{ setDate(resp.data) }).catch(err=>{alert(err)});
    }


    const getDateTipTest = async (data) => {
        const response = await axios.post("http://localhost:3000/rezultate/rezultateTipTest", data);
       // console.log(response.data);
        return response.data;
      };
    useEffect(()=>{
        setCNP(localStorage.getItem('CNP'));
    },[])
    useEffect(() => {
        if (!hasFetchedTipTest) {
          getTipTest();
          setHasFetchedTipTest(true);
        }
      }, [hasFetchedTipTest]);

   useEffect(()=>{
  if(tipTest!==''){
    getDateTipTest({CNP:CNP,tip_nume:tipTest}).then(data => {
      const transformedData = transformData(data);
       Object.keys(transformedData).forEach((nume_test) => {
                transformedData[nume_test].forEach((rezultat) => {
                    if (parseFloat(rezultat.valoare_rezultat) <= 20) {
                        if (!teste20Temp[nume_test]) teste20Temp[nume_test] = [];
                        teste20Temp[nume_test].push(rezultat);
                    } else if (
                        parseFloat(rezultat.valoare_rezultat) > 20 &&
                        parseFloat(rezultat.valoare_rezultat) < 100
                    ) {
                        if (!teste100Temp[nume_test]) teste100Temp[nume_test] = [];
                        teste100Temp[nume_test].push(rezultat);
                    } else if (
                        parseFloat(rezultat.valoare_rezultat) > 100 &&
                        parseFloat(rezultat.valoare_rezultat) < 400
                    ) {
                        if (!teste400Temp[nume_test]) teste400Temp[nume_test] = [];
                        teste400Temp[nume_test].push(rezultat);
                    } else if (
                        parseFloat(rezultat.valoare_rezultat) > 400 &&
                        parseFloat(rezultat.valoare_rezultat) < 2000
                    ) {
                        if (!teste2000Temp[nume_test]) teste2000Temp[nume_test] = [];
                        teste2000Temp[nume_test].push(rezultat);
                    }
                });
            });

            setTeste20(teste20Temp);
            setTeste100(teste100Temp);
            setTeste400(teste400Temp);
            setTeste2000(teste2000Temp);
            console.log(teste20);
            console.log(teste100);
            console.log(teste400);
            console.log(teste2000);
        });
    }
    },[tipTest])

    useEffect(() => {
        if (chartRef.current && Object.keys(teste20).length > 0) {
            const datasets = Object.keys(teste20).map((nume_test) => {
                return {
                    label: nume_test,
                    data: teste20[nume_test].map(r => {
                        return {
                            x: r.data_test,
                            y: r.valoare_rezultat
                        };
                    }), 
                    fill: false,
                    borderColor: getRandomColor(), 
                    tension: 0.1
                };
            });
    
            const lineChart = new Chart(chartRef.current, {
                type: 'line',
                data: {
                    datasets: datasets,
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: 'Teste cu valori mai mici de 20',
                            fontSize: 20
                        }
                    },
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'year'
                            }
                        }
                    }
                }
            });
    
            return () => {
                lineChart.destroy();
            };
        }
    }, [teste20]);
    useEffect(() => {
        if (chartInstanceRef.current && Object.keys(teste100).length > 0) {
            const datasets = Object.keys(teste100).map((nume_test) => {
                return {
                    label: nume_test,
                    data: teste100[nume_test].map(r => {
                        return {
                            x: r.data_test,
                            y: r.valoare_rezultat
                        };
                    }), 
                    fill: false,
                    borderColor: getRandomColor(), 
                    tension: 0.1
                };
            });
    
            const lineChart = new Chart(chartInstanceRef.current, {
                type: 'line',
                data: {
                    datasets: datasets,
                },
                options: {
                    plugins:{
                        title: {
                            display: true,
                            text: 'Teste cu valori între 20 și 100 ',
                            fontSize: 20
                        }
                    },
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'year'
                            }
                        }
                    }
                }
            });
    
            return () => {
                lineChart.destroy();
            };
        }
    }, [teste100]);

    useEffect(() => {
        if (chartRef2.current && Object.keys(teste400).length > 0) {
            const datasets = Object.keys(teste400).map((nume_test) => {
                return {
                    label: nume_test,
                    data: teste400[nume_test].map(r => {
                        return {
                            x: r.data_test,
                            y: r.valoare_rezultat
                        };
                    }), 
                    fill: false,
                    borderColor: getRandomColor(), 
                    tension: 0.1
                };
            });
    
            const lineChart = new Chart(chartRef2.current, {
                type: 'line',
                data: {
                    datasets: datasets,
                },
                options: {
                    plugins:{
                        title: {
                            display: true,
                            text: 'Teste cu valori între  100 și 400',
                            fontSize: 20
                        }
                    },
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'year'
                            }
                        }
                    }
                }
            });
    
            return () => {
                lineChart.destroy();
            };
        }
    }, [teste400]);

    useEffect(() => {
        if (chartRef3.current && Object.keys(teste2000).length > 0) {
            const datasets = Object.keys(teste2000).map((nume_test) => {
                return {
                    label: nume_test,
                    data: teste2000[nume_test].map(r => {
                        return {
                            x: r.data_test,
                            y: r.valoare_rezultat
                        };
                    }), 
                    fill: false,
                    borderColor: getRandomColor(), 
                    tension: 0.1
                };
            });
    
            const lineChart = new Chart(chartRef3.current, {
                type: 'line',
                data: {
                    datasets: datasets,
                },
                options: {
                    plugins:
                    {
                        title: {
                        display: true,
                        text: 'Teste cu valori între 400 și 2000',
                        fontSize: 20
                    },

                    },
                    
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'year'
                            }
                        }
                    }
                }
            });
    
            return () => {
                lineChart.destroy();
            };
        }
    }, [teste2000]);

    return(
        <ContinerParinte>
            <Titlu>
                Statistici
            </Titlu>
            <br></br>
            <Paragraf> 
                Unele afecțiuni pot provoca schimbări în valorile analizelor medicale înainte ca pacientul să prezinte simptome. Prin urmare, monitorizarea regulată a acestor valori poate ajuta la detectarea precoce a unei probleme de sănătate.
                </Paragraf>
                <br/>
                <hr></hr>
                <br/>
       
            <Continer>
            <div>Selectează un tip de test pentru a vedea evoluția acestuia</div>
            </Continer>
            <Continer>
            <Select placeholder="Selectează tipul de test" onChange={(e) => setTipTest(e.target.value)}>
            {Array.isArray(date) && date.map((date, index) => (
            <option key={index} value={date.tip_nume}>
                {date.tip_nume}
            </option>
    ))}
            </Select>
            </Continer>
            <Continer>
            <canvas ref={chartRef} /> 
            <canvas ref={chartInstanceRef} />
            </Continer>
            <Continer>
            <canvas ref={chartRef2} /> 
            <canvas ref={chartRef3} />
            </Continer>
        </ContinerParinte>
    );
}
export default Statistici;