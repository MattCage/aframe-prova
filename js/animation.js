var cubo = document.querySelector('a-box');

cubo.addEventListener( 'mouseenter', function() {
  console.log("Sto guardando il cubo");
  cubo.setAttribute( 'scale', {
    x: 3,
    y: 3,
    z: 3
  });
});

cubo.addEventListener( 'mouseleave', function() {
  cubo.setAttribute( 'scale', {
    x: 2,
    y: 2,
    z: 2
  });
});