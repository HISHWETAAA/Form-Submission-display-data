import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Form';
import DataTable from './DataTable';
import './style.css';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    {/* Route for the form */}
                    <Route path="/" element={<Form />} />

                    {/* Route for the data table */}
                    <Route path="/data" element={<DataTable />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
