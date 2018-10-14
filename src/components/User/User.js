export default class User  {

  static setName = (name) => {
    if(!localStorage.getItem('user') || localStorage.getItem('user') !== name) {
      localStorage.setItem('user', name);
      localStorage.setItem('progress', 0);
      localStorage.setItem('coursesApproved', []);
    }
    if(!User.getProgress()) {
      localStorage.setItem('progress', 0);
    }
    if(!User.getCoursesApproved()) {
      localStorage.setItem('coursesApproved', []);
    }
  };
  static setProgress = (value) => localStorage.setItem('progress', localStorage.getItem('progress') + value);
  static setCoursesApproved = (course) => localStorage.setItem('coursesApproved', [...localStorage.getItem('coursesApproved'), course]);

  static getName = () => localStorage.getItem('user');
  static getProgress = () => localStorage.getItem('progress');
  static getCoursesApproved = () => localStorage.getItem('coursesApproved');
};