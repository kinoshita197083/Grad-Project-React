import React from 'react'
import { Dashboard } from '../../dashboard/dashboard'
import './dashboard_page.css'

export function Dashboard_page() {

    const [predictions, getPredictions] = useState([]);

    useEffect(() => {
        getPredictedData();
    }, []);


    const getPredictedData = () => {
        axios.get('https://jnkntsb3gd.execute-api.ap-southeast-2.amazonaws.com/test')
            .then((response) => {
                const allPredictions = response.data.body;
                getPredictions(allPredictions);
                console.log(JSON.parse(allPredictions));
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    return (
        <div className='dashboard-page-container'>
            <Dashboard />
        </div>
    )
}