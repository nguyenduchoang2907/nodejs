const login = (req, res)=>{
    res.render("admin/login", {data:{}});
}
const postLogin = (req, res)=>{
    let error;
    if(req.body.email == ""){
        error = "Tài khoản không được để trống !"
    }
    else if(req.body.password == ""){
        error = "Mật khẩu không được để trống !";
    }
    else if(req.body.email == "vietpro.edu.vn@gmail.com" && req.body.password == "123456"){
        res.redirect("/admin/dashboard");
    }
    else{
        error = "Tài khoản không hợp lệ !";
    }
    res.render("admin/login", {data:{error: error}});
}

const logout = (req, res)=>{
    res.send("/admin/logout");
}

module.exports = {
    login:login,
    postLogin:postLogin,
    logout:logout,
}