window.onload = () => {
   const inputs = document.querySelectorAll("input");

   inputs.forEach(input => {
     input.addEventListener('change', calculateLoan
     )
   }
}

function calculateLoan () 
{


    const princial = document.querySelector('#amount').value;
    const interestrate = document.querySelector('#interest').value;
    const tenure = document.querySelector('#tenure').value;

    if(princial || !interestRate || !tenure) return;

    const monthlyInterest = interestRate / 100 / 12;
    const emi = princial * monthlyInterest * Math.pow(1 + monthlyInterest, tenure) / (Math.pow(1 + monthlyInterest, tenure) - 1);

    const totalAmount = emi * tenure;
    const totalInterest = totalAmount - princial;

    document.querySelector('#emi').innerText = 'EMI: Rs' + emi.toFixed(2);
    document.querySelector('#totalAmount').innerText = 'Total Amount: Rs ' + totalAmount.toFixed(2);
    document.querySelector('#totalInterest').innerHTML = 'total Interest: Rs' + totalInterest.toFixed(2);


}