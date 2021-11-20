const getGoods = () => {
    fetch('https://willdberiess-default-rtdb.firebaseio.com/db.json')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })

}

getGoods()