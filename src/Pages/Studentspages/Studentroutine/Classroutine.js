import React from 'react';
import { Row, Table } from 'react-bootstrap';

const Classroutine = () => {
    return (
        <Row className="container-fluid">
            <h1 className="text-center my-4">Class Routine</h1>
            <Table striped bordered hover responsive="sm">
            <thead>
                <tr>
                     <th className="text-uppercase">Time</th>
                      <th className="text-uppercase">Monday</th>
                       <th className="text-uppercase">Tuesday</th>
                      <th className="text-uppercase">Wednesday</th>
                      <th className="text-uppercase">Thursday</th>
                      <th className="text-uppercase">Friday</th>
                      <th className="text-uppercase">Saturday</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                      <td className="align-middle">09:00am</td>
                      <td>
                          <span className="bg-info padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Dance</span>
                          <div className="margin-10px-top font-size14">9:00-10:00</div>
                          <div className="font-size13 text-light-gray">Ivana Wong</div>
                      </td>
                      <td>
                          <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Yoga</span>
                          <div className="margin-10px-top font-size14">9:00-10:00</div>
                          <div className="font-size13 text-light-gray">Marta Healy</div>
                      </td>

                      <td>
                          <span className="bg-warning padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Music</span>
                          <div className="margin-10px-top font-size14">9:00-10:00</div>
                          <div className="font-size13 text-light-gray">Ivana Wong</div>
                      </td>
                      <td>
                          <span className="bg-info padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Dance</span>
                          <div className="margin-10px-top font-size14">9:00-10:00</div>
                          <div className="font-size13 text-light-gray">Ivana Wong</div>
                      </td>
                      <td>
                          <span className="bg-secondary padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Art</span>
                          <div className="margin-10px-top font-size14">9:00-10:00</div>
                          <div className="font-size13 text-light-gray">Kate Alley</div>
                      </td>
                      <td>
                          <span className="bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">English</span>
                          <div className="margin-10px-top font-size14">9:00-10:00</div>
                          <div className="font-size13 text-light-gray">James Smith</div>
                      </td>
                  </tr>

                  <tr>
                      <td className="align-middle">10:00am</td>
                      <td>
                          <span className="bg-warning padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Music</span>
                          <div className="margin-10px-top font-size14">10:00-11:00</div>
                          <div className="font-size13 text-light-gray">Ivana Wong</div>
                      </td>
                      <td className="bg-light-gray">

                      </td>
                      <td>
                          <span className="bg-secondary padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Art</span>
                          <div className="margin-10px-top font-size14">10:00-11:00</div>
                          <div className="font-size13 text-light-gray">Kate Alley</div>
                      </td>
                      <td>
                          <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Yoga</span>
                          <div className="margin-10px-top font-size14">10:00-11:00</div>
                          <div className="font-size13 text-light-gray">Marta Healy</div>
                      </td>
                      <td>
                          <span className="bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">English</span>
                          <div className="margin-10px-top font-size14">10:00-11:00</div>
                          <div className="font-size13 text-light-gray">James Smith</div>
                      </td>
                      <td className="bg-light-gray">

                      </td>
                  </tr>

                  <tr>
                      <td className="align-middle">11:00am</td>
                      <td>
                          <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                          <div className="margin-10px-top font-size14">11:00-12:00</div>
                      </td>
                      <td>
                          <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                          <div className="margin-10px-top font-size14">11:00-12:00</div>
                      </td>
                      <td>
                          <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                          <div className="margin-10px-top font-size14">11:00-12:00</div>
                      </td>
                      <td>
                          <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                          <div className="margin-10px-top font-size14">11:00-12:00</div>
                      </td>
                      <td>
                          <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                          <div className="margin-10px-top font-size14">11:00-12:00</div>
                      </td>
                      <td>
                          <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                          <div className="margin-10px-top font-size14">11:00-12:00</div>
                      </td>
                  </tr>

                  <tr>
                      <td className="align-middle">12:00pm</td>
                      <td className="bg-light-gray">

                      </td>
                      <td>
                          <span className="bg-secondary padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Art</span>
                          <div className="margin-10px-top font-size14">12:00-1:00</div>
                          <div className="font-size13 text-light-gray">Kate Alley</div>
                      </td>
                      <td>
                          <span className="bg-info padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Dance</span>
                          <div className="margin-10px-top font-size14">12:00-1:00</div>
                          <div className="font-size13 text-light-gray">Ivana Wong</div>
                      </td>
                      <td>
                          <span className="bg-warning padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Music</span>
                          <div className="margin-10px-top font-size14">12:00-1:00</div>
                          <div className="font-size13 text-light-gray">Ivana Wong</div>
                      </td>
                      <td className="bg-light-gray">

                      </td>
                      <td>
                          <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Yoga</span>
                          <div className="margin-10px-top font-size14">12:00-1:00</div>
                          <div className="font-size13 text-light-gray">Marta Healy</div>
                      </td>
                  </tr>

                  <tr>
                      <td className="align-middle">01:00pm</td>
                      <td>
                          <span className="bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">English</span>
                          <div className="margin-10px-top font-size14">1:00-2:00</div>
                          <div className="font-size13 text-light-gray">James Smith</div>
                      </td>
                      <td>
                          <span className="bg-warning padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Music</span>
                          <div className="margin-10px-top font-size14">1:00-2:00</div>
                          <div className="font-size13 text-light-gray">Ivana Wong</div>
                      </td>
                      <td className="bg-light-gray">

                      </td>
                      <td>
                          <span className="bg-secondary padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">English</span>
                          <div className="margin-10px-top font-size14">1:00-2:00</div>
                          <div className="font-size13 text-light-gray">James Smith</div>
                      </td>
                      <td>
                          <span className="bg-success padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Yoga</span>
                          <div className="margin-10px-top font-size14">1:00-2:00</div>
                          <div className="font-size13 text-light-gray">Marta Healy</div>
                      </td>
                      <td>
                          <span className="bg-warning padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Music</span>
                          <div className="margin-10px-top font-size14">1:00-2:00</div>
                          <div className="font-size13 text-light-gray">Ivana Wong</div>
                      </td>
                  </tr>
            </tbody>
        </Table>
        </Row>
    );
};

export default Classroutine;