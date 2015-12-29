var SCRATCH_UUID = 'a495ff20-c5b1-4b44-b512-1370f02d74de';
var SCRATCH_ONE = 'a495ff21-c5b1-4b44-b512-1370f02d74de';

if(process.platform == 'darwin' || process.platform == 'linux' || process.platform == 'win32'){
  SCRATCH_UUID = 'a495ff20c5b14b44b5121370f02d74de';
  SCRATCH_ONE = 'a495ff21c5b14b44b5121370f02d74de';
}

function ScratchOne() {
}

ScratchOne.prototype.readOne = function(callback) {
  this.readDataCharacteristic(SCRATCH_UUID, SCRATCH_ONE, callback);
};

ScratchOne.prototype.writeOne = function(data, callback) {
  this.writeDataCharacteristic(SCRATCH_UUID, SCRATCH_ONE, data, callback);
};

ScratchOne.prototype.notifyOne = function(onRead, callback) {
  this.notifyCharacteristic(SCRATCH_UUID, SCRATCH_ONE, true, onRead, callback);
};

ScratchOne.prototype.unnotifyOne = function(onRead, callback) {
  this.notifyCharacteristic(SCRATCH_UUID, SCRATCH_ONE, false, onRead, callback);
};

module.exports = ScratchOne;
