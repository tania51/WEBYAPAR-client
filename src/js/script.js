
const adminUserIdElement = document.getElementById('user-id');
const adminUserPassElement = document.getElementById('user-pass');


document.getElementById('admin-login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    if (adminUserIdElement && adminUserPassElement) {
        const adminUserId = adminUserIdElement.value;
        const adminUserPassValue = adminUserPassElement.value;
        const role = 'admin';

        const adminLoginData = {
            adminId: adminUserId,
            adminPassword: adminUserPassValue,
            role: role
        };

        fetch('http://localhost:3000/admin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminLoginData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    } else {
        console.error('Element with ID "user-id" not found');
    }
})
