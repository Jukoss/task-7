

function removeError(element) {
    element.classList.remove('error');
}

const submit = document.getElementById('submit');

const tasks = [];

function getTask() {

    const title = document.getElementById('title');
    const description = document.getElementById('description');

    const now = new Date();

    if (title.value !== '' && description.value !== '') {
        const task = {
            title: title.value,
            description: description.value,
            data: `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
        };

        tasks.push(task);
        title.value = '';
        description.value = '';
    }  else {
        if (title.value === '') {
            title.classList.add('error');
        }

        if (description.value === '') {
            description.classList.add('error');
        }
    }

    console.log('click', tasks);
}

submit.addEventListener('click', getTask);