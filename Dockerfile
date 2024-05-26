From node:latest
Workdir /usr/src/app
Copy ./app .
Expose 3000
CMD ["node", "index.js"]