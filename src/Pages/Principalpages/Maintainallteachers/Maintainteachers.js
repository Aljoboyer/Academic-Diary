import React from 'react';
import { Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Maintainteachers = () => {
    return (
        <div className="container-fluid">
            <Row>
            <h4 className="text-center">Teachers Of Schools</h4>
            <Table striped bordered hover responsive="sm">
                <thead>
                    <tr>
                    <th>Teacher Name</th>
                    <th>Teacher ID</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Teacher-1</td>
                    <td>1</td>
                    <td><Link to="/maintainTeacher"><button className="btn btn-primary">Remove Teacher</button></Link></td>
                    </tr>
                    <tr>
                    <td>Teacher-2</td>
                    <td>2</td>
                    <td><button className="btn btn-primary">Remove Teacher</button></td>
                    </tr>
                    <tr>
                    <td>Teacher-3</td>
                    <td>3</td>
                    <td><button className="btn btn-primary">Remove Teacher</button></td>
                    </tr>

                    <tr>
                    <td>Teacher-4</td>
                    <td>4</td>
                    <td><button className="btn btn-primary">Remove Teacher</button></td>
                    </tr>
                    <tr>
                    <td>Teacher-5</td>
                    <td>5</td>
                    <td><button className="btn btn-primary">Remove Teacher</button></td>
                    </tr>
                    <tr>
                    <td>Teacher-6</td>
                    <td>6</td>
                    <td><button className="btn btn-primary">Remove Teacher</button></td>
                    </tr>
                </tbody>
            </Table>
        </Row>  
        </div>
    );
};

export default Maintainteachers;