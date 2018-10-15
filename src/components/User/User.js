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
        {"name": "GQM", "aproved" :"false"} 
      ]}));

    }
    if(!User.getProgress()) {
      localStorage.setItem('progress', 0);
    }
    if(!User.getCourses()) {
      localStorage.setItem('courses', JSON.stringify({items:[ 
        {name: 'Estimaciones', aproved : 'false'},
        {name: 'Metricas de Software',aproved :'false'}, 
        {name: 'Simulacion',aproved :'false'},
        {name: 'Gestion de cambios',aproved :'false'} ,
        {name: 'GQM', aproved :'false'} 
      ]}));
    }
  };
  static setProgress = (value) => localStorage.setItem('progress', localStorage.getItem('progress') + value);
  static setCourses = (course) => localStorage.setItem('courses', [...localStorage.getItem('courses'), course]);

  static getName = () => localStorage.getItem('user');
  static getProgress = () => localStorage.getItem('progress');
  static getCourses = () => JSON.parse(localStorage.getItem('courses'));
  static updateProgress = (newAchievement) => {  
    let approvedCount = 0;
    const courses = localStorage.getItem('courses'); 
    console.log(courses);
    console.log(courses.items);

    for (let i in courses.items){  
      console.log(courses[i]);
      if (courses[i].name === newAchievement){
        courses[i].aproved= "true"; 
      }
      if(courses[i].aproved === "true"){
        approvedCount++;
      }
    }  
    User.setProgress((approvedCount/ courses.length )*100);
  };
};