// import React,{useEffect, useRef, useState} from 'react';
// import Chart from 'chart.js/auto';
// import axios from 'axios';



// const getStatistici = async (data) => {
//     const resp = await axios.post('http://localhost:3000/rezultate/rezultateNume_valoare', data);
//     return resp.data;
//   }
  

// const EvolutieAnalize=()=>{

//     const [numeTest, setNumeTest] = useState([]);
//     const CNP = localStorage.getItem('CNP');
   
// const vaerticalBarChart= useRef(); 

// useEffect(() => {
//     const fetchStatistici = async () => {
//       console.log(CNP);
//       const rezultat = await getStatistici({ "CNP": CNP });
//       setNumeTest(rezultat);
//     }

//     fetchStatistici();
//   }, [CNP]);

//   useEffect(() => {
//     console.log(numeTest);

//     // Get unique dates
//     const uniqueDates = [];
//     Object.values(numeTest).flat().forEach(({ data }) => {
//         if (!uniqueDates.includes(data)) {
//             uniqueDates.push(data);
//         }
//     });
//     uniqueDates.sort();

//     const datasets = Object.entries(numeTest).map(([label, data]) => {
//         const dataWithNulls = uniqueDates.map((date) => {
//             const found = data.find((d) => d.data === date);
//             return found ? parseFloat(found.valoare) : null;
//         });

//         return {
//             label,
//             data: dataWithNulls,
//             backgroundColor: 'rgba(75, 192, 192, 0.2)',
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 1,
//         };
//     });

//     const barChart = new Chart(vaerticalBarChart.current, {
//         type: 'bar',
//         data: {
//             labels: uniqueDates,
//             datasets: datasets,
//         },
//         options: {
//             responsive: true,
//             plugins: {
//                 legend: {
//                     position: 'top',
//                 },
//                 title: {
//                     display: true,
//                     text: 'Chart.js Bar Chart',
//                 },
//             },
//         },
//     });

//     return () => {
//         barChart.destroy();
//     };

// }, [numeTest, vaerticalBarChart]);

//     return(
//         <div >
//         <p>HEY</p>
//         <canvas ref={vaerticalBarChart}> </canvas>
//         </div>
//     )
// }


// export default EvolutieAnalize;
import React,{useEffect, useRef, useState} from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

const getStatistici = async (data) => {
    const resp = await axios.post('http://localhost:3000/rezultate/rezultateNume_valoare', data);
    return resp.data;
}

// Generate random color
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

        // Get unique dates
        let dateUnice = [];
        Object.values(numeTest).flat().forEach(({ data }) => {
            if (!dateUnice.includes(data)) {
                dateUnice.push(data);
            }
        });
        dateUnice.sort();

        // Create datasets
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
        <div >
        <p>Evoluția valorilor testelor </p>
        <canvas ref={vaerticalBarChart}> </canvas>
        </div>
    )
}


export default EvolutieAnalize;
