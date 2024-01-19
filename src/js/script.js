// admin login starts 
const adminUserIdElement = document.getElementById('admin-id');
const adminUserPassElement = document.getElementById('admin-pass');
// const UserIdElement = document.getElementById('user-id');
// const UserPassElement = document.getElementById('user-pass');


document.getElementById('admin-login-btn').addEventListener('click', function (event) {
    event.preventDefault();

    // main page(index.html) page code start
    if (adminUserIdElement && adminUserPassElement) {
        const adminUserId = adminUserIdElement.value;
        const adminUserPassValue = adminUserPassElement.value;
        
        fetch('http://localhost:3000/admin-info')
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

            

        // const adminLoginData = {
        //     adminId: adminUserId,
        //     adminPassword: adminUserPassValue,
        //     role: role
        // };

        console.log(adminLoginData);

        // fetch('http://localhost:3000/admin', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(adminLoginData)
        // })
        // .then(res => res.json())

        // if(adminId === adminUserId && adminPassword === adminUserPassValue && role === 'admin') {
        // window.location.replace('cr');
        // }

        // window.location.href = 'create-user.html';

    } else {
        console.error('Element with ID  not found');
    }

    // main page(index.html) page code end

    
})

// admin login ends


// user login starts

const userIdElement = document.getElementById('user-id');
const userPassElement = document.getElementById('user-pass');
// const UserIdElement = document.getElementById('user-id');
// const UserPassElement = document.getElementById('user-pass');


document.getElementById('admin-login-btn').addEventListener('click', function (event) {
    event.preventDefault();


    if (userIdElement && userPassElement) {
        const userId = userIdElement.value;
        const userPassValue = userPassElement.value;
        
        fetch('http://localhost:3000/admin-info')
            .then(res => res.json())
            .then(data => {
                console.log(data);

                const adminFilter = data.find(aAdmin => aAdmin.userId === userId && aAdmin.userPassword === userPassValue && aAdmin.role === 'user')
                console.log(adminFilter);

                if(adminFilter) {
                    localStorage.setItem('user-info', JSON.stringify(adminFilter))
                    window.location.href = 'user-photo.html';
                }
            })

        console.log(adminLoginData);

    } else {
        console.error('Element with ID  not found');
    }

    
})

// user login ends







// user photo page starts

// function previewImage() {
//     var displayImage = document.getElementById('imagePreview');
//     var imgInput = document.getElementById('imageInput');    
//     var file = imgInput.files[0];
//     console.log(imgInput);
    

//     if (file) {
//         var reader = new FileReader();

//         reader.onload = function (e) {
//             displayImage.src = e.target.result;
//         };

//         reader.readAsDataURL(file);
//     } else {
//         displayImage.src = '';
//     }

    
// }

// user photo page ends





// document.getElementById('user-create').addEventListener('click', function (event) {
//     // create user page start
//     event.preventDefault();

//     if (UserIdElement && UserPassElement) {
//         const UserIdValue = adminUserIdElement.value;
//         const UserPassValue = adminUserPassElement.value;
//         const role = 'user';

//         const userLoginData = {
//             userId: UserIdValue,
//             userPassword: UserPassValue,
//             role: role
//         };

//         console.log(userLoginData);

//         fetch('http://localhost:3000/user', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(userLoginData)
//         })
//         .then(res => res.json())

//         // if(adminId === adminUserId && adminPassword === adminUserPassValue && role === 'admin') {
//             // window.location.replace('cr');
//         // }

//         // window.location.href = 'create-user.html';

//     } else {
//         console.error('Element with ID "user-id" not found');
//     }

//     // create user page end
// })



