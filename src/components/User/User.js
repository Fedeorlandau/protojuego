export default class User  {

  static setName = (name) => {     
    if(!localStorage.getItem('user') || localStorage.getItem('user') !== name) {
      localStorage.setItem('user', name);
      localStorage.setItem('progress', 0);
      localStorage.setItem('courses', JSON.stringify({'items':[ 
        {"name": "Estimaciones", "aproved" : "false"},
        {"name": "Metricas de Software","aproved" :"false"}, 
        {"name": "Simulacion","aproved" :"false"},
        {"name": "Gestion de cambios","aproved" :"false"},
        {"name": "Carreras", "aproved" :"false"} 
      ]}));

      localStorage.setItem('ranking', JSON.stringify({'items':[ 
        {"username": "Dario", "completed" : "100"},
        {"username": "Nico", "completed" : "90"},
        {"username": "Gonza", "completed" : "70"},
        {"username": "Matias", "completed" : "50"},
        {"username": "Fede","completed" :"30"},
        {"username": "Lucas","completed" :"10"},
        {"username": name,"completed" :"0"}
      ]}));

    }
    if(!User.getProgress()) {
      localStorage.setItem('progress', 0);
    }
    if(!User.getCourses()) {
      localStorage.setItem('courses', JSON.stringify({'items':[ 
        {"name": "Estimaciones", "aproved" : "false"},
        {"name": "Metricas de Software","aproved" :"false"}, 
        {"name": "Simulacion","aproved" :"false"},
        {"name": "Gestion de cambios","aproved" :"false"},
        {"name": "Carreras", "aproved" :"false"} 
      ]}));
    }

    if(!User.getRanking())
    {
      localStorage.setItem('ranking', JSON.stringify({'items':[ 
        {"username": "Dario", "completed" : "100"},
        {"username": "Nico", "completed" : "90"},
        {"username": "Gonza", "completed" : "70"},
        {"username": "Matias", "completed" : "50"},
        {"username": "Fede","completed" :"30"},
        {"username": "Lucas","completed" :"10"},
        {"username": name,"completed" :"0"}
      ]}));
    }
  };
  static setProgress = (value) => localStorage.setItem('progress', value);
  static setCourses = (course) => localStorage.setItem('courses', [...localStorage.getItem('courses'), course]);

  static getName = () => localStorage.getItem('user');
  static getProgress = () => localStorage.getItem('progress');
  static getCourses = () => JSON.parse(localStorage.getItem('courses'));
  static getRanking = () => JSON.parse(localStorage.getItem('ranking'));
  static updateProgress = (newAchievement) => {  
    let approvedCount = 0;
    const courses = User.getCourses();  
    const newCourses = courses.items.map(item => { 
      if (item.name === newAchievement){
        item.aproved= "true"; 
      }
      if(item.aproved === "true"){
        approvedCount++;
      }  
      return item;
    });  
    localStorage.setItem('courses',JSON.stringify({'items':newCourses}));  
    var newProgress = (approvedCount/newCourses.length )*100; 
    User.setProgress(newProgress);
    User.updateRanking();
  };
  
  static updateRanking = () => {   
    const ranking = User.getRanking();  
    const newRanking = ranking.items.map(item => { 
      if (item.username === User.getName()){
        item.completed= User.getProgress(); 
      } 
      return item;
    }).sort((a,b) => { 
      if ( parseInt(a.completed,10) < parseInt(b.completed,10)){ 
        return 1;
      }
      if (parseInt(a.completed,10) >parseInt( b.completed,10)){  
        return -1;
      }  
      return 0;
    });  
    localStorage.setItem('ranking',JSON.stringify({'items':newRanking}));  
  };

  static getTentativeProgress =  (newAchievement)  => {
    let approvedCount = 0;
    const courses = User.getCourses();  
    const newCourses = courses.items.map(item => { 
      if (item.name === newAchievement){
        item.aproved= "true"; 
      }
      if(item.aproved === "true"){
        approvedCount++;
      }  
      return item;
    });  
    var newProgress = (approvedCount/newCourses.length )*100; 
    return newProgress;
  };
};