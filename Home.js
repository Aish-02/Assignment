import React, { useState } from 'react';
import Api from '../Api';

const Home = () => {
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [frequency, setFrequency] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Api.getData(startTime, endTime, frequency);
            console.log(response.data);
            // Handle response data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
            <input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
            <input type="text" value={frequency} onChange={(e) => setFrequency(e.target.value)} placeholder="Frequency" />
            <button type="submit">Filter Data</button>
        </form>
    );
};

export default Home;
