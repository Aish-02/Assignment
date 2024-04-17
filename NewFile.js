import React from 'react';

const NewFile = ({ summaryData }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Number of 0s</th>
                    <th>Number of 1s</th>
                    <th>Continuous 0s</th>
                    <th>Continuous 1s</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{summaryData.zeros}</td>
                    <td>{summaryData.ones}</td>
                    <td>{summaryData.continuousZeros}</td>
                    <td>{summaryData.continuousOnes}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default NewFile;
