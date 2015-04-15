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
      app.route('/motor').get(function(req, res, next) {
        var angle = 0,
        increment = 110;

        every((1).second(), function() {
          angle += increment;

          my.servo.angle(angle);

          console.log("Current Angle: " + (my.servo.currentAngle()));

          if ((angle === 0) || (angle === 110)) {
            increment = -increment;
          }
        });
        
      });
    }
  }).start();
};