import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
);

export const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Posts by School',
            data: labels.map(() => randomIntFromInterval(0, 100)),
            backgroundColor: '#ABC767',
        },
    ],
};

export const PostsBySchool = () => {
    return (
        <div className="posts_by_school dashboard-item">
            <h2 className="subheader">Posts By School</h2>
            <div style={{width:'99%', height: '300px', position: 'relative'}}>
                <Bar options={options} data={data} />
            </div>
        </div>
    )
}