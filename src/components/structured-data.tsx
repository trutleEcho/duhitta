"use client";

import Script from 'next/script';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'article';
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Duhitta",
          "url": "https://duhitta.com",
          "logo": "https://duhitta.com/logo.png",
          "description": "Duhitta is a fashion brand made for women by women, offering modern yet ethnic and traditional wear that celebrates cultural heritage with contemporary style.",
          "foundingDate": "2024",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "contact@duhitta.com"
          },
          "sameAs": [
            "https://twitter.com/duhitta",
            "https://instagram.com/duhitta",
            "https://facebook.com/duhitta",
            "https://pinterest.com/duhitta"
          ],
          "socialMedia": [
            "https://twitter.com/duhitta",
            "https://instagram.com/duhitta",
            "https://facebook.com/duhitta",
            "https://pinterest.com/duhitta"
          ]
        };
      
      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Duhitta",
          "url": "https://duhitta.com",
          "description": "Duhitta is a fashion brand made for women by women, offering modern yet ethnic and traditional wear that celebrates cultural heritage with contemporary style.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://duhitta.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };
      
      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "image": data.image,
          "author": {
            "@type": "Organization",
            "name": "Duhitta"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Duhitta",
            "logo": {
              "@type": "ImageObject",
              "url": "https://duhitta.com/logo.png"
            }
          },
          "datePublished": data.publishedAt,
          "dateModified": data.updatedAt
        };
      
      default:
        return data;
    }
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  );
} 