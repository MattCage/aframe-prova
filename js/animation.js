var cubo = document.getElementById('cubo');

cubo.addEventListener( 'mouseenter', function() {
  console.log("Sto guardando il cubo");
  cubo.setAttribute( 'scale', {
    x: 2.2,
    y: 2.2,
    z: 2.2
  });
});

cubo.addEventListener( 'mouseleave', function() {
  cubo.setAttribute( 'scale', {
    x: 2,
    y: 2,
    z: 2
  });
});