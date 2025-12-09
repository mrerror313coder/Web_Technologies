document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const studentsTableBody = document.getElementById('studentsTableBody');

    // Check if we are on the registration page
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Clear previous error messages
            clearErrors();

            // Get values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const age = document.getElementById('age').value;

            // Validation
            let isValid = true;

            if (name === '') {
                showError('nameError', 'Name must not be empty');
                isValid = false;
            }

            if (!email.includes('@')) {
                showError('emailError', "Email must include '@'");
                isValid = false;
            }

            if (age <= 0 || age === '') {
                showError('ageError', 'Age must be greater than 0');
                isValid = false;
            }

            if (isValid) {
                saveStudent({ name, email, age });
                window.location.href = 'students.html';
            }
        });
    }

    // Check if we are on the students display page
    if (studentsTableBody) {
        loadStudents();
    }

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    }

    function clearErrors() {
        const errors = document.querySelectorAll('.error-message');
        errors.forEach(error => {
            error.style.display = 'none';
            error.textContent = '';
        });
    }

    function saveStudent(student) {
        let students = JSON.parse(localStorage.getItem('students')) || [];
        students.push(student);
        localStorage.setItem('students', JSON.stringify(students));
    }

    function loadStudents() {
        const students = JSON.parse(localStorage.getItem('students')) || [];

        if (students.length === 0) {
            studentsTableBody.innerHTML = '<tr><td colspan="3" class="empty-state">No students registered yet.</td></tr>';
            return;
        }

        studentsTableBody.innerHTML = '';
        students.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${escapeHtml(student.name)}</td>
                <td>${escapeHtml(student.email)}</td>
                <td>${escapeHtml(student.age)}</td>
            `;
            studentsTableBody.appendChild(row);
        });
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
});
