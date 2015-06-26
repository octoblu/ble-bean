var SCRATCH_UUID = 'a495ff20-c5b1-4b44-b512-1370f02d74de';
var SCRATCH_FIVE = 'a495ff25-c5b1-4b44-b512-1370f02d74de';

function ScratchFive() {
}

ScratchFive.prototype.readFive = function(callback) {
  this.readDataCharacteristic(SCRATCH_UUID, SCRATCH_FIVE, callback);
};

ScratchFive.prototype.writeFive = function(data, callback) {
  this.writeDataCharacteristic(SCRATCH_UUID, SCRATCH_FIVE, data, callback);
};

ScratchFive.prototype.notifyFive = function(onRead, callback) {
  this.notifyCharacteristic(SCRATCH_UUID, SCRATCH_FIVE, true, onRead, callback);
};

ScratchFive.prototype.unnotifyFive = function(onRead, callback) {
  this.notifyCharacteristic(SCRATCH_UUID, SCRATCH_FIVE, false, onRead, callback);
};

module.exports = ScratchFive;
