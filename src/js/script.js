// admin login starts 
const adminUserIdElement = document.getElementById('admin-id');
const adminUserPassElement = document.getElementById('admin-pass');


document.getElementById('admin-login-btn').addEventListener('click', function (event) {
    event.preventDefault();

    // main page(index.html) page code start
    if (adminUserIdElement && adminUserPassElement) {
        const adminUserId = adminUserIdElement.value;
        const adminUserPassValue = adminUserPassElement.value;
        
        fetch('https://webyapar-server.vercel.app/admin-info')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log('admin id', adminUserId, 'admin pass', adminUserPassValue);
                console.log('admin info', adminUserId, adminUserPassValue, 'data', data);
                console.log('adminId', data.adminUserId);
                const adminFilter = data.find(aAdmin => aAdmin.adminId === adminUserId && aAdmin.adminPassword === adminUserPassValue && aAdmin.role === 'admin')
                console.log('filter', adminFilter);
                if(adminFilter) {
                    window.location.href = 'create-user.html';
                }
            })


    } 


    
})

// admin login ends


// user login starts



// user login ends





