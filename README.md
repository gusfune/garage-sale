[![Netlify Status](https://api.netlify.com/api/v1/badges/472f8eac-824d-43a1-ae71-e269b5806bff/deploy-status)](https://app.netlify.com/sites/garage-sale/deploys)

## Garage Sale Site

This is a website I made for my Garage Sale when moving to Sweden.
It's built on GatsbyJS and content pulled from AirTable.


### Running

You need to setup environments variables before running:
```
AIRTABLE_KEY
AIRTABLE_BASE_ID
GOOGLE_ANALYTICS_ID
```

Website can be run with `npm run develop` locally. For building it's `npm run build` and you can check the final build with `npm run serve`.
Unfortunately this project won't run without setting up a similar AirTable project and putting your own API Key and ID because of security concerns (would be a flaw if I share my own key).
