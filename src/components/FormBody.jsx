import React, { Fragment, useState } from "react";


const FormBody = () => {
    /*
        Date
    
    */


    const startDate = new Date();
    startDate.setFullYear(startDate.getFullYear() - 18, startDate.getMonth());

    const endDate = new Date();
    endDate.setFullYear(endDate.getFullYear()-65, endDate.getMonth());

    const maxDate = String(endDate.toJSON().slice(0, 10));
    const minDate = String(startDate.toJSON().slice(0, 10));


    const [isPrevUser, setIsPrevUser] = useState(false);
    const [enteredFirstName, setEnteredFirstName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredAreaCode, setEnteredAreaCode] = useState('');
    const [enteredPhoneNumber, setEnteredPhoneNumber] = useState('');
    const [enteredGender, setEnteredGender] = useState('');
    const [enteredDOB, setEnteredDOB] = useState('');
    const [enteredSchedule, setEnteredSchedule] = useState('');
    const [enteredLevel , setEnteredLevel] = useState('');
    const [enteredSession, setEnteredSession] = useState('');
    

    const [enteredFNameTouched, setEnteredFNameTouched] = useState(false);
    const [enteredLNameTouched, setEnteredLNameTouched] = useState(false);
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
    const [enteredPhoneTouched, setEnteredPhoneTouched] = useState(false);


    const enteredFNameIsValid = enteredFirstName.trim() !== '';
    const fNameIsInvalid = !enteredFNameIsValid && enteredFNameTouched;

    const enteredLNameIsValid = enteredLastName.trim()!=='';
    const lNameIsInvalid = !enteredLNameIsValid && enteredLNameTouched;
    const matchPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const enteredEmailIsValid = matchPattern.test(enteredEmail);
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    const enteredPhoneIsValid = enteredPhoneNumber.match(/^\d{10}$/);
    const phoneInputIsInvalid = !enteredPhoneIsValid && enteredPhoneTouched;
 
    let formIsValid = false;


    if(enteredEmailIsValid && enteredPhoneIsValid && enteredFNameIsValid && enteredLNameIsValid){
        formIsValid = true;
    }


    const formSubmitHandler = (event) => {
        event.preventDefault();

        setEnteredEmailTouched(true);
        setEnteredPhoneTouched(true);
        setEnteredFNameTouched(true);
        setEnteredLNameTouched(true);

        if(!enteredEmailIsValid || !enteredPhoneIsValid || !enteredFNameIsValid || !enteredLNameIsValid){
            return;
        }else{
            console.log(enteredGender);
            console.log(enteredSchedule);
            console.log(enteredLevel);
            console.log(enteredSession);
            
        }

        console.log(formIsValid);
        
        
        setEnteredEmail('');
        setEnteredDOB('');
        setEnteredPhoneNumber('');
        setEnteredSession('');
        setEnteredAreaCode('');
        setEnteredFirstName('');
        setEnteredLastName('');
        setEnteredLevel('');
        setEnteredGender('');


        setEnteredEmailTouched(false);
        setEnteredPhoneTouched(false);
        setEnteredFNameTouched(false);
        setEnteredLNameTouched(false);
        
    }

    const prevUserHandler = (e) => {
        setIsPrevUser(!isPrevUser);
        console.log(isPrevUser);
    }

    

    return (
        <Fragment>
            <div className="flex flex-col bg-yellow-200 w-full h-full border-2 border-sky-400 p-5 mt-2">
                    <form className="flex flex-col gap-5 max-w-4xl bg-blue-200 mx-auto px-10 py-5" onSubmit={formSubmitHandler} >
                        <div className="flex justify-center">
                            <div className="space-x-3">
                                <input type="checkbox" id="user" onClick={prevUserHandler}  />
                                <label>I am already a User</label>
                            </div>
                        </div>
                        <div className="flex space-x-5 justify-start bg-red-100">
                            <label htmlFor="name">Name</label>
                            <div className="flex space-x-5 bg-yellow-100">
                            <input type="text" placeholder="First Name" value={enteredFirstName} onChange={(e) => setEnteredFirstName(e.target.value)} onBlur={() => setEnteredFNameTouched(true)} />
                            {fNameIsInvalid && (
                                <p>First Name should not be more than 10.</p>
                            )}
                            <input type="text" placeholder="Last Name" value={enteredLastName} onChange={(e)=>setEnteredLastName(e.target.value)} onBlur={() => setEnteredLNameTouched(true)} />
                            {lNameIsInvalid && (
                                <p>Last Name should not be more than 10.</p>
                            )}
                            </div>
                        </div>
                        <div className="flex  space-x-5 justify-start"> 
                            <label>Email</label>
                            <input type="email" placeholder="Email" value={enteredEmail} onChange={(e) => setEnteredEmail(e.target.value)} onBlur={(e) => setEnteredEmailTouched(true)} />
                            {emailInputIsInvalid && (
                                <p>First Name should not be more than 10.</p>
                            )}
                        </div>
                        <div className="flex space-x-5 ">
                            <label>Phone Number</label>
                            <div className="space-x-5">
                            <input type="text" placeholder="Area Code" value={enteredAreaCode} onChange={(e)=> setEnteredAreaCode(e.target.value)} />
                            <input type="text" maxLength="10" placeholder="Phone Number" value={enteredPhoneNumber} onChange={(e)=> setEnteredPhoneNumber(e.target.value)} onBlur={() => setEnteredPhoneTouched(true)} />
                            {phoneInputIsInvalid && (
                                <p>First Name should not be more than 10.</p>
                            )}
                            </div>
                        </div>
                        { !isPrevUser && (<div className="flex space-x-5 ">
                            <label>Gender</label>
                               <div className="flex flex-col" onChange={(e) => setEnteredGender(e.target.value) }>
                                    <div className="space-x-2">
                                        <input type="radio" value="Female" name="gender" />
                                        <label>Female</label>
                                    </div>
                                    <div className="space-x-2">
                                        <input type="radio" value="Male" name="gender"  />
                                        <label>Male</label>
                                    </div>
                                    <div className="space-x-2">
                                        <input type="radio" value="Other" name="gender" />
                                        <label>Other</label>
                                    </div>
                               </div>
                        </div>)}
                       {!isPrevUser && <div className="flex space-x-5">
                            <label>Date of Birth</label>
                            <input type="date" placeholder="Date of Birth" value={enteredDOB} min={maxDate} max={minDate}  onChange={(e)=> setEnteredDOB(e.target.value)} />
                        </div>}
                        {/*  */}
                        <div className="flex space-x-5">
                            <label>Schedule Preference</label>
                            <div className="flex flex-col" onChange={(e) => setEnteredSchedule(e.target.value)}>
                                <div className="space-x-2">
                                    <input type="radio" value="6-7 AM" name="schedule"  />
                                    <label>Morning 6-7</label>
                                </div>
                                <div className="space-x-2">
                                    <input type="radio" value="7-8 AM" name="schedule"  />
                                    <label>Morning 7-8</label>
                                </div>
                                <div className="space-x-2">
                                    <input type="radio" value="8-9 AM" name="schedule"  />
                                    <label>Morning 8-9</label>
                                </div>
                                <div className="space-x-2">
                                    <input type="radio" value="5-6 PM" name="schedule" />
                                    <label>Evening 5-6</label>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-5">
                            <label>Class Level</label>
                            <div className="flex flex-col" onChange={(e) => setEnteredLevel(e.target.value)}>
                                <div className="space-x-2">
                                    <input type="radio" value="Beginner" name="level" />
                                    <label>Level 1 - Beginner Class</label>
                                </div>
                               <div className="space-x-2">
                                    <input type="radio" value="Intermediate" name="level"   />
                                    <label>Level 2 - Intermediate Class</label>
                               </div>
                                <div className="space-x-2">
                                    <input type="radio" value="Advanced" name="level" />
                                    <label>Level 3 - Advanced Class</label>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-5">
                            <label>Session Packages</label>
                            <div className="space-x-2" onChange={(e) => setEnteredSession(e.target.value)}>
                                <input type="radio" value="500" required />
                                <label>50 INR Per Month</label>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" disabled={!formIsValid} className="bg-red-400 px-5 py-1 border-2 border-red-100 rounded-lg">Submit</button>
                        </div>
                    </form>
                </div>
        </Fragment>
    );
}

export default FormBody;