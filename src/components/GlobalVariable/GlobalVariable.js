
class GlobalVariable {
    constructor() {
      this.userName = "";
      this.progress = 0;
      this.coursesApproved = [
        {name: "Estimaciones", aproved : "false"},
        {name: "Metricas de Software",aproved :"false"}, 
        {name: "Simulacion",aproved :"false"},
        {name: "Gestion de cambios",aproved :"false"} ,
        {name: "GQM", aproved :"false"} 
      ]; 
    }

    updateProgress = function (newAchievement)
    {  
      var approvedCount = 0;
      for (var i = 0; i < this.coursesApproved.length; i++){ 
        if (this.coursesApproved[i].name === newAchievement){
          this.coursesApproved[i].aproved= "true"; 
        }
        if(this.coursesApproved[i].aproved === "true"){
          approvedCount++;
        }
      }  
      this.progress  = (approvedCount/this.coursesApproved.length)*100;
    } 
  }
  
  export default (new GlobalVariable);