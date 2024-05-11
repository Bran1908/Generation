const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');//Levan punto porque son con clases y falta la "b"
const $l = document.querySelector('.location');

function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await(`${usersEndpoint}/${username}`); //  El fetch se borro despues del await
  //console.log(data); //Nunca se declara la variable
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  //$l.textContent = '${data.location}';  //No existe ninguna clase location
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}` 
}

displayUser('stolinski').catch(handleError);