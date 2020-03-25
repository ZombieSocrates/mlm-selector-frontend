# mlm-selector-frontend
Minimal frontend to choose and track hosts for ChIDEO MLM.

# dependencies
- [vue-cli-3](https://cli.vuejs.org/guide/installation.html)
- [Netlify CLI](https://docs.netlify.com/cli/get-started/#installation)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
Modified this from the standard vue-cli boilerplate to reflect the usage of the netlify-cli
```
netlify dev -f functions
```

_N.B._: As the code stands right now, the functions that fire will point at the production backend, even if you're doing local development. Ross should probably fix this.

### Compiles and minifies for production
```
npm run build
```

^ is the standard, but because we're using Netlify any time you push something to `master` a deploy will happen. This means it's best practice to develop in feature branches and then merge PRs.

### Run your unit tests
There aren't tests right now...
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# the site in all its glory
You can check it out [here](https://ml-eminem-6957a4.netlify.com/). But just be advises that the heroku backend powering it is free-tier and takes a little bit of time to wake from its slumber. So to cheat, you may want to visit [here](https://ml-eminem.herokuapp.com/status) to poke the API awake.

# sketchy to-do list
- Actually have the `Choose Host` button insert records in the backend database
- Better date handling, perhapse with `moment.js`
- More cat pictures
- Actually have some kind of animation to selecting a host
- Could this actually create or modify a calendar invite, too? That would be crazy
