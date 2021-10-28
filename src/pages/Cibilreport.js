import React,{useState} from 'react'

const Cibilreport = (props) => {

    const [fname, setFname] = useState("");
    const [phone,setPhone]=useState("");
    const [pan,setPan]=useState("");
    const [email,setEmail]=useState("");
    const[date,setDate]=useState("");
    const[street,setStreet]=useState("");
    const [pin,setPin]=useState("");
    return (
        <div>
            <h1>Pramod</h1>
            <div className='row' style={{marginLeft:"6%"}}>
            <label for="name" style={{marginLeft:"10%"}}>Full Name</label><br/>
            <label for="name" style={{marginLeft:"18%"}}>Mobile Number</label><br/>
            <label for="name" style={{marginLeft:"15.5%"}}>PAN Number</label><br/>
          
            </div>
            <div className='row' style={{marginLeft:"8%"}}>
            <input  style={{marginBottom:"15%",marginLeft:"8%"}} type="text" value={fname} placeholder="Full Name" onChange={(e)=>{
                setFname(e.target.value)
            }} /><br/>
            
            <input style={{marginBottom:"15%",marginLeft:"8%"}} type="text" value={phone} placeholder="Mobile Number" onChange={(e)=>{
                setPhone(e.target.value)
            }} /><br/>
          
            <input style={{marginBottom:"15%",marginLeft:"8%"}} type="text" value={pan} placeholder="PAN Number" onChange={(e)=>{
                setPan(e.target.value)
            }} /><br/>
           
          
            </div>
            <div className='row' style={{marginLeft:"6%",marginTop:'-5%'}}>
            <label for="name" style={{marginLeft:"10%"}}>Email</label><br/>
            <label for="name" style={{marginLeft:"18%"}}>DOB</label><br/>
            <label for="date" style={{marginLeft:"19%"}}>Street Address</label><br/>
            
           
            </div>
            <div className='row' style={{marginLeft:"15%"}}>
            <input style={{marginBottom:"15%"}} type="email" value={email} placeholder="Email" onChange={(e)=>{
                setEmail(e.target.value)
            }} /><br/>
            
            <input id="date" style={{marginBottom:"15%",marginLeft:"6%"}} type="date" value={date} placeholder="DOB" onChange={(e)=>{
                setDate(e.target.value)
            }} /><br/>
          
            <input style={{marginBottom:"15%",marginLeft:"8%"}} type="text" value={street} placeholder="Street" onChange={(e)=>{
                setStreet(e.target.value)
            }} /><br/>
           
          
            </div>
            <div style={{marginBottom:"10%",marginLeft:"10%"}}>
                <label for="pin">PIN CODE</label>
              
                <input id="pin" name="pin" placeholder="PIN CODE" value={pin} onChange={(e)=>{
                    setPin(e.target.value)
                }}/>
                <br/>
                <label for="typeofad">Type of Address</label>
                <select value="00" name="typeofad" id="typeofad" >
  <option value="01">Permanent Address</option>
  <option value="02">Residence Address</option>
  <option value="03">Office Address</option>
  <option value="04">Not Categorized</option>
</select>
</div>
          
        <button className="btn text-center">Download Cibil Report</button>    
        
        </div>

    )
}

export default Cibilreport
