import React, { Component } from 'react';
import './symptom_intro.css';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'Rank', width: 70 },
    { field: 'symptom', headerName: 'Symptom', width: 170 },
    { field: 'statistic', headerName: 'Statistic', width: 130 },
    { field: 'description', headerName: 'Description', width: 930 },
    // {
    //     field: 'age',
    //     headerName: 'Age',
    //     type: 'number',
    //     width: 90,
    // },
    // {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (params) =>
    //         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
];

const rows = [
    { id: 1, statistic: '59.11%', symptom: 'Lesions', description: 'The lesions start as a flat red rash that develops into pustules, which then form crusts or scabs and fall off.' },
    { id: 2, statistic: '37.93%', symptom: 'Fever', description: 'A few people may need supportive management such as intravenous fluids and treatment to control fever.' },
    { id: 3, statistic: '30.05%', symptom: 'Rash', description: 'Rash may be confined to only a few lesions or only a single lesion.' },
    { id: 4, statistic: '11.33%', symptom: 'Muscle ache', description: 'You may feel a deep, steady ache or random sharp pains. Some people have muscle pain all over.' },
    { id: 5, statistic: '10.84%', symptom: 'Headache', description: 'Pain in your head or face that is often described as throbbing or constant.' },
    { id: 6, statistic: '9.36%', symptom: 'Fatigue', description: 'A feeling of constant tiredness or weakness and can be physical, mental or a combination of both.' },
    { id: 7, statistic: '5.91%', symptom: 'Swollen lymph node', description: 'It is your bodys natural reaction to illness or infection. These small lumps are soft, tender and often painful.' },
    { id: 8, statistic: '5.42%', symptom: 'Blister', description: 'It starts as raised spots, which turn into small blisters filled with fluid.' },
    { id: 9, statistic: '4.43%', symptom: 'Pustule', description: 'Small, inflamed, pus-filled, blister-like sores (lesions) on the skin surface.' },
    { id: 10, statistic: '2.96%', symptom: 'Papule', description: 'A raised area of skin tissue that is less than 1 centimeter around.' },
    // { id: 11, statistic: 'Roxie', symptom: 'Harvey', age: 65 },
];


function SymptomIntro() {
    return (



        <section className="symptom-section" >
            <div className="container">
                {/* <div className="row img-container">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">Symptoms and Indicators</h2>
                    </div>
                    <br /><br /><br />
                    <img src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/stick2.svg'></img>
                </div> */}
                <div className='sub1-table-container'>
                    <div className='symptom-sub1'>
                        <div >
                            <h4 className='sub-heading'>Symptoms Data</h4>
                            <p className='p'>Symptoms commonly experienced manifest in the form of skin leions, fevers and rashes.</p>
                            <br>
                            </br><p>However, people can also experience muscle aches, headaches, swollen lymph nodes, chills and/or exhaustion prior to the rash or lesions development. 
                                Find below a table of statistical findings of the percentage of people testing positive for monkeypox and the symptoms commonly experienced.
                                </p>
                        </div>
                    </div>

                    <div style={{ height: 370, width: '100%', marginTop: '4%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default SymptomIntro;