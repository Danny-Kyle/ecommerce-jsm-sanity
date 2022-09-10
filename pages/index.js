import Head from 'next/head'
import Image from 'next/image'
import {Cart, Footer, FooterBanner, HeroBanner, Layout, Navbar, Product} from '../components'
import {client} from "../lib/client"

export default function Home({product, bannerData}){
  return (
    <div>
      <HeroBanner herobanner={bannerData.length && bannerData[0]}/>
      {console.log(bannerData)}
      {console.log(product)}
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Headphones, Earphones and Speakers and more of many sizes and variations</p>
      </div>

      <div className='products-container'>
        {product?.map((product)=> <Product key={product._id} product={product} />)}
      </div>

      <FooterBanner footerbanner={bannerData && bannerData[0]}/>
    </div>
  )
}

export async function getServerSideProps(){
  const query = '*[_type == "product"]'
  const product = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: {product, bannerData}
  }
}
