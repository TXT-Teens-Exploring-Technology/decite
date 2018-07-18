document.getElementById('cbutton').addEventListener('click', function() {
    var position = document.getElementById('card').style.left;

    var newPosition = parseInt(position) + 10;
    
    document.getElementById('cbutton').style.top = newPosition + 'px';
  });