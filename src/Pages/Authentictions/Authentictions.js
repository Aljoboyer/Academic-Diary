import initializationFirebase from '../../Firebasesetup/Firebaseinit';
import {useEffect, useState} from 'react'
import {signOut, onAuthStateChanged , getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

initializationFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [sectionclass, setSectionclass] = useState({});
    const [allstduentsection, setAllstudentsection] = useState({})
    const auth = getAuth();

    //registering user
    const RegisterUser = (email, password) => {
      return  createUserWithEmailAndPassword(auth, email, password)
    }

    //Login user 
    const LoginUser = (email , password, role) => {
      return  signInWithEmailAndPassword(auth, email, password)

    }

    //geting current user 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              // ...
              setUser(user)
            } else {
              // User is signed out
              // ...
              setUser({})
            }
          });
    },[auth])


    //searching section  and class for teacher 
    useEffect(() => {

        if(user.email) 
        {
           fetch(`http://localhost:5000/teachersection?email=${user.email}`)
          .then(res => res.json())
          .then(data => setSectionclass(data))
          
        }
        else{
          console.log('hi from teacher user effect')
        }
    },[user.email])

      //searching section  and class for stduent 
      useEffect(() => {
        
          if(user.email) 
          {
             fetch(`http://localhost:5000/studentsection?email=${user.email}`)
            .then(res => res.json())
            .then(data => setAllstudentsection(data))
    
          }
          else{
            console.log('hi from student user effect')
          }
      },[user.email])
   
    //user Log out
    const LogOutUser = (history) => {
        signOut(auth).then(() => {
            setUser({})
            history.push('/')
          }).catch((error) => {
            // An error happened.
          });
    }
    return {
        setUser,
        user,
        RegisterUser,
        LoginUser,
        LogOutUser,
        sectionclass,
        allstduentsection
    }
}

export default useFirebase;