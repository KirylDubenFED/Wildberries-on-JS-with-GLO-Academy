const getGoods = () => {
  const links = document.querySelectorAll('.navigation-link')
  const renderGoods = (goods) => {

  }

  const getdata = (value, category) => {
    fetch('https://willdberiess-default-rtdb.firebaseio.com/db.json')
      .then((res) => res.json())
      .then((data) => {
        const array = category
          ? data.filter((item) =>
            item[category] === value) : data

        localStorage.setItem('goods', JSON.stringify(array))

        if (window.location.pathname !== "/goods.html") {
          window.location.href = '/goods.html'
        } else {
          renderGoods(array)
        }
      })
  }

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      const linkValue = link.textContent
      const category = link.dataset.field

      getdata(linkValue, category)
    })
  })

  if (localStorage.getItem('goods') && window.location.pathname === "/goods.html") {
    renderGoods(JSON.parse(localStorage.getItem('goods')))
  }

}

getGoods()

