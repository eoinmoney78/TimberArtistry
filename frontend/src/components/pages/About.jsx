import React from 'react';
import logo from '../../assets/carpenter.png';

function About() {
  return (
    <div style={{ padding: '10px', minHeight: '65vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
    <h2 style={{ textAlign: 'center' }}>About Jeremy Woods</h2>
    <img src={logo} alt="Timber Artistry Logo" style={{ height: '130px', margin: '0 auto', border: '2px solid black', flexShrink: 0 }} />
    
    <div style={{ maxWidth: '650px', width: '100%' }}>
        <p>
          With an inherent talent for craftsmanship, Jeremy Woods has dedicated his life to the art of cabinet making and creating bespoke wooden art pieces. His hands have transformed countless spaces, infusing them with elegance, functionality, and timeless design.
        </p>

        <p>
          Beyond his workbench, Jeremy is also a gifted musician, resonating the same finesse and creativity he demonstrates in his woodwork through melodies and harmonies. Music, for Jeremy, is another avenue to express his passion and showcase his multifaceted talents.
        </p>

        <p>
          At the heart of everything, Jeremy is a devoted family man. He cherishes moments spent with loved ones, believing that they fuel his creativity and drive in both his professional and personal pursuits. His family is his biggest inspiration and motivation.
        </p>

        <p>
          Whether he's crafting a new cabinet, composing a new song, or enjoying quality time with his family, Jeremy Woods embodies the essence of passion, dedication, and love in all he does.
        </p>
      </div>
    </div>
  )
}

export default About;
