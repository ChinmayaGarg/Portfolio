const disp = i => {
  if (i < 6) {
    let id = `gif${i}`;
    if (i > 1) document.getElementsByClassName(`gif${i - 1}`)[0].style.display = 'none';
    switch (i) {
      case 1:
        document.getElementsByClassName('loaderWrapper')[0].style.backgroundColor = '#f4aa3c';
        break;
      case 2:
        document.getElementsByClassName('loaderWrapper')[0].style.backgroundColor = '#fdfdfd';
        break;
      case 3:
        document.getElementsByClassName('loaderWrapper')[0].style.backgroundColor = '#84bd00';
        break;
      case 4:
        document.getElementsByClassName('loaderWrapper')[0].style.backgroundColor = '#f96b8d';
        break;
      case 5:
        document.getElementsByClassName('loaderWrapper')[0].style.backgroundColor = '#f0f0f0';
        break;
      default:
        document.getElementsByClassName('loaderWrapper')[0].style.backgroundColor = '#fff';
    }
    document.getElementsByClassName(id)[0].style.display = 'initial';
  } else return;
  setTimeout(function () {
    disp(i + 1);
  }, 1500);
};

disp(1);
