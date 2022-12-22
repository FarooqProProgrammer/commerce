import React from 'react'
import ProductList from './ProductList'

const Product = () => {
  // const image = [
  //   'https://picsum.photos/id/237/200/300',
  //   'https://picsum.photos/seed/picsum/200/300',
  //   'https://picsum.photos/200/300?grayscale',
  //   'https://picsum.photos/200/300/?blur',
  //   'https://picsum.photos/id/870/200/300?grayscale&blur=2'
  // ]
  const image = [
    {
      img:'https://picsum.photos/id/237/200/300',
      title:"Mobile Phone"
    },
    {
      img:'https://picsum.photos/seed/picsum/200/300',
      title:"Shampoo"
    },
    {
      img:"https://picsum.photos/200/300?grayscale",
      title:"Laptop"
    }
    ]
  return (
    <div className='w-full h-[auto] border-2 border-black grid grid-rows-1 lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 place-items-center'>
        {image.map((item)=>{
          return (
              <ProductList image={item} cursor="pointer"/>
          )
        })}
        
    
    
    </div>
  )
}

export default Product