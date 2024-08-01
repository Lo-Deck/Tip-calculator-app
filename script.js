const inputAmount = document.getElementById('amount');
const btnPercentTips = document.getElementsByClassName('button-percent');
const inputPeople = document.getElementById('people');
const inputTips = document.getElementById('input-tips');
const amountPerson = document.getElementById('amountPerson');
const totalPerson = document.getElementById('totalPerson');
const btnReset = document.getElementById('button-reset');



let tips = 0; 

const bill  = (amount , tips, NumberOfPeople) => {

    const tipsPerPerson = (((amount * tips) - amount ) / NumberOfPeople).toFixed(2);
    const totalPerPerson = ((amount * tips) / NumberOfPeople).toFixed(2);
    amountPerson.innerText = tipsPerPerson;
    totalPerson.innerText = totalPerPerson;

}



Array.from(btnPercentTips).forEach( (element, index) => {

    element.addEventListener('click', (e) => {

        for(let i = 0; i < btnPercentTips.length; i++)
        {

            if(i === index)
            {
                btnPercentTips[i].classList.add('btn-percent-active');
            }
            else
            {
                btnPercentTips[i].classList.remove('btn-percent-active');
            }

        }
        
        tips = Number(element.value);

        if(inputAmount.value && inputPeople.value)
        {

            console.log('input');

            bill(inputAmount.value , tips, inputPeople.value);
        }

        e.preventDefault();

    } );


} );


inputAmount.addEventListener('change', () => {

    if(inputAmount.value && inputPeople.value && tips !== 0)
    {
        bill(inputAmount.value , tips, inputPeople.value);
    }
    
});


inputTips.addEventListener('change', () => {

    tips = (inputTips.value / 100) + 1;

    if(inputAmount.value && inputPeople.value && tips !== 0)
    {
        bill(inputAmount.value , tips, inputPeople.value);
    }


});


inputPeople.addEventListener('keyup', () => {


    if(inputAmount.value && inputPeople.value && tips !== 0)
    {
        bill(inputAmount.value , tips, inputPeople.value);
    }



});


btnReset.addEventListener('click', () => {

    amountPerson.innerText = "$0.00";
    totalPerson.innerText = "$0.00";

    for(let i = 0; i < btnPercentTips.length; i++)
        {

            btnPercentTips[i].classList.remove('btn-percent-active');            

        }

});
