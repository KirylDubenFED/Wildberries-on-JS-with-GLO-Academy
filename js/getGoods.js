const getGoods = () => {
  const links = document.querySelectorAll('.navigation-link')

  const getdata = () => {
    fetch('https://willdberiess-default-rtdb.firebaseio.com/db.json')
      .then((res) => res.json())
      .then((data) => {
        const array = data.filter((item) => {
          return item.gender === 'Womens'
        })

        localStorage.setItem('goods', JSON.stringify(array))
      })
  }

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()

      
      getdata()
    })
  })
}

getGoods()

