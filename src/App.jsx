import { useCoffeMenu } from './Coffe.js'
import Product from './Components/Products.jsx'
import { useState } from 'react'

function App () {
  const coffeMenu = useCoffeMenu()
  const [value, setValue] = useState('all')

  const Clickn = () => {
    setValue(value === 'all' ? 'available' : 'all')
  }

  return (
    <div className='conteiner'>
      <div className='section-nav'>
        <h1>Our Colletion</h1>
        <p>Introduction our Coffe Colletion a selection of unique coffes from different roats types and origins, expertins roasted
          in small batchs and shipped fresh weekly
        </p>
        <div className='productAll'>
          <span onClick={Clickn} style={value === 'all' ? { backgroundColor: 'var(--hover-color)' } : {}}>All Products</span>
          <span onClick={Clickn} style={value === 'available' ? { backgroundColor: 'var(--hover-color)' } : {}}>Avalaible now</span>
        </div>
      </div>
      <div className='section-products'>
        {value === 'all'
          ? coffeMenu.map(item => (
            <Product
              key={item.id}
              img={item.image}
              title={item.name}
              popular={item.popular}
              precis={item.price}
              rating={item.rating}
              votes={item.votes}
              child={item.id === 5}
            />
          ))
          : coffeMenu
            .filter(item => item.id !== 5)
            .map(item => (
              <Product
                key={item.id}
                img={item.image}
                title={item.name}
                popular={item.popular}
                precis={item.price}
                rating={item.rating}
                votes={item.votes}
                child={item.id === 5}
              />
            ))}

      </div>
    </div>
  )
}

export default App
