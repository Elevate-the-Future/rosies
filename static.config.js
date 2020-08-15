// This file is used to configure:
// - static-site generation
// - Document shell (index.html)
// - ...tons of other things!

// Get started at https://react-static.js.org

import React from 'react'

export default {
  siteRoot: 'file://',

  Document: ({
    Html,
    Head,
    Body,
    children,
  }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link href="https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />

        <link rel="stylesheet" href="/assets/css/bootstrap/bootstrap.css" />
        <link rel="stylesheet" href="/assets/fonts/ionicons/css/ionicons.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />

        <link rel="stylesheet" href="/assets/fonts/fontawesome/css/font-awesome.min.css" />

        <link rel="stylesheet" href="/assets/css/slick.css" />

        <link rel="stylesheet" href="/assets/css/helpers.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/restaurant.css" />
      </Head>
      <Body>{children}</Body>

      <script src="/assets/js/jquery.min.js"></script>

      <script src="/assets/js/popper.min.js"></script>
      <script src="/assets/js/bootstrap.min.js"></script>
      <script src="/assets/js/slick.min.js"></script>
      <script src="/assets/js/jquery.mb.YTPlayer.min.js"></script>

      <script src="/assets/js/jquery.waypoints.min.js"></script>
      <script src="/assets/js/jquery.easing.1.3.js"></script>

      <script src="/assets/js/jquery.magnific-popup.min.js"></script>
      <script src="/assets/js/magnific-popup-options.js"></script>

      <script src="/assets/js/main.js"></script>
    </Html>
  )
}
