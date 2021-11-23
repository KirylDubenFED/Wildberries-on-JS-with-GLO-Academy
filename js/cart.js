const cart = () => {
  const cartBtn = document.querySelector('.button-cart')
  const cart = document.getElementById('modal-cart')
  const closeBtn = cart.querySelector('.modal-close')
  const goodsContainer = document.querySelector('.long-goods-list')

  const addToCart = (id) => {
    const goods = JSON.parse(localStorage.getItem('goods'))
    const clickedGood = goods.find(good => good.id === id)
    const cart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('goods'))
      : []

    if (cart.some(good => good.id === clickedGood.id)) {
      cart.map(good => {
        if (good.id === clickedGood) {
          good.count++
        }
        return good
      })
    } else {
      clickedGood.count = 1
      cart.push(clickedGood)
    }

    localStorage.setItem('cart', JSON.stringify(cart))
  }

  cartBtn.addEventListener('click', () => {
    cart.style.display = 'flex'
  })

  closeBtn.addEventListener('click', () => {
    cart.style.display = ''
  })

  if (goodsContainer) {
    goodsContainer.addEventListener('click', (event) => {
      if (event.target.closest('.add-to-cart')) {
        const buttonToCart = event.target.closest('.add-to-cart')
        const goodId = buttonToCart.dataset.id

        addToCart(goodId)
      }
    })
  }
}

cart()