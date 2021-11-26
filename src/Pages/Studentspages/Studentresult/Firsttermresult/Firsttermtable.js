import React from 'react';
import {Row,Table} from 'react-bootstrap'
const Firsttermtable = () => {

    return (
        <Row>
            <h1 className="text-center my-4">First term result</h1>
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
        </Row>
)
 
}

export default Firsttermtable;