import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Teachersnav from '../Teachershome/TeachersNavbar/Teachersnav';

const Individualresult = () => {
    return (
        <div className="container-fluid">
           
            <h1 className="text-center">Student-1 First Semester Result</h1>
            <Row>
            <Table striped bordered hover responsive="sm">
                <thead>
                    <tr>
                    <th>Subject Name</th>
                    <th>Subject Code</th>
                    <th>Mid Term</th>
                    <th>Final Term</th>
                    <th>Total marks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Banlga First</td>
                    <td>101</td>
                    <td>15</td>
                    <td>60</td>
                    <td>75</td>
                    </tr>
                    <tr>
                    <td>Bangla Second</td>
                    <td>102</td>
                    <td>15</td>
                    <td>50</td>
                    <td>65</td>
                    </tr>
                    <tr>
                    <td>English First</td>
                    <td>301</td>
                    <td>15</td>
                    <td>60</td>
                    <td>75</td>
                    </tr>

                    <tr>
                    <td>English Second</td>
                    <td>302</td>
                    <td>15</td>
                    <td>60</td>
                    <td>75</td>
                    </tr>
                    <tr>
                    <td>Math</td>
                    <td>502</td>
                    <td>10</td>
                    <td>50</td>
                    <td>60</td>
                    </tr>
                    <tr>
                    <td>General Science</td>
                    <td>602</td>
                    <td>10</td>
                    <td>50</td>
                    <td>60</td>
                    </tr>
                </tbody>
            </Table>
            <Link to="/resultedit"><button  className="btn btn-primary w-25">Edit Result</button></Link>
            </Row>
        </div>
    );
};

export default Individualresult;