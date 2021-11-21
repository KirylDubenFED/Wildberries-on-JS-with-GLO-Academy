const getGoods = () => {
  const links = document.querySelectorAll('.navigation-link')

  const getdata = (value, category) => {
    fetch('https://willdberiess-default-rtdb.firebaseio.com/db.json')
      .then((res) => res.json())
      .then((data) => {
        const array = data.filter((item) => 
           item[category] === value
           )

           category ? console.log('есть') : console.log('нет');

        localStorage.setItem('goods', JSON.stringify(array))
      })
  }

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      const linkValue = link.textContent
      const category = link.dataset.field

      getdata(linkValue,category)
    })
  })
}

getGoods()

