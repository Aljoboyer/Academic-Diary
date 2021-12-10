import React from 'react';
import useAuth from '../../../Context/useAuth'
const StudentHome = () => {
    const {allstduentsection} = useAuth()
    return (
        <div className="container-fluid">
            <h2>This is student home</h2>
        </div>
    );
};

export default StudentHome;