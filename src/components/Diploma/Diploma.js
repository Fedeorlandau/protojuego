




import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-slider/assets/index.css'; 
import 'react-toastify/dist/ReactToastify.css'; 
import GlobalVariable from '../GlobalVariable/GlobalVariable'
import jsPDF from 'jspdf';


export default class EstimacionesComponent extends Component {
    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.diploma = React.createRef();
      }
  render() {
    return (
        <div  ref={this.diploma}>
            <div  >
                <div  >
                <span  >Certificate of Completion</span>
                <br/> 
                <span ><i>Certificado de completitud</i></span>
                <br/> 
                <span ><b>Se acredita que el/la estudiante {GlobalVariable.userName}</b></span><br/><br/>
                <span  ><i>Completó satisfactoriamente todos los cursos formativos</i></span> <br/><br/>
                <span  ></span> <br/><br/>
                <span ></span> <br/><br/><br/><br/>
                <span  ></span> 
                <span  ></span>
                </div>
       
            </div> 
            <input  type="button" onClick={() => { this.downloadDiploma()}} value="descargame crak"/>
        </div>
    );
  }

  
  downloadDiploma() {
    var doc = new jsPDF();
    var specialElementHandlers = {
        '#editor': function (element, renderer) {
            return true;
        }
    }; 

    console.log(this.diploma);
    doc.fromHTML(this.diploma.html(), 15, 15, { 
        'width': 170,
        'elementHandlers': specialElementHandlers
    });
    doc.save('sample-file.pdf'); 
  }

}