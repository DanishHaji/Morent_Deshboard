import React from 'react';
import Sidebar from '@/components/Sidebar';
import Statistics from '@/components/Statistics';
import CarManagement from '@/components/CarManagemet';

const Home: React.FC = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex flex-grow gap-6 p-6">
                <Statistics />
                <CarManagement />
            </div>
        </div>
    );
};

export default Home;
