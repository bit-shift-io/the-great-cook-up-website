# The Great Cook Up Website

👉 **[View the deployed app](https://bit-shift-io.github.io/the-great-cook-up-website/)**


I have 2 repos setup on github: 
1. static data files (https://github.com/bit-shift-io/the-great-cook-up)
2. a next.js project (https://github.com/bit-shift-io/the-great-cook-up-website)

When a push occurs to my static files repo, it triggers the next.js project action to occur which generates a static website from the static data files repo, and then it deploys the static website to github pages (https://bit-shift-io.github.io/the-great-cook-up-website/).

## Development

  pnpm dev
    Starts the development server.

  pnpm build
    Builds the app for production.

  pnpm start
    Runs the built app in production mode.


  Note that when the browser launches and says 404, you need to append the basePath so the url will actually be:

    http://localhost:3000/the-great-cook-up-website

## Helpful resources

Project bootstrapped with this guide: https://github.com/vercel/next.js/tree/canary/examples/with-react-native-web

Deployment to gh-pages sample here: https://github.com/gregrickaby/nextjs-github-pages


