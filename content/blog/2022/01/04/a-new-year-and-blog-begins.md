---
layout: blog
title: New Year, New Blog!
date: 2022-01-04T22:01:55.088Z
coverimg: /images/blog/peter-waving.png
---
# 🎉 New Year, New Blog! 🍾

Happy new year to everyone 🎉!!

It's always amazing to learn new technologies and face new challenges, specially at the beginning of a new year! Such challenges is exactly what this new website has brought me! It was fun to learn everything that was needed to finally ship this website/blog to production! Even though there are still many things that still need to be improved around here, it's always important to celebrate small steps, right? So, this post is a way to celebrate that this new blog is up and running 🎉!

## My first old website: "My Bits"

I still remember my first personal website project, it was called "My Bits" (the Github repository can be found [here](https://github.com/ipeternella/mybits)). It was a simple project as I was just beginning my adventure in the computing world (I had just been hired for my first software engineering job).

Despite being a simple website, this personal project required me to learn many things, specially how to deal with all the infrastructure that is necessary to host a website! The technology stack that I used was roughly as follows:

* [Django](https://www.djangoproject.com/)
* [Django Rest Framework](https://www.django-rest-framework.org/)
* [Daphne](https://github.com/django/daphne) as the ASGI application server (not Gunicorn as the front-end used websockets to communicate with the Django project!)
* [Angular](https://angular.io/)
* [NGINX](https://www.djangoproject.com/)
* [Docker](https://www.docker.com/)

The project also featured a small chatbot which could be used by users to ask questions about me! A Django backend was created to store some possible questions and its answers on a MySQL database. Thanks to Docker and Docker Compose, it was very easy to start a local version of the production environment as it quickly booted up the Django project, the MySQL database and an NGINX container! I remember how amazed I was by Docker technologies and how easy it was to have a database running on localhost so that I could quickly write my tests using it! I guess I'm still amazed by Docker containers even today as it really changed everything in the computing world.

Speaking of containers and infrastructure, this old version of "My Bits" project was hosted on a VPS ([Virtual Private Server](https://en.wikipedia.org/wiki/Virtual_private_server)) on [VPS Dime](https://vpsdime.com/)! It wasn't easy to setup a Daphne ASGI server with NGINX on a bare virtual machine to properly upgrade the HTTP protocol to web sockets! But... after reading a lot of documentation, it worked. Another hard part was purchasing a domain, configuring DNS servers and setting up the HTTPS certificates! For a junior engineer, it was a bit overwhelming, but I knew that all the coding, documentation reading and infrastructure knowledge would be important to me in the future, and that's exactly what kept me going to finish that project!

Here's a picture of this old personal website with the chatbot:

![Old Personal Website MyBits](/images/blog/mybits_old.png "Old Personal Website My Bits")

The idea of creating a website originated from an old friend of mine, [Ricardo](https://github.com/ricardochaves), who was a senior software engineer in my team when we worked at Editora Globo. He told me to create and host a website from scratch as that would be very important to improve my backend and infrastructure skills! And that's exactly what happened! I'm so thankful for all the mentoring I had from Baltazar (not only for this personal project but many others as well)! I definitely wouldn't be the same software engineer without his help and the help of another old friend, [Antunes](https://github.com/willianantunes). Thanks for all the support and mentoring, you two!

## A second version of "my bits"

I'm a backend developer who really likes to study a lot about infrastructure (maybe because of my first "My Bits" project? who knows, haha!). As such, a few years later, a second version of the "My Bits" project was created with some newer technologies such as:

* [Terraform](https://www.terraform.io/)
* [Google Cloud Platform](https://cloud.google.com/)
* [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine/docs)

This project was a little bit more complex in terms of the backend as the project was hosted on a GKE cluster which was completely configured with Terraform. The CI/CD pipelines were created with [Github Actions](https://docs.github.com/en/actions) to build and upload Docker images to a Google Container Registry in order to finally deploy such images to the GKE container! However, the front-end of this project was just based on Django Templates, so no modern frontend framework was used!

This second version is also on Github, but it's a private project! I'll open-source it later!

## Finally, this version of "my bits"

Eventually I decided it was time to challenge myself again: it was time to move out of my "comfort zone" (backend development and infra/devops) and go into a "growth zone" where the technologies and tools would not be familiar at all to me: frontend development! As a consequence, I decided to rewrite my personal website once again but with more modern frontend frameworks!

After talking to my old friend Antunes, he told me about his experience with Gatsby and recommended it to me. We also talked about some frontend ideas and concepts such as "css-in-js" tools, Material UI, and many others! After this introduction of some frontend tools, I defined the tech stack of this current website as follows:

* [Gatsby](https://www.gatsbyjs.com/)
* [Phaser](https://phaser.io/)
* [Netlify CMS](https://www.netlifycms.org/)
* [Netlify Cloud](https://www.netlify.com/)
* [Material UI](https://mui.com/)
* [Styled Components](https://styled-components.com/)
* [Jest](https://jestjs.io/)

I'm so thankful that Antunes presented me such technologies! It was super fun to learn Gatsby (which naturally required me to learn more about React)! I also ended up adding Phaser to create a very short RPG-like game as I've always wanted to develop a short game from scratch. Moreover, I added Netlify CMS to help me out create with this blog... it was great to learn about it! Also, Netlify technologies are super easy to use and it amazed me how easy it was to deploy this website and configure my domain and set up the HTTPS certificate. It was much easier than setting up a bare VPS machine from scratch as I did in the first version of my website. The computing world evolves so quickly!

## That's all for now, folks!

Challenging myself with different technologies in personal projects required me to learn many different and fun things! I encourage every developer out there to test new technologies in personal projects, or to create some "playground projects" to test different tools! It's amazing how much one can learn from these projects!

So... that's it for this first post! As I improve this website or venture myself with newer technologies or discover anything that can be useful to others I'll definitely create more posts!

```python{numberLines:
from ipeternella import PeterFox

peter = PeterFox()
peter.says("See you all next time!")
```