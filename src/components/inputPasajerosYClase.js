import React, {Component} from 'react';
import Popup from "reactjs-popup";



class InputPopUP extends Component{


     state={
        pasajeros:0,
        clase:"clase",
        

     }


 changeclass(cl){
    
    this.setState({clase:cl})
    console.log(this.state);
    
}


changetraveler(op){
 
    if(op=="+"){
        this.setState({pasajeros:this.state.pasajeros+1})
    }else{
        if(this.state.pasajeros != 0 ){
            this.setState({pasajeros:this.state.pasajeros-1})
        }
    }
    
}

render(){
    return(
    <Popup trigger={ <input type="text" name="pasajeros" placeholder="0 Pasajeros, Clase"
   value={this.state.pasajeros+" pasajeros, "+this.state.clase}
    />} modal >
           {close => (
      <div >
                <div className="card-body">
                    <div className="partePasajeros">
                        <label for="pasajeros">Pasajeros:</label>
                         <div id="pasajeros" className="row"> 
                            <div  className="col-sm-4">
                                <button type="button" onClick={()=>this.changetraveler("-")}
                                        className="btn btn-outline-primary waves-effect" >&minus;</button>
                            </div>
                            <div className="col-sm-4"><span>{this.state.pasajeros}</span></div>
                            <div className="col-sm-4">
                                <button type="button"
                                onClick={()=>this.changetraveler("+")}
                                    className="btn btn-outline-primary waves-effect">+</button>
                            </div>
                        </div>
                    </div>
                  
                    <div className="partePasajeros">
                        <label for="Clase">Clase:</label>
                        <select className="selectClase" id="Clase">
                            <option onClick={()=>this.changeclass("Económica")}>Economy</option>
                            <option onClick={()=>this.changeclass("Business")} >Business</option>
                            <option onClick={()=>this.changeclass("Premium")} >Premium</option>
                            <option onClick={()=>this.changeclass("Primera Clase")}>First</option>
                        </select>   
                    </div>          
                    <button onClick={()=>close()} type="button" className="btn btn-outline-primary aplicar">Aplicar</button>           
                </div>
                
            </div>
           )}
    </Popup>
         
  )}}




export default InputPopUP;