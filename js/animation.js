var cubo = document.querySelector('a-box');

cubo.addEventListener( 'mouseenter', function() {
  cubo.setAttribute( 'scale', {
    x: 2,
    y: 2,
    z: 2
  });
});