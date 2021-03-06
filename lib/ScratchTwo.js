var SCRATCH_UUID = 'a495ff20-c5b1-4b44-b512-1370f02d74de';
var SCRATCH_TWO = 'a495ff22-c5b1-4b44-b512-1370f02d74de';

if(process.platform == 'darwin' || process.platform == 'linux' || process.platform == 'win32'){
  SCRATCH_UUID = 'a495ff20c5b14b44b5121370f02d74de';
  SCRATCH_TWO = 'a495ff22c5b14b44b5121370f02d74de';
}

function ScratchTwo() {
}

ScratchTwo.prototype.readTwo = function(callback) {
  this.readDataCharacteristic(SCRATCH_UUID, SCRATCH_TWO, callback);
};

ScratchTwo.prototype.writeTwo = function(data, callback) {
  this.writeDataCharacteristic(SCRATCH_UUID, SCRATCH_TWO, data, callback);
};

ScratchTwo.prototype.notifyTwo = function(onRead, callback) {
  this.notifyCharacteristic(SCRATCH_UUID, SCRATCH_TWO, true, onRead, callback);
};

ScratchTwo.prototype.unnotifyTwo = function(onRead, callback) {
  this.notifyCharacteristic(SCRATCH_UUID, SCRATCH_TWO, false, onRead, callback);
};

module.exports = ScratchTwo;
