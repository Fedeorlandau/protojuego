export default class User  {

  static getName = () => localStorage.getItem('user');

  static setName = (name) => {
    if(!localStorage.getItem('user') || localStorage.getItem('user') !== name) {
      localStorage.setItem('user', name);
    }
  }

};