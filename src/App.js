import React, { useState } from 'react'
import Hero from './Hero'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'
import About from './About'
import Footer from './Footer'

const allCategories = [
  '全部產品',
  ...new Set(items.map((item) => item.category)),
]

function App() {
  const [foods, setFoods] = useState(items)
  const [categories, setCategories] = useState(allCategories)
  console.log(categories)

  const filterItems = (category) => {
    if (category === '全部產品') {
      setFoods(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setFoods(newItems)
  }
  console.log(foods)
  return (
    <>
      <Hero />
      <About />
      <main>
        <section className='menu section'>
          <div className='title'>
            <h2>我們的產品</h2>
            <div className='underline'></div>
          </div>
          <Categories
            categories={categories}
            filterItems={filterItems}
            categories={categories}
          />
          <Menu foods={foods} />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
