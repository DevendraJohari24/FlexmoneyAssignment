import React, { Fragment, useState } from "react";
import { useNavigate} from 'react-router-dom';

const FormBody = () => {
    const navigate = useNavigate();
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
    const [enteredPaymentId, setEnteredPaymentId] = useState('');
    

    const [enteredFNameTouched, setEnteredFNameTouched] = useState(false);
    const [enteredLNameTouched, setEnteredLNameTouched] = useState(false);
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
    const [enteredPhoneTouched, setEnteredPhoneTouched] = useState(false);
    const [enteredPaymentIdTouched, setEnteredPaymentIdTouched] = useState(false);

    const enteredFNameIsValid = enteredFirstName.trim() !== '';
    const fNameIsInvalid = !enteredFNameIsValid && enteredFNameTouched;

    const enteredLNameIsValid = enteredLastName.trim()!=='';
    const lNameIsInvalid = !enteredLNameIsValid && enteredLNameTouched;

    const enteredPaymentIdIsValid = enteredPaymentId.trim()!=='';
    const paymentIdIsInvalid = !enteredPaymentIdIsValid && enteredPaymentIdTouched;


    


    const matchPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const enteredEmailIsValid = matchPattern.test(enteredEmail);
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    const enteredPhoneIsValid = enteredPhoneNumber.match(/^\d{10}$/);
    const phoneInputIsInvalid = !enteredPhoneIsValid && enteredPhoneTouched;
 

    const [isLoading, setIsLoading] = useState(false);


    let formIsValid = false;


    if(enteredEmailIsValid && enteredPhoneIsValid && enteredFNameIsValid && enteredLNameIsValid && enteredPaymentIdIsValid){
        formIsValid = true;
    }

    const sendRequestNewUser = async(plan) => {
        setIsLoading(true);
        const res = await fetch(`/api/plans`,{
            method: "POST",
            body: JSON.stringify(plan),
            headers:{
                "Content-type": "application/json"
            }
        });

        if(res.status === 201){
            console.log("Successfully Inserted");
            setIsLoading(false);
            navigate('/users');
        }
    }

    const sendRequestOldUser = async(plan, emailId) => {
        setIsLoading(true);
        const res = await fetch(`/api/plans/${emailId}`,{
            method: "PATCH",
            body: JSON.stringify(plan),
            headers:{
                "Content-type": "application/json",
            }
        });

        if(res.status === 200){
            console.log("Successfully Updated");
            setIsLoading(false);
            navigate('/users');
        }
    }

    
    const formSubmitHandler = (event) => {
        event.preventDefault();

        setEnteredEmailTouched(true);
        setEnteredPhoneTouched(true);
        setEnteredFNameTouched(true);
        setEnteredLNameTouched(true);
        setEnteredPaymentIdTouched(true);

        if(!enteredEmailIsValid || !enteredPhoneIsValid || !enteredFNameIsValid || !enteredLNameIsValid || !enteredPaymentIdIsValid){
            return;
        }

        if(formIsValid){
            if(!isPrevUser){
                const plan = {
                    fname: enteredFirstName,
                    lname: enteredLastName,
                    email: enteredEmail,
                    areaCode: enteredAreaCode,
                    phoneNumber: enteredPhoneNumber,
                    gender: enteredGender,
                    dob: enteredDOB,
                    schedule: enteredSchedule,
                    level: enteredLevel,
                    session: enteredSession,
                    paymentId: enteredPaymentId
                }
                sendRequestNewUser(plan);
            }else{
                const plan = {
                    schedule: enteredSchedule,
                    level: enteredLevel,
                    session: enteredSession,
                    paymentId: enteredPaymentId
                }
                console.log(enteredEmail);
                sendRequestOldUser(plan, enteredEmail);
            }
        }
        
        setIsPrevUser(false);
        setEnteredEmail('');
        setEnteredDOB('');
        setEnteredPhoneNumber('');
        setEnteredSession('');
        setEnteredAreaCode('');
        setEnteredFirstName('');
        setEnteredLastName('');
        setEnteredLevel('');
        setEnteredGender('');
        setEnteredPaymentId('');


        setEnteredEmailTouched(false);
        setEnteredPhoneTouched(false);
        setEnteredFNameTouched(false);
        setEnteredLNameTouched(false);
        setEnteredPaymentIdTouched(false);
        
    }



    if (isLoading){
        return (
            <Fragment>
                <p>Loading...........</p>
            </Fragment>
        );
    }

    return (
        <Fragment>
            <div className="flex flex-col bg-yellow-200 w-full h-full border-2 border-sky-400 md:p-5 mt-2">
                    <form className="flex flex-col gap-5 md:max-w-4xl bg-blue-200 md:mx-auto px-10 py-5" onSubmit={formSubmitHandler} >
                        <div className="flex justify-center">
                            <div className="space-x-3">
                                <input type="checkbox" id="user" onClick={() => {setIsPrevUser(!isPrevUser)}}  />
                                <label>I am already a User</label>
                            </div>
                        </div>
                        <div className="flex space-x-5 justify-start">
                            <label htmlFor="name">Name</label>
                            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5">
                            <div>
                                <input type="text" placeholder="First Name" value={enteredFirstName} onChange={(e) => setEnteredFirstName(e.target.value)} onBlur={() => setEnteredFNameTouched(true)} />
                                {fNameIsInvalid && (
                                    <p className="text-red-500 text-xs font-bold mt-1">First Name should not be empty.</p>
                                )}
                            </div>
                            <div>
                                <input type="text" placeholder="Last Name" value={enteredLastName} onChange={(e)=>setEnteredLastName(e.target.value)} onBlur={() => setEnteredLNameTouched(true)} />
                                {lNameIsInvalid && (
                                    <p className="text-red-500 text-xs mt-1 font-bold">Last Name should not be empty.</p>
                                )}
                            </div>
                            </div>
                        </div>
                        <div className="flex  space-x-5 justify-start"> 
                            <label>Email</label>
                            <div>
                            <input type="email" placeholder="Email" value={enteredEmail} onChange={(e) => setEnteredEmail(e.target.value)} onBlur={(e) => setEnteredEmailTouched(true)} />

                            {emailInputIsInvalid && (
                                <p className="text-red-500 text-xs mt-1 font-bold">Email is not Valid.</p>
                            )}
                            </div>
                            
                        </div>
                        <div className="flex space-x-5">
                            <label className="">Phone Number</label>
                            <div className="flex md:space-x-3 space-y-2 md:space-y-0 md:flex-row flex-col">
                                <div>
                                    <input type="text" className="w-[100px]" placeholder="Area Code" value={enteredAreaCode} onChange={(e)=> setEnteredAreaCode(e.target.value)} />
                                </div>
                                <div className="flex flex-col">
                                    <input type="text" maxLength="10" placeholder="Phone Number" value={enteredPhoneNumber} onChange={(e)=> setEnteredPhoneNumber(e.target.value)} onBlur={() => setEnteredPhoneTouched(true)} />
                                    {phoneInputIsInvalid && (
                                        <p className="text-red-500 text-xs mt-1 font-bold">Phone Number Should be 10 digit</p>
                                    )}
                                </div>
                            
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
                        <div className="flex md:space-x-5 space-x-2">
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
                        <div className="flex md:space-x-5 space-x-1">
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
                        <div className="flex md:space-x-5 space-x-2">
                            <label>Session Packages</label>
                            <div className="space-x-2" onChange={(e) => setEnteredSession(e.target.value)}>
                                <input type="radio" value="500" required />
                                <label>500 INR Per Month</label>
                            </div>
                        </div>
                        <div className="flex space-x-5">
                            <label>Payment Id</label>
                            <div className="flex flex-col">
                                <input type="text" value={enteredPaymentId} onChange={(e) => setEnteredPaymentId(e.target.value)} onBlur={()=>setEnteredPaymentIdTouched(true)} required />
                                {paymentIdIsInvalid && (
                                <p className="text-red-500 text-xs mt-1 font-bold">Payment Id should not be empty.</p>
                            )}
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