import React from 'react';

const Maintainteacher = ({teacher}) => {
    return (
        <tr>
        <td>{teacher.teachername}</td>
        <td>{teacher.email}</td>
        <td>{teacher.teacherphone}</td>
        <td>{teacher.teachernid}</td>
        <td>{teacher.teacherclass} {teacher.teachersection}</td>
        <td><button className="btn btn-primary">Remove Teacher</button></td>
        </tr>
    );
};

export default Maintainteacher;