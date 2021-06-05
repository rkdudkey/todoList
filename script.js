let btn = document.querySelector('#btn');

let input = document.querySelector('#list');


//add click event
btn.addEventListener('click', (e) => {
    e.preventDefault();

    let warning = document.querySelector('.warning');

    if (input.value === '') {
        warning.innerHTML = "Please Enter your to do list";
        warning.style.color = 'red';
    } else if (input.value !== '') {
        warning.innerHTML = "";

        //get the value from the input
        let list = input.value;

        //create the li element
        let li = document.createElement('li');
        li.className = "details"
        li.classList.add('fadeInOpacity');
        li.textContent = list;
        

        //append the list
        let ul = document.querySelector('#addList');
        ul.appendChild(li);


        //clicked to remove
        ul.addEventListener('click', (e) => {
            let target = e.target;
            target.classList.remove('fadeInOpacity');
            target.classList.add('checked');
            target.classList.add('fadeOutOpacity');

            setInterval(() => {
                target.innerHTML="";
                target.classList.remove('details');
            }, 1000);

        })

        //clear text from input
        input.value = "";

    }

});