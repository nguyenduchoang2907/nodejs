const test = (req, res)=>{
    
    res.render("test");
}
const test1 = (req, res)=>{
    
    console.log(req.body);
}

module.exports = {
    test:test,
    test1:test1,
}