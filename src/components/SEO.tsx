import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const defaultMeta = {
  siteName: 'Lajapathy Tech',
  title: 'Design Subscription Service for Startups & Teams',
  description: 'Unlimited UI UX design, product design, and web design subscription. Fast turnaround, no hiring, no delays.',
  image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
  url: 'https://lajapathytech.com',
  locale: 'en_US',
};




const SEO = ({
  title,
  description = defaultMeta.description,
  image = defaultMeta.image,
  url = defaultMeta.url,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  section,
  tags = [],
}: SEOProps) => {
  const fullTitle = title ? `${title} | ${defaultMeta.siteName}` : defaultMeta.title;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="author" content={author || defaultMeta.siteName} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="google-site-verification" content="VilYr19MWGGqh19AubcubO2Rj4Zee3Zru9nYm9ztxZU" />
      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={defaultMeta.siteName} />
      <meta property="og:locale" content={defaultMeta.locale} />

      {/* Article specific (for blog posts) */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}

      {/* Additional SEO */}
      <meta name="theme-color" content="#0a0a0a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Lajapathy Tech",
          "url": "https://lajapathytech.com",
          "logo": "https://lajapathytech.com/assets/logo-xQUAWj0S.png",
          "sameAs": [
            "https://www.linkedin.com/company/lajapathy/"
          ],
          "description": "Design subscription service offering UI UX, product design, and web design for startups and teams.",
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Design Subscription Service",
          "provider": {
            "@type": "Organization",
            "name": "Lajapathy Tech"
          },
          "areaServed": {
            "@type": "Country",
            "name": "India"
          },
          "description": "Unlimited design subscription including UI UX, web design, and product design delivered fast.",
        })}
      </script>

    </Helmet>
  );
};

export default SEO;
