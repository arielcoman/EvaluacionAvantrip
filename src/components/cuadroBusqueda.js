import React, {Component} from 'react';
import ReactDOM from "react-dom";
import DateRangePicker2 from './airbnb';
import InputPopUP from './inputPasajerosYClase'




  class CuadroBusqueda extends Component {
    constructor(props){
      super(props);
          this.state={
              disable:null,
              
          };
          this.disable = this.disable.bind(this);
          this.enable = this.enable.bind(this);

  }
  disable() {
    this.setState({ disable:'endDate' });
  }

  enable(){
    this.setState({ disable:null});

  }
     toggleClass(e){
      let classes = 'opcion';
      let els = document.getElementsByClassName('Seleccionada');
      console.log(els[0]);
      if(els){
          while (els[0]) {
              els[0].classList.remove('Seleccionada')
          }
      }
      e.currentTarget.className = classes.replace('opcion','opcion Seleccionada');
  }
    
render(){
return( 
    <div id="backImage">
      <div id="busqueda">
        <div className="generalBusqueda">
       
          <div className="contBusqueda">
          
            <div className="opcionesBusqueda">
              <div onClick={(e) =>this.toggleClass(e)} className="opcion Seleccionada">
                <button onClick={this.enable} >IDA Y VUELTA</button>
              </div>
              <div onClick={(e) =>this.toggleClass(e)} className="opcion">
                <button onClick={this.disable}>SOLO IDA</button>
              </div>
              <div onClick={(e) =>this.toggleClass(e)} className="opcion">
                <button>MULTIDESTINO</button>
              </div>		
            </div>
            <div className="form">
              <form className="formBusqueda">							
                <div className="opcionesLugares">
                  <div className="inputLugares">
                    <label>ORIGEN</label>
                      <input type="text" list="cityname" placeholder="Ingresa de donde salis..."/>
                      <datalist id="cityname">
                        <option value="Buenos Aires (EZE)"/>
                        <option value="Buenos Aires (AEP)"/>
                       </datalist>
                  </div>
                  <div className="inputLugares">
                      <label>DESTINO</label>
                      <input type="text" list="cityname2" placeholder="Ingresa hacia donde vas..."/>
                      <datalist id="cityname2">
                        <option value="Nueva York (JFK)"/>
                        <option value="Miami  (MIA)"/>
                       </datalist>
                      
                      
                  </div>	
                        </div> 
                          <div className="opcionesVarias">
                        
                            <div className="inputLugares">
                              <label>FECHAS</label>
                              <DateRangePicker2 disabled={this.state.disable} ></DateRangePicker2>
                              
                            </div>
                            <div className="inputLugares">
                              <label>PASAJEROS Y CLASE</label>
                              <InputPopUP></InputPopUP>
                            </div>
                          </div>			
                <div className="inputsearch">
                  <button type="submit" className="searchButton">
                  <img src={require('../images/search.svg')} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>	
      </div>
	  </div>

    )
 }
}

export default CuadroBusqueda;
