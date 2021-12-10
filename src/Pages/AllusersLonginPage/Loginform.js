import React, { useState } from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import teacherimg from '../../images/T-bg.jpg';
import studentimg from '../../images/papperpencil.jpg';
import principalimg from '../../images/a-bg.jpg'
import { useHistory } from 'react-router';
import useAuth from '../../Context/useAuth';

const Loginform = ({role}) => {
    const [logindata, setLogindata] = useState({});
    const history = useHistory();
    const {LoginUser, setUser} = useAuth();

    const OnBlurHandler = e => {
        const fieldname = e.target.name;
        const fieldvalue = e.target.value;

        const newdata = {...logindata};
        newdata[fieldname] = fieldvalue;
        setLogindata(newdata)
    }

    const onSubmitHandler = e => {
        fetch(`http://localhost:5000/checkuser?email=${logindata.email}`)
        .then(res => res.json())
        .then(data => {
            if(data.userrole === 'Principal' && role === 'Principal')
            {
                LoginUser(logindata.email, logindata.password)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        // ...
                        setUser(user)
                        history.push('/principaldashboard')
                        
                    })
                    .catch((error) => {
                        console.log('from login user', error.message)
                    });

                
            }
            else if(data.userrole === 'Teacher' && role === 'Teacher')
            {
                LoginUser(logindata.email, logindata.password)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        // ...
                        setUser(user)
                        history.push('/teacherhome')
                        
                    })
                    .catch((error) => {
                        console.log('from login user', error.message)
                    });

                
            }
            else if (data.userrole === 'Student' && role === 'Student')
            {
                LoginUser(logindata.email, logindata.password)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        // ...
                        setUser(user)
                        history.push('/studentdashboard')
                        
                    })
                    .catch((error) => {
                        console.log('from login user', error.message)
                    });
                
            }

            

            else{
                alert('Sorry Unauthorised User')
            }
            e.target.reset()
        })
        e.preventDefault()
        
    }
    return (
     <Row className="d-flex justify-content-center">
         <Col lg={4} md={6} sm={12}>
         {
           role === 'Teacher' &&  <img className="w-75 rounded" src={teacherimg} alt="" />
         }
         {
            role === 'Student' &&  <img className="w-75 rounded" src={studentimg} alt="" />
         }
         {
           role === 'Principal' &&   <img className="w-75 rounded" src={principalimg} alt="" />
         }
         </Col>
         <Col lg={7} sm={12} md={6}>
         <Form onSubmit={onSubmitHandler}>
            <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Role</Form.Label>
        <Form.Select name="role" onBlur={OnBlurHandler} defaultValue={role}>
            <option>{role}</option>
        </Form.Select>
          </Form.Group>

        <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
        >
            <Form.Control name="email" onBlur={OnBlurHandler} type="email" placeholder="name@example.com" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control name="password" onBlur={OnBlurHandler} type="password" placeholder="Password" />
        </FloatingLabel>
        <button type="submit" className="btn btn-info fw-bold fs-5 my-4">Login</button>
        </Form>
         </Col>
     </Row>
    );
};

export default Loginform;