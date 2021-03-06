$(document).ready(function () {

    var submit = $('.submit');

    submit.on('click', function () {

        if (check()) {
            $.ajax({
                url: '/plugin/api/login',
                type: 'POST',
                data: { username: $('.username').val(), password: $('.password').val() },
                dataType: 'json',
                success: function (data) {
                    if (data.success) {
                        alert('登录成功');
                        localStorage.removeItem('data');
                        window.location.href = '/index';
                    } else {
                        alert(data.msg);
                    }
                },
                error: function (err) { 
                    // alert('内部服务错误');
                }
            });
        }
    });
});

/**
 * checkout form
 */

function check() {
    var username = $('.username').val(),
        password = $('.password').val();
    var is = true;
    
    if (!username.length) {
        is = false;
        alert('请输入用户名');
        return;
    }
    if (!password) {
        is = false;
        alert('请输入密码');
        return;
    }
    return is;
}

