import React from 'react';
import { useEffect , useState} from 'react';
import {  Row } from 'react-bootstrap';
import {  useParams } from 'react-router-dom';
import Dashboardnav from '../Maintainance/Dashboardnav';
import Firsttermallresult from './Termwiseresult/Firsttermallresult';
import Secondtermallresult from './Termwiseresult/Secondtermallresult';
import Thirdtermallresult from './Termwiseresult/Thirdtermallresult';

const Individualresult = () => {
    const {id} = useParams()
    const [results, setResults] = useState()
    useEffect(() => {
        fetch(`http://localhost:5000/getindividualresult/${id}`)
        .then(res => res.json())
        .then(data => setResults(data))
    },[id])

    
    const first = results?.find(result => result.term === 'First-Term');
    const second= results?.find(result => result.term === 'Second-Term');
    const third = results?.find(result => result.term === 'Third-Term');

    const newresult = {first, second, third};
    console.log('id',id)
    console.log('fromt individual results',results)
    return (
        <div className="container-fluid">
            <Dashboardnav></Dashboardnav>
          {
              results?.length > 0 ?   <Row>
              {
              newresult?.first?.term === 'First-Term' && <Firsttermallresult result={newresult.first}></Firsttermallresult>
              }
              {
              newresult?.second?.term === 'Second-Term' && <Secondtermallresult result={newresult.second}></Secondtermallresult>
              }
              {
              newresult?.third?.term === 'Third-Term' && <Thirdtermallresult result={newresult.third}></Thirdtermallresult>
              }
          </Row> : "Hi"
          }
        </div>
    );
};

export default Individualresult;

