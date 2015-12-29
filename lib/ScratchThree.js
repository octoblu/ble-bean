var SCRATCH_UUID = 'a495ff20-c5b1-4b44-b512-1370f02d74de';
var SCRATCH_THREE = 'a495ff23-c5b1-4b44-b512-1370f02d74de';

if(process.platform == 'darwin' || process.platform == 'linux' || process.platform == 'win32'){
  SCRATCH_UUID = 'a495ff20c5b14b44b5121370f02d74de';
  SCRATCH_THREE = 'a495ff23c5b14b44b5121370f02d74de';
}

function ScratchThree() {
}

ScratchThree.prototype.readThree = function(callback) {
  this.readDataCharacteristic(SCRATCH_UUID, SCRATCH_THREE, callback);
};

ScratchThree.prototype.writeThree = function(data, callback) {
  this.writeDataCharacteristic(SCRATCH_UUID, SCRATCH_THREE, data, callback);
};

ScratchThree.prototype.notifyThree = function(onRead, callback) {
  this.notifyCharacteristic(SCRATCH_UUID, SCRATCH_THREE, true, onRead, callback);
};

ScratchThree.prototype.unnotifyThree = function(onRead, callback) {
  this.notifyCharacteristic(SCRATCH_UUID, SCRATCH_THREE, false, onRead, callback);
};

module.exports = ScratchThree;
