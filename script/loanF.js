const loanForm = document.getElementById('loanForm');

loanForm.addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent the form from being submitted traditionally

    const formData = new FormData(loanForm);  // Collect form data
    const data = {};

    for (const [key, value] of formData.entries()) {
        data[key] = value;  // Create an object with form data
    }

    // Validating the checkbox to ensure the user agreed to terms
    if (!data.terms) {
        alert("You must agree to the terms and conditions!");
        return;
    }

    // Storing form data in localStorage
    localStorage.setItem('loanApplication', JSON.stringify(data));
    alert('Loan application stored successfully!');

    // Optionally redirect to a document upload page
    window.location.href = 'documentUpload.html';
});