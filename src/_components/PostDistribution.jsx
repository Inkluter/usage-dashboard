import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement, Legend} from 'chart.js'
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
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
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
    return (
        <div className="post_distribution dashboard-item">
            <h2 className="subheader">Post Distribution</h2>
            <div style={{width:'99%', height: '300px', position: 'relative'}}>
                <Doughnut data={data} options={options} />
            </div>
        </div>
    )
}