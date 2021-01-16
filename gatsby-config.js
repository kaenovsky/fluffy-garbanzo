module.exports = {
  siteMetadata: {
    title: "CDP Webzine",
    author: "CDP",
    description: "Nos juntamos a ver pelis y debatimos por Jitsi"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'cine debate pandemia',
        short_name: 'CDP',
        start_url: '/',
        background_color: '#efa8b0',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
