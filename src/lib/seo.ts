// SEO optimization utilities
export const generateMetaTags = (title: string, description: string, image: string) => {
  return {
    title: `${title} | 一期一美 - 御食事・居酒屋`,
    meta: [
      {
        name: 'description',
        content: description,
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:image',
        content: image,
      },
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        property: 'twitter:title',
        content: title,
      },
      {
        property: 'twitter:description',
        content: description,
      },
      {
        property: 'twitter:image',
        content: image,
      },
    ],
  };
};

export const generateCanonicalUrl = (path: string) => {
  return `https://i-chi-bi.com${path}`;
};