import { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement, Legend} from 'chart.js'
import { Loader } from './Loader';

Chart.register(ArcElement, Legend);

const data = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        label: 'Post Distribution',
        data: [300, 50, 100],
        backgroundColor: [
            '#6CB374',
            '#FFCB97',
            '#B46133'
        ],
        hoverOffset: 4
    }],
};

const options = {
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'right',
            boxWidth: 100,
        }
    }
}

export const PostDistribution = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsLoaded(true), 1000)
    }, []);

    return (
        <div className="post_distribution dashboard-item">
            { !isLoaded ?
                (
                    <Loader />
                ) : (
                <>
                    <h2 className="subheader">Post Distribution</h2>
                    <div style={{width:'99%', height: '300px', position: 'relative'}}>
                        <Doughnut data={data} options={options} />
                    </div>
                </>
            )}
        </div>
    )
}