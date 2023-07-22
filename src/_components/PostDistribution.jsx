import { useState, useEffect, useCallback } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement, Legend} from 'chart.js'
import { Loader } from './Loader';
import { makeDistributionData } from '../utils/makeDistributionData';
import { ApiUrl } from '../_constants/apiUrl';

Chart.register(ArcElement, Legend);

const options = {
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'right',
        }
    }
}

export const PostDistribution = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [postDistribution, setPostDistribution] = useState(null);

    const fetchPostDistribution = useCallback(async () => {
        const response = await fetch(`${ApiUrl.BASE_URL}${ApiUrl.POST_DISTRIBUTION}`);

        const data = await response.json();
        return data;
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchPostDistribution();

            setPostDistribution(makeDistributionData(data));
            setIsLoaded(true)
        }

        fetchData();
    }, [fetchPostDistribution]);

    return (
        <div className="post_distribution dashboard-item">
            { !isLoaded ?
                (
                    <Loader />
                ) : (
                <>
                    <h2 className="subheader">Post Distribution</h2>
                    <div style={{width:'99%', height: '300px', position: 'relative'}}>
                        <Doughnut data={postDistribution} options={options} />
                    </div>
                </>
            )}
        </div>
    )
}