const disp = i => {
  if (i < 6) {
    let id = `gif${i}`;
    if (i > 1) document.getElementsByClassName(`gif${i - 1}`)[0].style.display = 'none';
    switch (i) {
      case 1:
        document.getElementsByClassName('loaderWrapper')[0].style.backgroundColor = '#f4aa3c';
        document.getElementsByClassName('progressBarFull')[0].style.backgroundColor = '#e93040';
        break;
      case 2:
        document.getElementsByClassName('loaderWrapper')[0].style.backgroundColor = '#fdfdfd';
        document.getElementsByClassName('progressBarFull')[0].style.backgroundColor = '#7b7071';
        break;
      case 3:
        document.getElementsByClassName('loaderWrapper')[0].style.backgroundColor = '#84bd00';
        document.getElementsByClassName('progressBarFull')[0].style.backgroundColor = '#1679b9';
        break;
      case 4:
        document.getElementsByClassName('loaderWrapper')[0].style.backgroundColor = '#f96b8d';
        document.getElementsByClassName('progressBarFull')[0].style.backgroundColor = 'gray';
        break;
      case 5:
        document.getElementsByClassName('progressBar')[0].style.backgroundColor = 'gray';
        document.getElementsByClassName('loaderWrapper')[0].style.backgroundColor = '#000';
        document.getElementsByClassName('progressBarFull')[0].style.backgroundColor = '#fff';
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

setTimeout(function () {
  document.getElementsByClassName('progressBar')[0].style.display = 'none';
  document.getElementsByClassName('enterBtn')[0].style.display = 'initial';
}, 9100);

const handleClickToEnter = () => {
  document.getElementsByClassName('loaderWrapper')[0].style.display = 'none';
};
