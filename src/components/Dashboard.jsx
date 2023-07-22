import { PostDistribution } from './PostDistribution';
import { PostsBySchool } from './PostsBySchool';
import { TopAuthors } from './TopAuthors/TopAuthors';

export const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1 className="dashboard_header">Usage Dashboard</h1>
            <div className="top-charts">
                <PostDistribution />
                <PostsBySchool />
            </div>
            <TopAuthors />
        </div>
    )
}