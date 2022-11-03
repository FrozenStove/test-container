document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
  
    // add event listener to the add new message button
    document.getElementById('button').addEventListener('click', overload);
  });
  
  const overload = () => {
    fetch('/overload')
      .then((data) => data.json())
      .then((data) => {
        drawMessage(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
