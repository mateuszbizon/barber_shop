import React from 'react'
import Container from '../ui/container'
import LightBoxGallery from '../ui/light-box-gallery'
import { Image } from '@/types'
import { BARBER_IMAGE, BARBER_IMAGE2, HERO_IMAGE, SCISSORS_IMAGE } from '@/constants/images'

function ImageGallerySection() {
    const images: Image[] = [HERO_IMAGE, BARBER_IMAGE, BARBER_IMAGE2, SCISSORS_IMAGE]

  return (
    <section className='py-section-padding'>
        <Container>
            <LightBoxGallery images={images} />
        </Container>
    </section>
  )
}

export default ImageGallerySection