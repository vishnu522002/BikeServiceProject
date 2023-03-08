import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createservicedetails, readbikenumber } from "./Connect"


export const Newservicedetail=()=>
{
    const navi=useNavigate()
    const[process,setProcess]=useState({
        "bikeJobcardno":0,
        "bikeIssues":[],
        "bikeDateofservice":"",
        "bikeKilometer":0,
        "bikeStatus":"",
        "bikeTypeofservice":"",
        "bikeEstimatecharge":0,
        "bikeNewproductcost":0,
        "bikeLabourcharge":0,
        "bikeFinalamount":0,
        "bikedetails1":""
    })
    const[issues,setIssue]=useState("");

    const tracking=(myvalues)=>
    {   
        setIssue(myvalues.target.value)
    }
    const regis=async()=>
    {
        const bikenumber=await readbikenumber(process.bikedetails1);
        process.bikedetails1=bikenumber.data;
        process.bikeIssues=issues.split(",");
        const t=await createservicedetails(process);
        alert(t.data);
        // navi("/listallservicedetails")       
    }
    

    const track=(data)=>
    {
        const{name,value}=data.target
        setProcess(
            (old)=>
            {
                return{
                    ...old,
                    [name]:value
                }
            }
        )
    }

    return(
        <>
         <div id="servicebg">
            <span id="service"></span>
         <div className="container"  >
                <h1 className="text-center  fs-5 mt-5" id="texting" >New ServiceDetails Generated</h1>
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-9 col-sm-12 p-4 shadow-lg rounded-5">
                        <div className="form group">
                            <label>BikeJobcardNumber</label>
                            <input type="text" 
                            className="form-control" 
                            placeholder="Automatic"  
                            onChange={track}
                            value={process.bikeJobcardno}
                            name="bikeJobcardno"
                            />
                        </div>
                        <div className="form group">
                            <label>BikeIssues </label>
                            <input type="text" 
                            placeholder="Problems" 
                            onChange={tracking}
                            value={issues.bikeIssues}
                            className="form-control" 
                            name="bikeIssues"  />
                        </div>
                        <div className="form group">
                            <label>BikeDateofService </label>
                            <input type="date" 
                            placeholder="yyyy-mm-dd" 
                            onChange={track}
                            value={process.bikeDateofservice}
                            className="form-control" 
                            name="bikeDateofservice"  />
                        </div>
                        <div className="form group">
                            <label>BikeKilometer </label>
                            <input type="number" 
                            placeholder="2334566" 
                            className="form-control" 
                            onChange={track}
                            value={process.bikeKilometer}
                            name="bikeKilometer"  />
                        </div>
                        <div className="form group">
                            <label>BikeStatus</label>
                            <input type="text" 
                            placeholder="approved/Success/Process" 
                            className="form-control"
                            onChange={track}
                            value={process.bikeStatus} 
                            name="bikeStatus"  />
                        </div>
                        <div className="form group">
                            <label>BikeTypeofservice </label>
                            <input type="text" 
                            placeholder="Paid/free" 
                            className="form-control"
                            onChange={track}
                            value={process.bikeTypeofservice} 
                            name="bikeTypeofservice"  />
                        </div>
                        <div className="form group">
                            <label>bikeEstimatecharge </label>
                            <input type="number" 
                            placeholder="salary for employee" 
                            className="form-control"
                            onChange={track}
                            value={process.bikeEstimatecharge} 
                            name="bikeEstimatecharge"  />
                        </div>
                        <div className="form group">
                            <label>bikeNewproductcost </label>
                            <input type="number" 
                            placeholder="salary for employee" 
                            className="form-control"
                            onChange={track}
                            value={process.bikeNewproductcost} 
                            name="bikeNewproductcost"  />
                        </div>
                        <div className="form group">
                            <label>BikeLabourcharge </label>
                            <input type="number" 
                            placeholder="salary for employee" 
                            className="form-control"
                            onChange={track}
                            value={process.bikeLabourcharge} 
                            name="bikeLabourcharge"  />
                        </div>
                        <div className="form group">
                            <label>bikeFinalamount </label>
                            <input type="number" 
                            placeholder="salary for employee" 
                            className="form-control"
                            onChange={track}
                            value={process.bikeFinalamount} 
                            name="bikeFinalamount"  />
                        </div>
                        <div className="form group">
                            <label>BikeDetails </label>
                            <input type="text" 
                            placeholder="Enter your bike no" 
                            className="form-control"
                            onChange={track}
                            value={process.bikedetails1} 
                            name="bikedetails1"  />
                        </div>
                        <div className="mt-3 row justify-content-around">
                            <button className="btn btn-outline-info col-2" onClick={regis} >
                                Added ServiceDetails
                                <i class="bi bi-database-add"></i>
                            </button>
                            <button className="btn btn-outline-dark col-2" type="reset" value="Cancel">
                                Cancelled ServiceDetails
                                <i class="bi bi-x-octagon-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}