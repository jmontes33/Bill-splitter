function splitter() {
    const bill =  document.getElementById('billInput').value;
    const people = document.getElementById('peopleInput').value;

    const result = parseInt(bill) / parseInt(people)

    document.getElementById('amountPerson').innerHTML = "$" + result;
}

function resetFun() {
    document.getElementById('billInput').value = "";
    document.getElementById('peopleInput').value = "";
    document.getElementById('amountPerson').textContent = "$0.0";
}