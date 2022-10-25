const send_evaluations = (e) => {
    e.preventDefault()
    if (evaluations_number.value >= 1) {
        for( let i = 0; i < evaluations_number.value; i++){
            const newDiv = document.createElement("input", );
            const newContent = document.createTextNode("Hi there and greetings!");
            newDiv.appendChild(newContent);
            promediations.appendChild(newDiv);
        }
    }
}

const promedio = () => {
}

const button_evaluations = document.querySelector('#evaluations_send');
const evaluations_number = document.querySelector('#evaluations_number');
const promediations = document.querySelector('#promediations');


button_evaluations.addEventListener('click', (e) => send_evaluations(e));