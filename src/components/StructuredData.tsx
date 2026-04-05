import { Helmet } from 'react-helmet-async';

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  email?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  socialLinks?: string[];
}

interface ArticleSchemaProps {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url?: string;
  };
  publisher?: {
    name: string;
    logo?: string;
  };
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider: string;
  areaServed?: string;
  priceRange?: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

// Organization Schema - for the agency
export const OrganizationSchema = ({
  name = 'Lajapathy Tech',
  url = 'https://lajapathy.com',
  logo = 'https://lajapathy.com/logo.png',
  description = 'Design subscription for growing teams—fast, flexible, and reliable.',
  email = 'info@lajapathy.com',
  address = {
    streetAddress: 'Madurai',
    addressLocality: 'Tamilnadu',
    addressRegion: 'TN',
    postalCode: '625001',
    addressCountry: 'IN',
  },
  socialLinks = [
    'https://www.linkedin.com/company/lajapathy/',
  ],
}: OrganizationSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    description,
    email,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    sameAs: socialLinks,
    contactPoint: {
      '@type': 'ContactPoint',
      email,
      contactType: 'customer service',
      areaServed: 'Worldwide',
      availableLanguage: ['English'],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Article Schema - for blog posts
export const ArticleSchema = ({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
  publisher = {
    name: 'Lajapathy Tech',
    logo: 'https://lajapathy.com/logo.png',
  },
}: ArticleSchemaProps) => {
  const schema = {
// ... (rest of ArticleSchema)
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author.name,
      url: author.url,
    },
    publisher: {
      '@type': 'Organization',
      name: publisher.name,
      logo: {
        '@type': 'ImageObject',
        url: publisher.logo,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': typeof window !== 'undefined' ? window.location.href : '',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Service Schema - for services page
export const ServiceSchema = ({
  name,
  description,
  provider = 'Lajapathy Tech',
  areaServed = 'Worldwide',
  priceRange = '$$$',
}: ServiceSchemaProps) => {
// ...
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider,
    },
    areaServed,
    priceRange,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Breadcrumb Schema
export const BreadcrumbSchema = ({ items }: { items: BreadcrumbItem[] }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// WebSite Schema with SearchAction
export const WebsiteSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Lajapathy Tech',
    url: 'https://lajapathy.com',
    description: 'Design subscription for growing teams',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://lajapathy.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Professional Service Schema - for agency homepage
export const ProfessionalServiceSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Lajapathy Tech',
    image: 'https://lajapathy.com/og-image.jpg',
    '@id': 'https://lajapathy.com',
    url: 'https://lajapathy.com',
    email: 'info@lajapathy.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Madurai',
      addressLocality: 'Tamilnadu',
      addressRegion: 'TN',
      postalCode: '625001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 9.9252,
      longitude: 78.1198,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
