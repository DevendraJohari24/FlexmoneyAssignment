import { Fragment, useEffect, useState } from "react";
import Navbar from "../UI/Navbar/Navbar";


const RegisteredList = () => {
    const [allPlans, setAllPlans] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getPlans = async() => {
            setIsLoading(true);

            await fetch("/api/plans")
            .then((response)=>response.json())
            .then((data)=>{
                const plans = data.plan;
                const planItems = [];
                for(const key in plans){
                    planItems.push({
                        id: plans[key]._id.toString(),
                        fname: plans[key].fname,
                        lname: plans[key].lname,
                        email: plans[key].email,
                        areaCode: plans[key].areaCode,
                        phoneNumber: plans[key].phoneNumber,
                        dob: plans[key].dob,
                        gender: plans[key].gender,
                        schedule: plans[key].schedule,
                        level: plans[key].level,
                        session: plans[key].session,
                        paymentId:plans[key].paymentId,
                        paymentDate: plans[key].paymentDate,
                    });
                }
                setAllPlans(planItems);
                setIsLoading(false);
            });
        };
        getPlans();
    }, []);

    if(isLoading){
        return (
            
            <div>
                <Navbar/>
                <p className="text-white">Loading...............</p>
            </div>
        );
    }
    if (allPlans.length === 0){
        return (
            <Fragment>
                <Navbar />
                <p>No Data yet...</p>
            </Fragment>
        );
    }
    return (
        <Fragment>
            <Navbar />
            <div className="bg-red-100 md:max-w-8xl md:mx-auto">
            <table className="table-auto m-5 border-collapse border border-slate-500">
                <thead>
                    <tr>
                        <th className="p-2 border border-slate-600">Index</th>
                        <th className="p-2 border border-slate-600">First Name</th>
                        <th className="p-2 border border-slate-600">Last Name</th>
                        <th className="p-2 border border-slate-600">Phone Number</th>
                        <th className="p-2 border border-slate-600">Email</th>
                        <th className="p-2 border border-slate-600">Gender</th>
                        <th className="p-2 border border-slate-600">DOB</th>
                        <th className="p-2 border border-slate-600">Schedule</th>
                        <th className="p-2 border border-slate-600">Class Level</th>
                        <th className="p-2 border border-slate-600">Session Package</th>
                        <th className="p-2 border border-slate-600">Payment DateTime</th>
                    </tr>
                </thead>
                <tbody>
                    {allPlans.map((plan, index) => {
                        return (
                                <tr key={index}>
                                    <td className="p-2 border border-slate-700">{index + 1}</td>
                                    <td className="p-2 border border-slate-700">{plan.fname}</td>
                                    <td className="p-2 border border-slate-700">{plan.lname}</td>
                                    <td className="p-2 border border-slate-700">{plan.phoneNumber}</td>
                                    <td className="p-2 border border-slate-700">{plan.email}</td>
                                    <td className="p-2 border border-slate-700">{plan.gender}</td>
                                    <td className="p-2 border border-slate-700">{plan.dob}</td>
                                    <td className="p-2 border border-slate-700">{plan.schedule}</td>
                                    <td className="p-2 border border-slate-700">{plan.level}</td>
                                    <td className="p-2 border border-slate-700">{plan.session}</td>
                                    <td className="p-2 border border-slate-700">{plan.paymentDate}</td>
                                </tr>
                        );
                    })}
                </tbody>
                </table>
            </div>
        </Fragment>
    );
}

export default RegisteredList;