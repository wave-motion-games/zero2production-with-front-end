Zero to Production in Rust by Luca Palmieri is a fantastic book to start exploring rust and RESTful api programming.
The book excellently remains on topic by focusing almost exclusively on the server side development of a full stack newsletter
website, except where absolutely necessary.

This repo aims to provide a resource for creating a static front end website that communicates with the Rust backend and Postgres database.
This full stack application can be hosted on the same Digital Ocean App Platform app you created in chapter 5.

For security reasons, I've decided to start the branches at the end of chapter 6 instead of chapter 5. That way, publishing this project won't have
too obvious security issues (At least not any described by Palmieri). 
Unlike Palmieri's repo, I will only be creating branches from chapters that require updates to the client app.

I wanted to keep this client app as simple to use as possible without having to manage a bunch of framework code. The client app is built using
mostly VanillaJS with Vite to handle the server and code bundling.

To run locally you will need to set up a reverse proxy server (This project uses NGINX). You may set up Docker images for the client and reverse 
proxy server. Though, this project will assume that you will be developing them locally without using Docker.
You may copy the contents of nginx.conf into your NGINX configuration. For me it's in my /etc/nginx/conf.d/default.conf file.

Please follow for critical updates as the first version of this repo is missing some information that, if published,
some setup will requrie manual configuration. For example, there is no static-sites section in the spec.yaml file. 
If you already have generated an app with your spec.yaml file, you can add a static site from Digital Oceans' dashboard page.
