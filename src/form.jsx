import React from "react";

export class Form extends React.Component {
  constructor() {
    super();
    this.state = {
        firstName: "",
        lastName: "",
        emailid:" ",
        Address:"",
        State:"",
        gender:"",
        agree:"",
    };
  }
  inputChangeHandler = (e) => {
    this.setState({
        [e.target.name] :e.target.value        //previous value:current value input from the keyboard;
    })
};

render() {
  return (
<div className="Aman">
<h1>Form</h1>
         <hr/>
        <form>
      
       FirstName: <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={(e) => {
            this.inputChangeHandler(e);
          }}
        /><br/><br/><br/>

       LastName: <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={(e) => {
            this.inputChangeHandler(e);
          }}
        /><br/><br/><br/>
      
      E-mail: <input
          type="text"
          name="emailid"
          value={this.state.emailid}
          onChange={(e) => {
            this.inputChangeHandler(e);
          }}
        /><br/><br/><br/>

        Address: <input
          type="text"
          name="Address"
          value={this.state.Address}
          onChange={(e) => {
            this.inputChangeHandler(e);
          }}
        /><br/><br/><br/>

            State : <select
                    name = "state"
                    onChange = { e => {
                        this.inputChangeHandler(e);
                    }}
                    >
                        <option
                            value = "Delhi"
                        >Delhi</option>

                        <option
                            value = "Ghaziabad"
                        >Ghaziabad</option>

                        <option
                            value = "Noida"
                        >Noida</option>

                    </select> <br></br><br></br>
     
        Gender : <input
                    type = "radio"
                    name = "gender"
                    value = "Male"
                    onChange = { e => {
                        this.inputChangeHandler(e);
                    }}
                /> <br/>Male

                <input
                    type = "radio"
                    name = "gender"
                    value = "FeMale"
                    onChange = { e => {
                        this.inputChangeHandler(e);
                    }}
                />FeMale <br></br><br></br>

                <input
                    type = "checkbox"
                    name = "terms"
                    value = {true}
                    onChange = { e => {
                        this.inputChangeHandler(e);
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