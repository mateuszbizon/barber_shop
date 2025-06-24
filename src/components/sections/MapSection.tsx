import React from 'react'
import Container from '../ui/container'
import GoogleMap from '../ui/google-map'

function MapSection() {
  return (
    <section className='py-section-padding bg-muted rounded-4xl text-light'>
        <Container>
            <h2 className='heading2 text-center heading-margin-bottom'>Jak do nas dojechać</h2>
            <GoogleMap />
        </Container>
    </section>
  )
}

export default MapSection