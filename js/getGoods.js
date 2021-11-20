const getGoods = () => {
  const links = document.querySelectorAll('.navigation-link')

  const getdata = () => {
    fetch('https://willdberiess-default-rtdb.firebaseio.com/db.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
  }

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      getdata()
    })
  })

  localStorage.setItem('goods', JSON.stringify({ name: 'all' }))

  const goods = JSON.parse(localStorage.getItem('goods'))


localStorage.removeItem('goods')
}

getGoods()