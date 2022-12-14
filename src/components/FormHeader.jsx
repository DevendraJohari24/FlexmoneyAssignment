import React, { Fragment } from "react";


function FormHeader() {
    return (<Fragment>
        <div className="flex justify-evenly">
            <div className="items-center pt-20">
                <h1 className="md:text-4xl text-2xl font-bold dark:text-black">Yoga Class Admission Form</h1>
            </div>
            <div className="w-50 h-50">
                <img className="" width={200} height={200} src={process.env.PUBLIC_URL + '/yogaImage.png'} alt="yoga" />
            </div>
        </div>
    </Fragment>);
}

export default FormHeader;