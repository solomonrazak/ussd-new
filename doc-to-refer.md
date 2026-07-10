# this is a new application to build a USSD from scratch with typescript and express.js
# libraries and tools used include:
1. redis for storage and caching.  ---- npm install redis
2. JS ussd-menu-builder    ------ npm install ussd-menu-builder
3. nodemon to start, run and track application.  ---  npm install --save-dev nodemon


4. typescript for type checks 

npm init -y
npm install express ussd-menu-builder
npm install --save-dev typescript @types/express @types/node ts-node
npx tsc --init