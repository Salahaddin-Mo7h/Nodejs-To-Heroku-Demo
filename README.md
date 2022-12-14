# heroku-deploy-demo #

### What is this repository for? ###

* Deploy Demo of a NodeJS application using Heroku

### How do I get set up? ###

* run `npm install` : To install the dependencies 
* run `npm start` : It will start your server on your local machine
* [Get started with node.js deployment on heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

### Heroku setup steps ###

* Install [Heroku CLI](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)
* Login to heroku in terminal `heroku login`
* Once installed check it using `heroku -v`
* Prepare the app 
    * `git clone https://github.com/ayushkul/heroku-deploy-demo.git`
    * `cd heroku-deploy-demo`
* Create the app on Heroku
    * `heroku create your-app-name`
    * Go to [Heroku Dashboard](https://dashboard.heroku.com/) and find your newly created application (just to verify).
    * Run `git init` in your project folder.
    * Connect to remote repo `heroku git:remote -a your-app-name`
    * Add all files in git `git add .`
    * Commit your code `git commit -am "make it better`
    * Push your code to trigger the build `git push heroku master`

### Github Automated build setup steps ###

* Go to [Heroku Dashboard](https://dashboard.heroku.com/) and find your newly created application.
* Go to the deploy section of your app (As shown in Youtube tutorial)
* Choose Github as Deployment method
* Connect your Github account
* Create a new repository on Github or find existing one.
* Click on connect and enable automatic deployment.

### reach me out if you face any issues? ###

* Salahaddin : [This Link](https://www.linkedin.com/in/salahaddin-mohammed/)

