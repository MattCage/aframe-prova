AFRAME.registerComponent( 'scale-on-mouseenter', {
  schema: {
    to: {default: '2.5 2.5 2.5'}
  },
  init: function() {
    console.log("Sto guardando il cubo");
    var data = this.data;
    this.el.addEventListener( 'mouseenter', function() {
      this.setAttribute( 'scale', data.to );
    });
    this.el.addEventListener( 'mouseleave', function() {
      this.setAttribute( 'scale', {x : 2, y: 2, z: 2});
    });
  }
});