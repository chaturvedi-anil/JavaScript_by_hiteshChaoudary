let form = document.querySelector('form');

form.addEventListener('submit', function(e)
{
    e.preventDefault();
    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);

    let results = document.querySelector('#results');
    let status = document.querySelector('#status');
    if(height === '' || height<0 || isNaN(height))
    {
        results.innerHTML = `Please enter a valid height ${height}`;
    }
    else if(weight === '' || weight<0 || isNaN(weight))
    {
        results.innerHTML = `Please enter a valid weight ${weight}`;
    }
    else
    {
        bmi = (weight / ((height*height)/10000).toFixed(2));
        results.innerHTML = `<span> ${bmi}</span>`;
        
        if(bmi < 18.6 )
        {
            status.innerHTML = `<span>Under Weight</span>`;
        }
        else if(bmi >= 18.6  || bmi <= 24.9)
        {
            status.innerHTML = `<span>Normal Weight</span>`;
        }
        else
        {
            status.innerHTML = `<span>Over Weight</span>`;
        }
        
    }
});