// Generated by CoffeeScript 1.12.7
var test;

test = function() {};

test.prototype.init = function() {
  this.ctor = cc.Layer.extend({
    ctor: function(params) {
      return this._super();
    },
    onEnter: function() {
      return console.log(5);
    }
  });
};

test.prototype.get = function(cb, cbTarget, params) {
  this.init();
  return new this.ctor(params);
};