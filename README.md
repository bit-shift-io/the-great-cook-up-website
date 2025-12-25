# The Great Cook Up Website

👉 **[View the deployed app](https://thecookup.netlify.app)**


I have 2 repos setup on github: 
1. static data files (https://github.com/bit-shift-io/the-great-cook-up)
2. a vite static files server project (https://github.com/bit-shift-io/the-great-cook-up-website)

When a push occurs to my static files repo, it triggers the vite project action to occur which generates a static website from the static data files repo, and then it deploys the static website to netlify (https://thecookup.netlify.app).

## Development

  pnpm dev
    Starts the development server.

  pnpm build
    Builds the app for production.

  pnpm start
    Runs the built app in production mode.


## Helpful resources

Project bootstrapped with this guide: https://github.com/vercel/next.js/tree/canary/examples/with-react-native-web

Deployment to gh-pages sample here: https://github.com/gregrickaby/nextjs-github-pages


