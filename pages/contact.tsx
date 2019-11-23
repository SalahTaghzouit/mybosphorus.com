import React from 'react'
import Page from '../components/layout/Page'
import ContactPage from '../components/pages/ContactPage'

const Home = () => (
  <Page 
    title={'Contact | Bosphorus Supply Solutions - Hotel Equipments and Every Hotel Needs'}
    description={'Contact us and get a free quote now.'}
    sliderBackground={'/static/slides/hero_3.webp'}
    bigTitle={'Contact Us'}>
    <ContactPage />
  </Page>
) 

export default Home
