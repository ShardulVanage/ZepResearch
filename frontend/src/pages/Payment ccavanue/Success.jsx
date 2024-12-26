import React from 'react'
import { Helmet } from 'react-helmet-async'

function success() {
  return (
    <>
        <Helmet>
                {/* Basic meta tags */}
                <title>success | Zep Research | International Journal Publication and Conference</title>
                <meta 
                  name="description" 
                  content="Leading platform for international journal publications, academic conferences, and advanced courses in Data Science and AI." 
                />
                <meta 
                  name="keywords" 
                  content="research journal, international publication, academic conference, data science courses" 
                />
        
                {/* Open Graph meta tags */}
                <meta property="og:title" content="Zep Research | International Journal Publication" />
                <meta 
                  property="og:description" 
                  content="Leading platform for international journal publications and conferences" 
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://zepresearch.com" />
                <meta property="og:image" content="/og-image.jpg" />
        
                {/* Twitter Card meta tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Zep Research | International Journal Publication" />
                <meta 
                  name="twitter:description" 
                  content="Leading platform for international journal publications and conferences" 
                />
                <meta name="twitter:image" content="/og-image.jpg" />
        
                {/* Canonical URL */}
                <link rel="canonical" href="https://zepresearch.com" />
              </Helmet>
    <div>success</div>
    </>
  )
}

export default success