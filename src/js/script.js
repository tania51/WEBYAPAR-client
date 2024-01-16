
const adminUserIdElement = document.getElementById('user-id');
const adminUserPassElement = document.getElementById('user-pass');


document.getElementById('admin-login-btn').addEventListener('click', function(event) {
    event.preventDefault();
    if (adminUserIdElement && adminUserPassElement) {
        const adminUserId = adminUserIdElement.value;
        const adminUserPassValue = adminUserPassElement.value;
        console.log(adminUserId, adminUserPassValue);
      } else {
        console.error('Element with ID "user-id" not found');
      }
})
