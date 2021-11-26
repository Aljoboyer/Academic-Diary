import React from 'react';
import { Row } from 'react-bootstrap';
import Homeslider from '../Homeslider/Homeslider';
import Usernavber from '../Usersnavber/Usernavber';
import Abouteducation from './Abouteducation/Abouteducation'
import Everystep from './Everystep/Everystep';
import Whochoose from './Whochoose/Whochoose';
import Alluserfooter from '../AlluserFooter/Alluserfooter'
const Userhome = () => {
    return (
        <div className="container-fluid">
            <Usernavber></Usernavber>
                <Homeslider></Homeslider>
                <Abouteducation></Abouteducation>
                <Whochoose></Whochoose>
                <Everystep></Everystep>
                <Alluserfooter></Alluserfooter>
        </div>
    );
};

export default Userhome;