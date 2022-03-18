$('form').on('submit', function (e) {
  e.preventDefault();
  
  var newName = $('form').find('input[type="text"]').val();
  var stdEmail = $('form').find('input[type="email"]').val();
  var stdAge = $('form').find('input[type="number"]').val();
  
  
  $('table').append('<tr><td>' + newName + '</td><td>' + stdEmail + '</td><td>' + stdAge + '</td></tr>')
  
  
  
  
});