import React from 'react';
import Charts from './chart'





function ContainerChart() {
  function toggleClass(e){
    let classes = 'opcionesMeses';
    let els = document.getElementsByClassName('selected');
    console.log(els[0]);
    if(els){
        while (els[0]) {
            els[0].classList.remove('selected')
        }
    }
    e.currentTarget.className = classes.replace('opcionesMeses','opcionesMeses selected');
}

    return( 
        <div id="grafico">
        <div className="containerGrafico">
          <div className="containerIntermedio">
            <div className="meses">
              <div className="iconoNext">
                <img src={require('../images/nextL.svg')} />
              </div>
              <div className="opcionesMeses"
              onClick={(e) =>toggleClass(e)}
              >
                <button className="mes" >Enero<span className="minValueMes">desde AR$15000</span></button>
              </div>
              <div className="opcionesMeses"
              onClick={(e) =>toggleClass(e)}
              >
                <button className="mes">Febrero <span className="minValueMes">desde AR$15000</span></button>
              </div>
              <div className="opcionesMeses selected"
              onClick={(e) =>toggleClass(e)}
              >
                <button className="mes ">Marzo<span className="minValueMes ">desde AR$15000</span></button>
              </div>
              <div className="opcionesMeses"
              onClick={(e) =>toggleClass(e)}
              >
                <button className="mes">Abril<span className="minValueMes">desde AR$15000</span></button>
              </div>
              <div className="opcionesMeses"
              onClick={(e) =>toggleClass(e)}
              >
                <button className="mes">Mayo <span className="minValueMes">desde AR$15000</span></button>
              </div>
              <div className="iconoNext">
               <img src={require('../images/nextR.svg')} />
              </div>
            </div>
            <div className="chart-container">
              <Charts></Charts>
              
            </div>
            <div className="leyendaFinal">
              <p className="minValueMes">
                Tarifa por adulto para una estadía mínima de 14 días
              </p>
              <p className="minValueMes">
                Los precios visualizados son los mejores encontrados por los usuarios en los últimos días y podrían no estar actualizados
              </p>
            </div>

          </div>  
        </div>
        
    </div>
 


    )
}
export default ContainerChart;
