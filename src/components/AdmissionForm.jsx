import React, { Fragment } from "react"
import Navbar from "../UI/Navbar/Navbar";
import FormBody from "./FormBody";
import FormHeader from "./FormHeader";

const  AdmissionForm = () =>{
    
    return (
        <Fragment>
            <Navbar />
            <div className="flex flex-col bg-green-100 md:max-w-6xl md:mx-auto md:mt-5 p-5 border-2 border-sky-500">
                <section>
                    <FormHeader />
                </section>
                <section>
                    <FormBody />
                </section>
            </div>
        </Fragment>
    );

}

export default AdmissionForm;
