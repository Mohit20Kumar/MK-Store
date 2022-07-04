import React from 'react'
import { client } from '../lib/client'
// import Footer from '../components/Footer'
import FooterBanner from '../components/FooterBanner'
import HeroBanner from '../components/HeroBanner'
import Product from "../components/Product"
const home = ({products,bannerData}) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
      <div className='products-heading'>
          <h2>BEST SELLING CLOTHES</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde modi libero dolorum, possimus omnis aspernatur, vitae impedit velit tenetur culpa esse aliquid odio veniam</p>
      </div>
      <div className='products-container'>
        {products?.map((each,id)=>
        <Product key={id} product={each} />
        )}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  )
}

export const getServerSideProps = async()=>{
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  // console.log(products)

  return  {props:{products,bannerData}} 
}

export default home