# mean-boilerplate
A `MEAN` full stack `JavaScript` + `TypeScript` app boilerplate - `MongoDB` + `Express.js` + `Angular2` + `Node.js`

## Live Demo
Hosted at https://mean-boiler.herokuapp.com/

## Getting Started
```bash
git clone https://github.com/valmassoi/mean-boilerplate
cd mean-boilerplate && mkdir data

# Install dependencies
npm install

# Create .env
echo "SECRET_KEY = \"superdupersecretkeythatnoonecanknow\"" >> .env

# run and watch for changes in .ts files
mongod --port 27018 --dbpath=./data --smallfiles
npm run nodemon

# Applciation url: http://localhost:8081

# Deploy
npm run build
In ./index.html comment out Dev scripts
  uncomment Production scripts
```

## TODO
- [x] Fix 404 when going to non index page  
- [ ] Webpack  
- [ ] Clean up `package.json` scripts  
