var list = document.getElementById('list');
var add = document.getElementById('add');
var listLi = list.getElementsByTagName('li').length;

add.addEventListener('click', function() { 
var element = document.createElement('li');
  element.innerHTML = "Itame " + listLi;
  list.appendChild(element);
  listLi++
});
