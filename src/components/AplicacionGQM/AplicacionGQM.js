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
          <Tree content="Poder gestionar de forma dinámica los miembros del IIF desde la aplicación." type="GOAL" style={{ color: 'GREEN' }}>
            <Tree content="¿El sistema contempla el crecimiento abrupto de usuarios?" type="QUESTION" style={{ color: '#63b1de' }}>
              <Tree content="Total de miembros activos en la aplicación."  type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Porcentaje de aumento de miembros por mes."   type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Estimaciones sobre el crecimiento paulatino de miembros."  type="METRICS" style={{ color: 'GREY' }} />
            </Tree>
            <Tree content="¿El acceso a la información es relativamente rápido por parte de los miembros?" type="QUESTION" style={{ color: '#63b1de' }}>
              <Tree content="Tiempo de respuesta de cada consulta a la base de datos." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Tablas a las que se accede con mayor frecuencia en la Base de Datos. " type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Cantidad de consultas simultáneas soportadas por el servidor." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Costos mensuales/anuales de los servidores." type="METRICS" style={{ color: 'GREY' }} />
            </Tree>
            <Tree content="¿Se contempla dentro del sistema el acceso de usuarios provenientes del exterior?" type="QUESTION" style={{ color: '#63b1de' }}>
              <Tree content="Cantidad de miembros activos en la aplicación." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Cantidad de usuarios provenientes del exterior." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Tiempos de respuesta del servidor." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Cantidad de consultas simultáneas soportadas por el servidor." type="METRICS" style={{ color: 'GREY' }} />
            </Tree>
            <Tree content="¿A qué información acceden los miembros?" type="QUESTION" style={{ color: '#63b1de' }}>
              <Tree content="Número de visitas de cada documento publicado." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Cantidad de audiencias por mes realizadas por la IIF." type="METRICS" style={{ color: 'GREY' }} />
            </Tree>
            <Tree content="¿Saben los miembros cuál es su estado de cuenta?" type="QUESTION" style={{ color: '#63b1de' }}>
              <Tree content="Tablas a las que se accede con mayor frecuencia en la Base de Datos. " type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Tiempo que se tarda en consultar los pagos." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Número de pagos registrados." type="METRICS" style={{ color: 'GREY' }} />
            </Tree>
          </Tree>
        </Tree>
        <Tree content="FVL: recursos" type="CASO">
          <Tree content="Mejorar el tiempo de acceso a las historias clínicas de los pacientes del hospital desde el punto de vista de los médicos y personal administrativo" type="GOAL" style={{ color: 'GREEN' }} >
            <Tree content="¿Cómo se realiza el trabajo administrativo actualmente?" type="QUESTION" style={{ color: '#63b1de' }}>
              <Tree content="Cantidad de personal dedicado a tareas administrativas."  type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Cantidad de formularios a llenar por cada tipo de personal."  type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Tiempo que le demanda a cada usuario realizar una tarea administrativa."  type="METRICS" style={{ color: 'GREY' }} />
            </Tree>
            <Tree content="¿Cómo son las interacciones entre el personal del hospital?" type="QUESTION" style={{ color: '#63b1de' }}>
              <Tree content="Tiempo empleado en la comunicación."  type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Cantidad de empleados involucrados en cada tarea."  type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Cantidad de formularios a llenar por cada tipo de personal."  type="METRICS" style={{ color: 'GREY' }} />
            </Tree>
            <Tree content="¿Qué mejoras puede implicar la sistematización de las HC?" type="QUESTION" style={{ color: '#63b1de' }}>
              <Tree content="Estimación de documentos extraviados." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Frecuencia con las que se utiliza cada historia clínica." type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Promedio de errores de interpretación de documentos." type="METRICS" style={{ color: 'GREY' }} />
            </Tree>
            <Tree content="¿Cómo pueden llegar a reaccionar los usuarios ante el nuevo sistema?" type="QUESTION" style={{ color: '#63b1de' }}>
              <Tree content="Edad promedio de los médicos del hospital."  type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Tiempo de antigüedad promedio del personal del hospital."  type="METRICS" style={{ color: 'GREY' }} />
            </Tree>
            <Tree content="¿Cuánto dinero se puede ahorrar con la sistematización de la facturación?" type="QUESTION" style={{ color: '#63b1de' }}>
              <Tree content="Cantidad de insumos utilizados en las cirugías."  type="METRICS" style={{ color: 'GREY' }} />
              <Tree content="Cantidad de facturas rechazadas por aseguradoras."  type="METRICS" style={{ color: 'GREY' }} />
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