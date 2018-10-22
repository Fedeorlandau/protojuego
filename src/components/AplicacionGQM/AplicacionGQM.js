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
      <Tree content="CASOS DE ESTUDIO" open style={treeStyles}>
      <Tree content="QUATEAMS" >
          <Tree content="G: Poder gestionar de forma dinámica los miembros del IIF desde la aplicación.">
            <Tree content="Q: ¿El sistema contempla el crecimiento abrupto de usuarios?" style={{ color: '#63b1de' }}>
              <Tree content="M: Total de miembros activos en la aplicación."  />
              <Tree content="M: Porcentaje de aumento de miembros por mes."  />
              <Tree content="M: Estimaciones sobre el crecimiento paulatino de miembros."  />
            </Tree>
            <Tree content="Q: ¿El acceso a la información es relativamente rápido por parte de los miembros?" style={{ color: '#63b1de' }}>
              <Tree content="M: Tiempo de respuesta de cada consulta a la base de datos."  />
              <Tree content="M: Tablas a las que se accede con mayor frecuencia en la Base de Datos. "  />
              <Tree content="M: Cantidad de consultas simultáneas soportadas por el servidor."  />
              <Tree content="M: Costos mensuales/anuales de los servidores."  />
            </Tree>
            <Tree content="Q: ¿Se contempla dentro del sistema el acceso de usuarios provenientes del exterior?" style={{ color: '#63b1de' }}>
              <Tree content="M: Cantidad de miembros activos en la aplicación."  />
              <Tree content="M: Cantidad de usuarios provenientes del exterior."  />
              <Tree content="M: Tiempos de respuesta del servidor."  />
              <Tree content="M: Cantidad de consultas simultáneas soportadas por el servidor."  />
            </Tree>
            <Tree content="Q: ¿A qué información acceden los miembros?" style={{ color: '#63b1de' }}>
              <Tree content="M: Número de visitas de cada documento publicado."  />
              <Tree content="M: Cantidad de audiencias por mes realizadas por la IIF."  />
            </Tree>
            <Tree content="Q: ¿Saben los miembros cuál es su estado de cuenta?" style={{ color: '#63b1de' }}>
              <Tree content="M: Tablas a las que se accede con mayor frecuencia en la Base de Datos. "  />
              <Tree content="M: Tiempo que se tarda en consultar los pagos."  />
              <Tree content="M: Número de pagos registrados."  />
            </Tree>
          </Tree>
        </Tree>
        <Tree content="FVL">
          <Tree content= "G: Mejorar el tiempo de acceso a las historias clínicas de los pacientes del hospital desde el punto de vista de los médicos y personal administrativo">
            <Tree content="Q: ¿Cómo se realiza el trabajo administrativo actualmente?" style={{ color: '#63b1de' }}>
              <Tree content="M: Cantidad de personal dedicado a tareas administrativas." />
              <Tree content="M: Cantidad de formularios a llenar por cada tipo de personal." />
              <Tree content="M: Tiempo que le demanda a cada usuario realizar una tarea administrativa." />
            </Tree>
            <Tree content="Q: ¿Cómo son las interacciones entre el personal del hospital?" style={{ color: '#63b1de' }}>
              <Tree content="M: Tiempo empleado en la comunicación." />
              <Tree content="M: Cantidad de empleados involucrados en cada tarea." />
              <Tree content="M: Cantidad de formularios a llenar por cada tipo de personal." />
            </Tree>
            <Tree content="Q: ¿Qué mejoras puede implicar la sistematización de las HC?" style={{ color: '#63b1de' }}>
              <Tree content="M: Estimación de documentos extraviados."  />
              <Tree content="M: Frecuencia con las que se utiliza cada historia clínica."  />
              <Tree content="M: Promedio de errores de interpretación de documentos."  />
            </Tree>
            <Tree content="Q: ¿Cómo pueden llegar a reaccionar los usuarios ante el nuevo sistema?" style={{ color: '#63b1de' }}>
              <Tree content="M: Edad promedio de los médicos del hospital." />
              <Tree content="M: Tiempo de antigüedad promedio del personal del hospital." />
            </Tree>
            <Tree content="Q: ¿Cuánto dinero se puede ahorrar con la sistematización de la facturación?" style={{ color: '#63b1de' }}>
              <Tree content="M: Cantidad de insumos utilizados en las cirugías." />
              <Tree content="M: Cantidad de facturas rechazadas por aseguradoras." />
            </Tree>
          </Tree>
        </Tree><Tree content="TERADYNE">
          <Tree content= "G: Mejorar la precisión de las estimaciones de desarrollo mediante el uso de una herramienta de gestión de proyectos desde el punto de vista del Project manager.">
            <Tree content="Q: ¿Cuánto desvío de tiempo tienen los proyectos desarrollados actualmente?" style={{ color: '#63b1de' }}>
              <Tree content="M: Porcentaje de proyectos con desvío utilizando herramientas de gestión de proyectos."  />
              <Tree content="M: Porcentaje de proyectos con desvío sin utilizar herramientas de gestión de proyectos."  />
            </Tree>
            <Tree content="Q: ¿El uso de una herramienta de gestión de proyectos mejora la estimación de los proyectos?" style={{ color: '#63b1de' }}>
              <Tree content="M: Cantidad de proyectos con desvío (umbral de desvío mayor al 5%) utilizando la herramienta." />
              <Tree content="M: Promedio de horas de trabajo dedicadas a la utilización de la herramienta en cada proyecto. (Overhead)" />
              <Tree content="M: Porcentaje de tareas estimadas como cuello de botella vs. tareas reales." />
              <Tree content="M: Porcentaje de desvío en estimación de tres puntos" />
            </Tree>
            <Tree content="Q: ¿Cuánto aumento de costos tienen los proyectos que utilizan la herramienta de gestión de proyectos?" style={{ color: '#63b1de' }}>
              <Tree content="M: Porcentaje de proyectos con desvío utilizando herramientas de gestión de proyectos."  />
              <Tree content="M: Promedio de reasignación de personal a proyectos en curso."  />
              <Tree content="M: Cantidad de horas extras pagadas."  />
              <Tree content="M: Cantidad de horas de capacitación en la herramienta de gestión de proyectos." />
            </Tree>
            <Tree content="Q: ¿Qué problemas puede generar la utilización de una herramienta de gestión de proyectos?" style={{ color: '#63b1de' }}>
              <Tree content="M: Cantidad de proyectos con desvío (umbral de desvío mayor al 5%) utilizando la herramienta."  />
              <Tree content="M: Porcentaje de tareas estimadas como cuello de botella vs. tareas reales."  />
              <Tree content="M: Porcentaje de desvío en estimación de tres puntos."  />
              <Tree content="M: Porcentaje de horas insumidas en la utilización de la herramienta de gestión de proyectos por proyecto."  />
              <Tree content="M: Cantidad de interpretaciones erróneas subjetivas por parte del project manager de la herramienta por proyecto."  />
            </Tree>
            <Tree content="Q: ¿La herramienta de gestión de proyectos permite identificar desvíos a tiempo?" style={{ color: '#63b1de' }}>
              <Tree content="M: Cantidad de proyectos con desvío (umbral de desvío mayor al 5%) utilizando la herramienta."  />
              <Tree content="M: Porcentaje de tareas estimadas como cuello de botella vs. tareas reales."  />
              <Tree content="M: Cantidad de interpretaciones erróneas subjetivas por parte del project manager de la herramienta por proyecto."  />
              <Tree content="M: Cantidad de re-estimaciones realizadas en proyectos que utilizan herramienta de gestión de proyectos."  />
            </Tree>
          </Tree>
        </Tree>
      </Tree>
    </div>
    );
  }
}

