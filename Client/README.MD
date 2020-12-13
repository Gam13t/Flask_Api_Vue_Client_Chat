# CHAT CLIENT
### Introduction
This VUE.js chat client will fit for all people who want to learn the main basic ideas of making client to work with back-end.
### Basic idea of realization
- For main technology I'll choose Vue.js because I want to learn this framework for a long time and this project gave me that possibility. 
- For interaction with API Vue.js requires axios for proceeding Hyper Text Transfer Protocol requests.
- We already used pusher for back-end of this project, and for using all his basic features we need pusher.js for this project's client.

### How to setup this Client

For setting this project up, make sure that you have pre-installed Node.js with node --version.

- Install Vue CLI globally on your system
>  $ npm install -g @vue/cli  
> // installing Vue  
>  $ vue create vue_chat_client  
>  // creating vue project  
>  $ cd vue_chat_client  
>  $ npm run serve  
>  // if you setup everything correctly soon you'll get the log with successfull boot of client. That means you can proceed to next step.  

- Add libraries
> vue add axios  
> npm install pusher-js  
> vue add bootstrap-vue   
> // while installing bootstrap-vue make sure you don't use babel/polyfill and set them to No.  

###### While installng axios you may experience error logs from vue js, the only way to solve them is to delete line of code with exception from vue_chat_client/src/plugins/axios.js

- Now put all files from github into vue_chat_client project folder and execute npm run serve. If you setup everything correctly soon you'll get the log with successfull boot of client. That means you're cool.
