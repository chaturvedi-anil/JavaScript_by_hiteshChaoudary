let button = document.querySelectorAll('.button');
let body = document.querySelector('body');

button.forEach(function(button)
{
    console.log(button);

    button.addEventListener('click', function(e)
    {
        console.log(e);
        console.log(e.target);

        let selectBtn = e.target.id;

        switch (selectBtn) {
            case "grey":
                body.style.backgroundColor = selectBtn;
                break;
            case "yellow":
                body.style.backgroundColor = selectBtn;
                break;
            case "red":
                body.style.backgroundColor = selectBtn;
                break;
            case "royalblue":
                body.style.backgroundColor = selectBtn;
                break;
            default:
                break;
        }
    })
})