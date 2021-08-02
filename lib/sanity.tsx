import sanityClient from '@sanity/client'

// See the image above on how to get your projectId and add a new API token
// I added one called "landing page"
const client = sanityClient({
  projectId: '97epvxsh',
  dataset: 'production',
  token:
    'skndYs9yRdDfhCEa6IBK37JUbMJiMxPXfsRhNvJxOg0ZiszS1vDnz5tkrqBySQswNMSlZLBN5WZPOSVEIA8c5FnizUHu9Ki30wuGySVxqeBseX21bZUbCMnviZqHs3jtnaO5iZ7ShOU7eJYLIKAjdrfPzIoiZiCHA2gAB8J3f5XZksD6Zpnt', // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
})

export default client
