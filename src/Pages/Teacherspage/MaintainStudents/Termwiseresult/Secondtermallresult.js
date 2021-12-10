import React from 'react';
import { Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Secondtermallresult = ({result}) => {
    return (
        <>
        {
            result.term ?  <>
            {
                result.class === 'KG' || result.class === 'Nursery'  
                ? 
                <Row>
                <h4 className="text-center my-4">{result.term} result of {result.class} {result.section}</h4>
                <Table striped bordered hover responsive="sm">
                
                <thead>
                    <tr>
                    <th>Subject Name</th>
                    <th>Mid Term</th>
                    <th>Final Term</th>
                    <th>Total marks</th>
                    <th>CGPA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{result.bangla}</td>
                    <td>{result.banglamid}</td>
                    <td>{result.banglafinal}</td>
                    <td>{result.banglatotal}</td>
                    <td>{result.banglaCgpa}</td>
                    </tr>
                    <tr>
                    <td>{result.english}</td>
                    <td>{result.englishmid}</td>
                    <td>{result.englishfinal}</td>
                    <td>{result.englishtotal}</td>
                    <td>{result.englishCgpa}</td>
                    </tr>
                    <tr>
                    <td>{result.math}</td>
                    <td>{result.mathmid}</td>
                    <td>{result.mathfinal}</td>
                    <td>{result.mathtotal}</td>
                    <td>{result.mathCgpa}</td>
                    </tr>
                    <tr>
                    <td>{result.gs}</td>
                    <td>{result.drawmid}</td>
                    <td>{result.drawfinal}</td>
                    <td>{result.drawtotal}</td>
                    <td>{result.drawCgpa}</td>
                    </tr>
                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                        <td  className="fw-bold text-primary fs-6"> {
                             result.Failcount > 0 ? `Fail In ${result.Failcount} Subject` :
                             <> 
                                GPA {result.secondtermCgpa}
                             </>
                        }</td>
                    </tr>
                </tbody>
            </Table>
            <Link to={`/kgtonurseryresultedit/${result._id}`}><button className="btn btn-warning text-dark fw-bold p-2">Edit Result</button></Link>
                </Row> : 
                ''
            }
            {
                result.class === 'Class-One' || result.class === 'Class-Two' || result.class === 'Class-Three' ||  result.class === 'Class-Four' ? <Row>
                <h4 className="text-center my-4">{result.term} result of {result.class} {result.section}</h4>
                <Table striped bordered hover responsive="sm">
                
                <thead>
                    <tr>
                    <th>Subject Name</th>
                    <th>Mid Term</th>
                    <th>Final Term</th>
                    <th>Total marks</th>
                    <th>CGPA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{result.bangla1}</td>
                    <td>{result.bangla1mid}</td>
                    <td>{result.bangla1final}</td>
                    <td>{result.bangla1total}</td>
                    <td>{result.bangla1Cgpa}</td>
                    </tr>
                    <tr>
                    <td>{result.bangla2}</td>
                    <td>{result.bangla2mid}</td>
                    <td>{result.bangla2final}</td>
                    <td>{result.bangla2total}</td>
                    <td>{result.bangla2Cgpa}</td>
                    </tr>
                    <tr>
                    <td>{result.english1}</td>
                    <td>{result.english1mid}</td>
                    <td>{result.english1final}</td>
                    <td>{result.english1total}</td>
                    <td>{result.english1Cgpa}</td>
                    </tr>
                    <tr>
                    <td>{result.english2}</td>
                    <td>{result.english2mid}</td>
                    <td>{result.english2final}</td>
                    <td>{result.english2total}</td>
                    <td>{result.english2Cgpa}</td>
                    </tr>
                    <tr>
                    <td>{result.math}</td>
                    <td>{result.mathmid}</td>
                    <td>{result.mathfinal}</td>
                    <td>{result.mathtotal}</td>
                    <td>{result.mathCgpa}</td>
                    </tr>
                    <tr>
                    <td>{result.gs}</td>
                    <td>{result.gsmid}</td>
                    <td>{result.gsfinal}</td>
                    <td>{result.gstotal}</td>
                    <td>{result.gsCgpa}</td>
                    </tr>
                    <tr>
                    <td>{result.religion}</td>
                    <td>{result.religionmid}</td>
                    <td>{result.religionfinal}</td>
                    <td>{result.religiontotal}</td>
                    <td>{result.religionCgpa}</td>
                    </tr>

                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                        <td  className="fw-bold text-primary fs-6"> {
                            result.Failcount1 > 0 ? `Fail In ${result.Failcount1} Subject` :
                            <> 
                                GPA {result.secondtermCgpa}
                            </>
                        }</td>
                    </tr>
                </tbody>
            </Table>
            <Link to={`/classonetofoureditresult/${result._id}`}><button className="btn btn-warning text-dark fw-bold p-2">Edit Result</button></Link>
            </Row> : ''
            }

            {
                result.class === 'Class-Five' &&  <Row>
                    <h4 className="text-center my-4">{result.term} result of {result.class} {result.section}</h4>
                    <Table striped bordered hover responsive="sm">
                    
                    <thead>
                        <tr>
                        <th>Subject Name</th>
                        <th>Mid Term</th>
                        <th>Final Term</th>
                        <th>Total marks</th>
                        <th>CGPA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{result.fivebangla}</td>
                        <td>{result.fivebanglamid}</td>
                        <td>{result.fivebanglafinal}</td>
                        <td>{result.fivebanglatotal}</td>
                        <td>{result.fivebanglaCgpa}</td>
                        </tr>
                        <tr>
                        <td>{result.fiveenglish}</td>
                        <td>{result.fiveenglishmid}</td>
                        <td>{result.fiveenglishfinal}</td>
                        <td>{result.fiveenglishtotal}</td>
                        <td>{result.fiveenglishCgpa}</td>
                        </tr>
                        <tr>
                        <td>{result.fivemath}</td>
                        <td>{result.fivemathmid}</td>
                        <td>{result.fivemathfinal}</td>
                        <td>{result.fivemathtotal}</td>
                        <td>{result.fivemathCgpa}</td>
                        </tr>
                        <tr>
                        <td>{result.gs}</td>
                        <td>{result.gsmid}</td>
                        <td>{result.gsfinal}</td>
                        <td>{result.gstotal}</td>
                        <td>{result.fivegsCgpa}</td>
                        </tr>
                        
                        <tr>
                        <td>{result.science}</td>
                        <td>{result.sciencenmid}</td>
                        <td>{result.sciencefinal}</td>
                        <td>{result.sciencetotal}</td>
                        <td>{result.scienceCgpa}</td>
                        </tr>

                        <tr>
                        <td>{result.religion}</td>
                        <td>{result.religionmid}</td>
                        <td>{result.religionfinal}</td>
                        <td>{result.religiontotal}</td>
                        <td>{result.religionCgpa}</td>
                        </tr>


                        <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                            <td  className="fw-bold text-primary fs-6"> {
                                result.Failcount3 > 0 ? `Fail In ${result.Failcount3} Subject` :
                                <> 
                                    GPA {result.secondtermCgpa}
                                </>
                            }</td>
                        </tr>
                    </tbody>
                </Table>
                <Link to={`/classfiveeditresult/${result._id}`}><button className="btn btn-warning text-dark fw-bold p-2">Edit Result</button></Link>
                </Row>
            }
        </> : <h2 className="fw-bold text-warning my-4 text-center">Result is Not Available</h2>
        }
       </>
    );
};

export default Secondtermallresult;