export const seoConfig = {
  site: {
    name: 'Duhitta',
    url: 'https://duhitta.com',
    description: 'Duhitta is a fashion brand made for women by women, offering modern yet ethnic and traditional wear that celebrates cultural heritage with contemporary style.',
    keywords: [
      'ethnic fashion',
      'traditional wear',
      'women\'s clothing',
      'modern ethnic',
      'cultural fashion',
      'traditional dresses',
      'ethnic wear',
      'women\'s fashion',
      'cultural clothing',
      'modern traditional',
      'ethnic dresses',
      'traditional clothing',
      'cultural wear',
      'women\'s ethnic fashion',
      'modern traditional wear'
    ],
    author: 'Corner Softwares',
    creator: 'Corner Softwares',
    publisher: 'Corner Softwares',
    category: 'fashion',
    classification: 'clothing',
  },
  
  social: {
    twitter: {
      handle: '@duhitta',
      site: '@duhitta',
      cardType: 'summary_large_image',
    },
    facebook: {
      appId: 'your-facebook-app-id',
    },
    instagram: {
      handle: '@duhitta',
    },
    pinterest: {
      handle: '@duhitta',
    },
  },
  
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    bing: 'your-bing-verification-code',
  },
  
  analytics: {
    googleAnalytics: {
      measurementId: 'G-XXXXXXXXXX',
    },
    googleTagManager: {
      containerId: 'GTM-XXXXXXX',
    },
  },
  
  images: {
    default: '/og-image.jpg',
    twitter: '/twitter-image.jpg',
    logo: '/logo.png',
    favicon: '/favicon.ico',
    appleTouchIcon: '/apple-touch-icon.png',
  },
  
  contact: {
    email: 'contact@duhitta.com',
    phone: '+1-555-123-4567',
    address: {
      street: '123 Fashion Avenue',
      city: 'Style City',
      state: 'CA',
      zip: '90210',
      country: 'US',
    },
  },
  
  pages: {
    home: {
      title: 'Duhitta - Modern Ethnic Fashion for Women',
      description: 'Duhitta is a fashion brand made for women by women, offering modern yet ethnic and traditional wear that celebrates cultural heritage with contemporary style.',
      keywords: ['ethnic fashion', 'traditional wear', 'women\'s clothing', 'modern ethnic', 'cultural fashion'],
    },
    collections: {
      title: 'Collections - Duhitta',
      description: 'Explore Duhitta\'s curated collections of modern ethnic and traditional wear designed for women by women.',
      keywords: ['collections', 'ethnic wear', 'traditional dresses', 'fashion collections', 'ethnic fashion'],
    },
    newArrivals: {
      title: 'New Arrivals - Duhitta',
      description: 'Discover the latest arrivals in Duhitta\'s collection of modern ethnic and traditional wear.',
      keywords: ['new arrivals', 'latest fashion', 'ethnic wear', 'traditional dresses', 'new collection'],
    },
    ethnicWear: {
      title: 'Ethnic Wear - Duhitta',
      description: 'Discover our collection of ethnic wear that blends traditional designs with modern aesthetics.',
      keywords: ['ethnic wear', 'ethnic dresses', 'traditional clothing', 'cultural fashion', 'ethnic fashion'],
    },
    traditionalDresses: {
      title: 'Traditional Dresses - Duhitta',
      description: 'Explore our collection of traditional dresses that celebrate cultural heritage with contemporary style.',
      keywords: ['traditional dresses', 'traditional clothing', 'cultural dresses', 'ethnic dresses', 'traditional wear'],
    },
    about: {
      title: 'About Us - Duhitta',
      description: 'Learn about Duhitta\'s mission to create modern ethnic fashion for women by women, celebrating cultural heritage.',
      keywords: ['about us', 'company', 'mission', 'team', 'fashion brand'],
    },
    contact: {
      title: 'Contact Us - Duhitta',
      description: 'Get in touch with Duhitta for your fashion needs. We\'re here to help you find the perfect ethnic wear.',
      keywords: ['contact', 'get in touch', 'customer service', 'fashion support'],
    },
    sizeGuide: {
      title: 'Size Guide - Duhitta',
      description: 'Find your perfect fit with Duhitta\'s comprehensive size guide for ethnic and traditional wear.',
      keywords: ['size guide', 'sizing', 'measurements', 'fit guide', 'clothing sizes'],
    },
  },
  
  performance: {
    preconnect: [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com',
    ],
    dnsPrefetch: [
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com',
    ],
  },
};

export const generateMetadata = (page: keyof typeof seoConfig.pages) => {
  const pageConfig = seoConfig.pages[page];
  
  return {
    title: pageConfig.title,
    description: pageConfig.description,
    keywords: pageConfig.keywords,
    openGraph: {
      title: pageConfig.title,
      description: pageConfig.description,
      url: `${seoConfig.site.url}/${page === 'home' ? '' : page}`,
      siteName: seoConfig.site.name,
      images: [
        {
          url: seoConfig.images.default,
          width: 1200,
          height: 630,
          alt: pageConfig.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: seoConfig.social.twitter.cardType,
      title: pageConfig.title,
      description: pageConfig.description,
      images: [seoConfig.images.twitter],
      creator: seoConfig.social.twitter.handle,
      site: seoConfig.social.twitter.site,
    },
  };
}; 