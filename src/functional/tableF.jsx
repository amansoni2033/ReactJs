import React  from 'react';

export default function Table(){
    const head=["id","Name","Age"];
    const user=[{
                                    id:1,
                                    name:"Aman",
                                    age:21
    },{
        id:2,
        name:"Arun",
        age:23

    },
    {
        id:3,
        name:"Rajat",
        age:24

    }
        ];
    
    return(
        <div className="Aman">
         
            <table> 
                <thead>
                    <tr>
                    {head.map(e=>
                    <th>{e}</th>
                    )}
                    </tr>
                </thead>

                <tbody>                                       
                {user.map((e)=>
                    <tr>   
                          <td> {e.id}</td>                  
                          <td> {e.name}</td>
                          <td> {e.age}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
        
    )
}



//td-tabledata
