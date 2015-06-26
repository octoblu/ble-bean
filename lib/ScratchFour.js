var SCRATCH_UUID = 'a495ff20-c5b1-4b44-b512-1370f02d74de';
var SCRATCH_FOUR = 'a495ff24-c5b1-4b44-b512-1370f02d74de';

function ScratchFour() {
}

ScratchFour.prototype.readFour = function(callback) {
  this.readDataCharacteristic(SCRATCH_UUID, SCRATCH_FOUR, callback);
};

ScratchFour.prototype.writeFour = function(data, callback) {
  this.writeDataCharacteristic(SCRATCH_UUID, SCRATCH_FOUR, data, callback);
};

ScratchFour.prototype.notifyFour = function(onRead, callback) {
  this.notifyCharacteristic(SCRATCH_UUID, SCRATCH_FOUR, true, onRead, callback);
};

ScratchFour.prototype.unnotifyFour = function(onRead, callback) {
  this.notifyCharacteristic(SCRATCH_UUID, SCRATCH_FOUR, false, onRead, callback);
};

module.exports = ScratchFour;
