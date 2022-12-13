import React, { Fragment } from "react"
import FormBody from "./FormBody";
import FormHeader from "./FormHeader";

function AdmissionForm(){
    
    return (
        <Fragment>
            <div className="flex flex-col bg-green-100 max-w-6xl mx-auto mt-5 p-10 border-2 border-sky-500">
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

export default AdmissionForm
