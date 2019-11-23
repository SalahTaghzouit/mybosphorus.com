import React from 'react'
import Page from '../components/layout/Page'
import HomePage from '../components/pages/Home'

const Home = () => (
  <Page 
    title={'Bosphorus Supply Solutions - Hotel Equipments and Every Hotel Needs'}
    description={'Bed sheets, towels, amneties, electronics, and every need to make your hotel shine.'}
    sliderBackground={[
      '/static/slides/room.webp'
    ]}
    bigTitle={'Bosphorus Supply'}
    bigDescription={'Reimagine Your Hotel'}>
    <HomePage />
  </Page>
) 

export default Home
