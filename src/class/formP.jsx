import React from 'react';

export class Form extends React.Component{
   
    constructor()
        {
             super();
             this.state={
                 firstName: "",
                 lastName: " ",
                 emailId: " ",
                 address: " ",
                 state: " ",
                 gender:" ",
                 agree:" "

             };
}

handleChange = (e)=>{
    this.setState({
        [e.target.name]: e.target.value
    })
};



render(){
    return(

        <div>
            <form>
               FirstName:<input type="text" name = "firstName" value={this.state.firstName} 
               onChange={(e)=> this.handleChange(e)} /><br></br><br></br>
                

                LastName:<input type="text" name = "lastName" value={this.state.lastName} 
               onChange={(e)=> this.handleChange(e)} /><br></br><br></br>

                
                Email.ID:<input type="text" name = "emailId" value={this.state.emailId} 
               onChange={(e)=> this.handleChange(e)} /><br></br><br></br>

                Address:<input type="text" name = "address" value={this.state.address} 
               onChange={(e)=> this.handleChange(e)} /><br></br><br></br>

               
               
                State: <select>
                    name = "state"
                    onChange = { (e) => this.handleChange(e) } 
                       
                        <option value = "Delhi" >Delhi</option>
                        <option value = "Ghaziabad" >Ghaziabad</option>
                         <option value = "Noida"  >Noida</option>

                    </select> <br></br><br></br>

                   
                  
                Gender : <input
                    type = "radio"
                    name = "gender"
                    value = "Male"
                    onChange = { (e)=> {
                        this.handleChange(e);
                    }}
                /> <br/>Male

                <input
                    type = "radio"
                    name = "gender"
                    value = "FeMale"
                    onChange = { e => {
                        this.handleChange(e);
                    }}
                />FeMale <br></br><br></br>

                <input
                    type = "checkbox"
                    name = "terms"
                    value = {true}
                    onChange = { e => {
                        this.handleChange(e);
                    }}
                />Terms and Conditions Applied <br/><br/>    

                  <button onClick={()=>{alert(JSON.stringify(this.state))}} >
                  Submit
                 </button>
        
             </form> 
        
        </div>

    );
}

             
}
        
    
