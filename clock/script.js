class Clock {
    constructor(hours=0, minutes=0) {
      this.hours = hours;
      this.minutes = minutes;
      plus(minutes);
      this.toString();
    }
  
    toString() {
      console.log(hours+':'+minutes);
    }
  
    plus(minutes) {
        this.minutes += minutes;
        return this;
    }
  
    minus(minutes) {
      
    }
  
    equals(otherClock) {
      
    }
  }

  new Clock(9,11);