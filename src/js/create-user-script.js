const adminUserIdElement = document.getElementById('admin-id');
const adminUserPassElement = document.getElementById('admin-pass');
const UserIdElement = document.getElementById('user-id');
const UserPassElement = document.getElementById('user-pass');


document.getElementById('admin-login-btn2').addEventListener('click', function (event) {
    event.preventDefault();
    
    if (adminUserIdElement && adminUserPassElement) {
        const adminUserId = adminUserIdElement.value;
        const adminUserPassValue = adminUserPassElement.value;
        
        fetch('https://webyapar-server.vercel.app/admin-info')
            .then(res => res.json())
            .then(data => {
                console.log('admin info', adminUserId, adminUserPassValue, 'data', data);
                console.log('adminId', data.adminUserId);
                const adminFilter = data.find(aAdmin => aAdmin.adminId === adminUserId && aAdmin.adminPassword === adminUserPassValue && aAdmin.role === 'admin')
                console.log('filter', adminFilter);
                if(adminFilter) {
                    window.location.href = 'create-user.html';
                }
            })

        console.log(adminLoginData);

    } else {
        console.error('Element with ID  not found');
    }
    
})