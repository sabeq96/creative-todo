class DateUtils {
  constructor(props) {
  
    this.today = new Date().getTime();
    this.day = 86400000;
  }

  today() { return this.today }

  tomorrow() { return this.today + this.day }

  upcomming() { return this.today + 2*this.day }

}

export default new DateUtils();