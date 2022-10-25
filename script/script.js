const send_evaluations = (e) => {
    e.preventDefault()
    if (evaluations_number.value >= 1) {
        // delete all in form and create new inputs
        promediations.innerHTML = '' // delete all in form
        for( let i = 0; i < evaluations_number.value; i++){
            // create input type number
            const inputPromediations = document.createElement("input");
            inputPromediations.type = 'number';
            inputPromediations.name = `input_promediations_${i+1}`;
            inputPromediations.className = 'input_promediations';
            promediations.appendChild(inputPromediations);
        }
        // create button
        const button = document.createElement("input");
        button.type = 'button';
        button.value = 'Calcular';
        button.name = 'button_calculate';
        button.className = 'mx-3 btn btn-primary'; // add class to button
        button.onclick = promedio; // add function to button
        promediations.appendChild(button); // add text to button

        const clearButton = document.createElement("input");
        clearButton.type = 'button';
        clearButton.value = 'Limpiar';
        clearButton.name = 'button_clear';
        clearButton.className = 'mx-3 btn btn-primary'; // add class to button
        clearButton.onclick = clear; // add function to button
        promediations.appendChild(clearButton); // add text to button
    }
}

const clear = () => {
    promediations.innerHTML = '';
    resultaition.innerHTML = '';
}

const promedio = () => {
    let sum = 0;
    const inputs = document.querySelectorAll('input[class="input_promediations"]'); // get all inputs
    inputs.forEach((input) => {
        if(input.value === ''){
            input.value = '0';
        }
        sum += parseInt(input.value);
    })
    const promedio = sum / inputs.length;
    //create element
    const p = document.createElement("p"); // create p
    p.innerHTML = `El promedio es: ${promedio}`; // add text to p
    resultaition.innerHTML = '';
    resultaition.appendChild(p);
}

const button_evaluations = document.querySelector('#evaluations_send');
const evaluations_number = document.querySelector('#evaluations_number');
const promediations = document.querySelector('#promediations');


button_evaluations.addEventListener('click', (e) => send_evaluations(e));