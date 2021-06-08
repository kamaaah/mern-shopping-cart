# mern-shopping-cart

# See all implementations about differents scripts into package.js => "scripts": {
    "start": "node backend/index.js",
    "server": "nodemon backend/index.js",
    "client": "npm start --prefix frontend",
    "dev": "concurrently \"npm run server\" \"npm run client \"",
    "data:import": "node backend/seederScript.js"
  }, 
   => very interesting to start the entire application in one command :
   npm run dev

    # "data:import": "node backend/seederScript.js" is to insert static datas into MongoDb with the command :
    ==> $ npm run data:import
