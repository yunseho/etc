let main = (req,res)=>{
    res.render('./board/index.html');
}

let list = (req,res) => {
    let flag =req.query.flag;
    res.render('./board/list.html')
}

module.exports = {
    main:main, // (뒤에가 함수)
    list:list
}