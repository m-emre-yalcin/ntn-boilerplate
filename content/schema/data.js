export default {
  "@context": "http://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "item": {
      "@id": "https://example.com",
      "name": "top page"
    }
  },
  {
    "@type": "ListItem",
    "position": 2,
    "item": {
      "@id": "https://example.com/foo",
      "name": "foo"
    }
  },
  {
    "@type": "ListItem",
    "position": 3,
    "item": {
      "@id": "https://example.com/foo/bar",
      "name": "bar"
    }
  },
  ]
}