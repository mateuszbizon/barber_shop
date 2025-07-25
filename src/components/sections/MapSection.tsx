import React from 'react'
import Container from '../ui/container'
import GoogleMap from '../ui/google-map'

function MapSection() {
  return (
    <section className='py-section-padding rounded-4xl'>
        <Container>
            <div className='bg-background3 rounded-2xl p-10'>
                <h2 className='heading2 text-center heading-margin-bottom'>Jak do nas dojechać</h2>
                <GoogleMap />
            </div>
        </Container>
    </section>
  )
}

export default MapSection