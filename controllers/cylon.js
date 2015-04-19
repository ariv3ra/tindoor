"use strict";

var Cylon = require("cylon");

module.exports = function(app) {

  Cylon.robot({
    connections: {
      edison: { adaptor: "intel-iot"}
    },

    devices: {
      servo: { driver: "servo", pin: 3, }
    },

    work: function(my) {
      app.route('/move').get(function(req, res, next) {
        if (my.servo.currentAngle() > 0){
          console.log('Angle: 0');
          my.servo.angle(0);

        }
        else{
          console.log('Angle: 90');
          my.servo.angle(90); 
        }
        Cylon.halt();
        res.send('Got a door Open Request');
      });
    }
  }).start();
};