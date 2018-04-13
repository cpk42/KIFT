const Cardioid = require('cardioid');
const fs = require('fs');

module.exports = {
  record: function(cb){
    var c = new Cardioid.player(null, Cardioid.presets.sphinx)
    let f = fs.createWriteStream('recording.raw', { encoding: 'binary' });
    c.stream().pipe(f);
    c.on("close", () => {
      // var b = new Cardioid.player('recording.raw', Cardioid.presets.sphinx);
      // b.play();
      cb();
    })
  }
};
