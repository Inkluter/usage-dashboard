import {useState, useEffect, useCallback} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Loader } from './Loader';
import { makePostsBySchoolData } from '../utils/makePostsBySchoolData';
import { ApiUrl } from '../constants/apiUrl';
import { isProd } from '../utils/isProd';
import { postsBySchoolMocked } from '../constants/postsBySchool';

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
    },
};

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}


const labels = [
    'Adam Elementary School',
    'Alvin Elementary School',
    'Baker Elementary School',
    'Baker Middle School',
    'Baker High School',
    'Sam Houston Elementary School',
    'Sam Houston Middle School',
    'Sanchez Elementary School',
    'Sanchez Middle School',
    'Sanchez High School',
    'Smith Elementary School',
    'Smith Middle School',
    'Smith High School',
    'Washington Elementary School',
    'Washington Middle School',
    'Washington High School',
];

export const data = {
    labels,
    datasets: [
        {
            label: 'Posts by School',
            data: labels.map(() => randomIntFromInterval(0, 300)),
            backgroundColor: '#ABC767',
        },
    ],
};

export const PostsBySchool = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [postsBySchool, setPostsBySchool] = useState(null);

    const fetchPostsBySchool = useCallback(async () => {
        const response = await fetch(`${ApiUrl.BASE_URL}${ApiUrl.POSTS_BY_SCHOOL}`);

        const data = await response.json();
        return data;
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchPostsBySchool();

            setPostsBySchool(makePostsBySchoolData(data));
            setIsLoaded(true)
        }

        if (isProd()) {
            setTimeout(() => {
                setPostsBySchool(makePostsBySchoolData(postsBySchoolMocked));
                setIsLoaded(true);
            }, 1000);
        } else {
            fetchData().catch((e) => { console.warn(e)} );
        }
    }, [fetchPostsBySchool]);

    return (
        <div className="posts_by_school top-chart dashboard-item">
            { !isLoaded ? (
                <Loader />
            ) : (
                <>
                    <h2 className="subheader">Posts By School</h2>
                    <div className="chart-wrapper">
                        <Bar options={options} data={postsBySchool} />
                    </div>
                </>
            )}
        </div>
    )
}