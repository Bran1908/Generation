// Escribe tu código aquí.
const array = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
function grandes(input, array) 
{
    return array.filter(palabras => palabras.length > input.length);
}

function printArray(array)
{
    const ul = document.getElementById('resultList');
    ul.innerHTML = '';
    array.forEach(palabras => 
    {
        const li = document.createElement('li');
        li.textContent = palabras;
        ul.appendChild(li);
    });
}

function onclicks()
{
    const entrada = document.getElementById('entrada').value;
    const filtrado = grandes(entrada,array);
    printArray(filtrado);
}
document.getElementById('submitButton').addEventListener('click',onclicks);