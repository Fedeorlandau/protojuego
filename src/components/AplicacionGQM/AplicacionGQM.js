import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-slider/assets/index.css';
import './style.css'
import Tree from 'react-animated-tree'

const treeStyles = {
  position: 'absolute',
  top: 80,
  left: 80,
  color: 'white',
  fill: 'white',
  width: '100%'
}

export default class AplicacionGQMComponent extends Component {
  render() {
    return (
    <div className="AplicacionGQM-container">
    <div>
    <h1>Aplicacion GQM</h1>
    <br></br>
    </div>
      <Tree content="Casos de estudio" open style={treeStyles}>
      <Tree content="Quateams CRM: procesos" type="CASO">
          <Tree content="Mejorar el proceso de seguimiento de los documentos que utilizan y envían los clientes de la institución para poder elaborar un análisis financiero desde el punto de vista de los empleados de la IIF. " type="GOAL" style={{ color: 'GREEN' }}>
            <Tree content="¿Cuantos documentos gestionados por los clientes pueden ser visualizados por parte de los empleados de la IIF?" type="QUESTION" style={{ color: '#63b1de' }}>
              <Tree content="Cantidad de documentos que pueden ser gestionados por cliente."  type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Cantidad de clientes totales."   type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Cantidad de documentos enviados por mes."  type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Tiempo promedio de vigencia de cada documento."  type="METRICS" style={{ color: 'GREY' }} />
            </Tree>
            <Tree content="¿Sobre qué datos se realizan los análisis financieros?" type="QUESTION" style={{ color: '#63b1de' }}>
              <Tree content="Cantidad de ventas realizadas por cliente por mes." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Cantidad de auditorías realizadas por mes a cada cliente." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Número de visitas de cada documento publicado." type="METRICS" style={{ color: 'GREY' }} />
            </Tree>
            <Tree content="¿Cuales son las transacciones que se realizan con mayor frecuencia por parte de los clientes provenientes del exterior?" type="QUESTION" style={{ color: '#63b1de' }}>
              <Tree content="Cantidad de clientes totales." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Número de visitas de cada documento publicado." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Total de miembros provenientes del exterior." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Porcentaje de transacciones realizadas por miembros provenientes del exterior." type="METRICS" style={{ color: 'GREY' }} />
            </Tree>
            <Tree content="¿El análisis financiero generado resulta útil para los clientes de la IIF?" type="QUESTION" style={{ color: '#63b1de' }}>
              <Tree content="Cantidad de clientes totales." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Porcentaje de crecimiento de clientes por mes." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Tasa de ganancia anual de los miembros." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Cantidad de miembros que dejan de ser parte de la IIF por año." type="METRICS" style={{ color: 'GREY' }} />
            </Tree>
          </Tree>
        </Tree>
        <Tree content="Fundacion Valle del Lili: recursos" type="CASO">
          <Tree content="Mejorar el tiempo de acceso a las historias clínicas de los pacientes del hospital desde el punto de vista de los médicos y personal administrativo" type="GOAL" style={{ color: 'GREEN' }} >
            <Tree content="¿Cómo se realiza el trabajo administrativo actualmente?" type="QUESTION" style={{ color: '#63b1de' }}>
              <Tree content="Cantidad de personal dedicado exclusivamente a realizar tareas administrativas."  type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Cantidad de formularios a llenar por cada tipo de personal."  type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Tiempo que le demanda a cada usuario realizar una tarea administrativa."  type="METRICS" style={{ color: 'GREY' }} />
            </Tree>
            <Tree content="¿Cómo son las interacciones entre el personal del hospital?" type="QUESTION" style={{ color: '#63b1de' }}>
              <Tree content="Cantidad de formularios a llenar por cada tipo de personal."  type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Tiempo empleado en la comunicación entre las distintas áreas del hospital."  type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Cantidad de empleados involucrados en cada tarea."  type="METRICS" style={{ color: 'GREY' }} />
            </Tree>
            <Tree content="¿Qué mejoras puede implicar la sistematización de las HC?" type="QUESTION" style={{ color: '#63b1de' }}>
              <Tree content="Tiempo que le demanda a cada usuario realizar una tarea administrativa." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Cantidad de documentos extraviados." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Frecuencia con la que se utiliza cada historia clínica." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Promedio de errores de interpretación de documentos." type="METRICS" style={{ color: 'GREY' }} />
            </Tree>
            <Tree content="¿Cómo se puede facilitar la integración entre el nuevo sistema y los usuarios?" type="QUESTION" style={{ color: '#63b1de' }}>
              <Tree content="Tiempo que le demanda a cada trabajador realizar una tarea administrativa."  type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Cantidad de usuarios utilizando algún sistema digital en la actualidad."  type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Cantidad de personal familiarizado con el uso de una computadora."  type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Cantidad de personal dispuesto a realizar una capacitación."  type="METRICS" style={{ color: 'GREY' }} />
            </Tree>
            <Tree content="¿Cuánto tiempo de espera se le puede ahorrar a cada paciente con la implementación del nuevo sistema?" type="QUESTION" style={{ color: '#63b1de' }}>
              <Tree content="Cantidad de documentos extraviados."  type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Tiempo que demanda encontrar la historia clínica de un paciente."  type="METRICS" style={{ color: 'GREY' }} />
            </Tree>
          </Tree>
        </Tree><Tree content="Teradyne: producto" type="CASO">
          <Tree content="Mejorar la precisión de las estimaciones de desarrollo mediante el uso de una herramienta de gestión de proyectos desde el punto de vista del Project manager." type="GOAL" style={{ color: 'GREEN' }}>
            <Tree content="¿Cuánto desvío de tiempo tienen los proyectos desarrollados actualmente?" type="QUESTION" style={{ color: '#63b1de' }}>
              <Tree content="Porcentaje de proyectos con desvío utilizando herramientas de gestión de proyectos." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Porcentaje de proyectos con desvío sin utilizar herramientas de gestión de proyectos." type="METRICS" style={{ color: 'GREY' }} />
            </Tree>
            <Tree content="¿El uso de una herramienta de gestión de proyectos mejora la estimación de los proyectos?" type="QUESTION" style={{ color: '#63b1de' }}>
              <Tree content="Cantidad de proyectos con desvío (umbral de desvío mayor al 5%) utilizando la herramienta."  type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Promedio de horas de trabajo dedicadas a la utilización de la herramienta en cada proyecto. (Overhead)"  type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Porcentaje de tareas estimadas como cuello de botella vs. tareas reales."  type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Porcentaje de desvío en estimación de tres puntos"  type="METRICS" style={{ color: 'GREY' }} />
            </Tree>
            <Tree content="¿Cuánto aumento de costos tienen los proyectos que utilizan la herramienta de gestión de proyectos?" type="QUESTION" style={{ color: '#63b1de' }}>
              <Tree content="Porcentaje de proyectos con desvío utilizando herramientas de gestión de proyectos." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Promedio de reasignación de personal a proyectos en curso." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Cantidad de horas extras pagadas." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Cantidad de horas de capacitación en la herramienta de gestión de proyectos."  type="METRICS" style={{ color: 'GREY' }} />
            </Tree>
            <Tree content="¿Qué problemas puede generar la utilización de una herramienta de gestión de proyectos?" type="QUESTION" style={{ color: '#63b1de' }}>
              <Tree content="Cantidad de proyectos con desvío (umbral de desvío mayor al 5%) utilizando la herramienta." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Porcentaje de tareas estimadas como cuello de botella vs. tareas reales." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Porcentaje de desvío en estimación de tres puntos." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Porcentaje de horas insumidas en la utilización de la herramienta de gestión de proyectos por proyecto." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Cantidad de interpretaciones erróneas subjetivas por parte del project manager de la herramienta por proyecto." type="METRICS" style={{ color: 'GREY' }} />
            </Tree>
            <Tree content="¿La herramienta de gestión de proyectos permite identificar desvíos a tiempo?" type="QUESTION" style={{ color: '#63b1de' }}>
              <Tree content="Cantidad de proyectos con desvío (umbral de desvío mayor al 5%) utilizando la herramienta." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Porcentaje de tareas estimadas como cuello de botella vs. tareas reales." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Cantidad de interpretaciones erróneas subjetivas por parte del project manager de la herramienta por proyecto." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Cantidad de re-estimaciones realizadas en proyectos que utilizan herramienta de gestión de proyectos." type="METRICS" style={{ color: 'GREY' }} />
            </Tree>
          </Tree>
        </Tree>
      </Tree>
    </div>
    );
  }
}