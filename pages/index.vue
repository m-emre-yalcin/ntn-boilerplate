<template>
  <main>
    <section class="self-center flex flex-col flex-1 items-center justify-center">
      <h1 class="title text-center">Nuxt — Tailwind — Netlify CMS</h1>
      <h2 class="subtitle text-center">Boilerplate</h2>
    </section>

    <section class="mt-8">
      <h3 class="text-primary-600 dark:text-primary-400 max-w-5xl mx-auto">Latest blog post</h3>
      <posts post-type="blog" :amount="1" />
    </section>
  </main>
</template>

<script>
export default {
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@id': 'https://example.com',
            name: 'top page',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@id': 'https://example.com/foo',
            name: 'foo',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@id': 'https://example.com/foo/bar',
            name: 'bar',
          },
        },
      ],
    }
  },
}
</script>
