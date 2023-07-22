import { useState, useEffect, useCallback } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement, Legend} from 'chart.js'
import { Loader } from './Loader';
import { makeDistributionData } from '../utils/makeDistributionData';
import { ApiUrl } from '../constants/apiUrl';
import { isProd } from "../utils/isProd";
import { postDistributionMocked } from '../constants/postDistribution';

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

        if (isProd()) {
            setTimeout(() => {
                setPostDistribution(makeDistributionData(postDistributionMocked));
                setIsLoaded(true)
            }, 1000);
        } else {
            fetchData().catch((e) => { console.warn(e)} );
        }
    }, [fetchPostDistribution]);

    return (
        <div className="post_distribution top-chart dashboard-item">
            { !isLoaded ?
                (
                    <Loader />
                ) : (
                <>
                    <h2 className="subheader">Post Distribution</h2>
                    <div className="chart-wrapper">
                        <Doughnut data={postDistribution} options={options} />
                    </div>
                </>
            )}
        </div>
    )
}