let Calculate = () => {

    let principleAmount = Number(document.getElementById("PrincipalAmount").value);
    let intrestRate = Number(document.getElementById("intrestRate").value);
    let loanDuration = Number(document.getElementById("loanduration").value);

    if (principleAmount <= 0 || intrestRate <= 0 || loanDuration <= 0) {
        alert("Please enter valid positive numbers!");
        return;
    }

    let principal = document.getElementById("principle");
    let rate = document.getElementById("intrest");
    let duration = document.getElementById("duration");
    let emiSpan = document.getElementById("emi");

    let monthlyRate = intrestRate / (12 * 100);
    let months = loanDuration * 12;

    let emi = (principleAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
              (Math.pow(1 + monthlyRate, months) - 1);

              
    principal.innerHTML = principleAmount.toLocaleString();
    rate.innerHTML = intrestRate;
    duration.innerHTML = months;
    emiSpan.innerHTML = emi.toFixed(2).toLocaleString();
}