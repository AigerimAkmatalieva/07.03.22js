const main = document.querySelector('main');
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function displayList(list) {
  main.innerHTML = ""
  list.forEach(item => {
    const div = document.createElement('div');
    div.textContent = item;
    main.append(div);
  });
};
displayList(list);
function sortDescending() {
  list.sort((a, b) => {
    if(a>b) {
      return -1;
    }
    else {
      return 1
    }
  });
};

function sortAscending() {
  list.sort((a, b) => {
    if(a>b) {
      return 1;
    }
    else {
      return -1
    }
  });
};


function sortOdd() {
  return list.filter(item => item % 2 != 0);
};

function sortEven(){
  return list.filter(item => item % 2 === 0);
}
document.querySelector('#sort-odd').addEventListener('click', function () {
displayList(sortOdd());
});
document.querySelector('#sort-even').addEventListener('click', function () {
  displayList(sortEven());
  });

document.querySelector('#sort-decending').addEventListener('click', function () {
	sortDescending();
displayList(list);
});

document.querySelector('#sort-ascending').addEventListener('click', function () {
  sortAscending();
displayList(list);
});
document.querySelector('#sort-reset').addEventListener('click', function () {
displayList();
});