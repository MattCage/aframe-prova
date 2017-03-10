AFRAME.registerComponent( 'log', {
  schema: {type: 'string'},
  init: function() {
    var stringaDaLoggare = this.data;
    console.log(stringaDaLoggare);
  }
});