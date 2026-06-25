import React from 'react';

/**
 * Reusable SEO component that leverages React 19 native document metadata support.
 * Tags like <title>, <meta>, <link> are automatically hoisted to the document <head>.
 */
export default function SEO({
  title,
  description,
  keywords,
  canonicalUrl,
  ogType = 'website',
  ogImage = '/icons.svg',
  schema,
}) {
  const defaultTitle = 'HMI Digital | Next-Gen Web Applications & Digital Solutions';
  const defaultDesc = 'HMI Digital designs and engineers high-performance custom React web applications, custom databases, and modern software packages for businesses.';
  const defaultKeywords = 'web design, React apps, custom dashboards, web developer, frontend developer, database design, software solutions';
  const siteUrl = 'https://hmi-proj.vercel.app';

  const fullTitle = title ? `${title} | HMI Digital` : defaultTitle;
  const fullDesc = description || defaultDesc;
  const fullKeywords = keywords || defaultKeywords;
  const fullCanonical = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDesc} />
      <meta name="keywords" content={fullKeywords} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDesc} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullOgImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDesc} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Structured Data (Schema.org) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </>
  );
}
