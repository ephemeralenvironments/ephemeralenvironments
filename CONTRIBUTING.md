# Contributing to EphemeralEnvironments.io

As a growing community project, we always appreciate contributions. We're looking for:

1. **Content:** add to the existing `.md` feature guides, create a new guide, help with project documentation
2. **Code:** enhance the site with HTML/CSS/JS elements, create CI/CD pipelines, perform general maintenance
3. **Design:** create new infographics, assets, improve existing formatting

Whether this is your first time contributing or you're an OSS pro, we would love to have your help improving <a href="https://ephemeralenvironments.io" target="_blank">EphemeralEnvironments.io</a>!

## How can I contribute?

### Issues

We manage our contributions through [Issues](https://github.com/ephemeralenvironments/ephemeralenvironments/issues). If you see an open issue tagged `help wanted`, drop a comment with a brief description of how you plan to work on this, and we'll assign it to you.

If you have a bug report or feature request, open an issue using the appropriate template. If you would like us to assign the issue to you, tick the checkbox.

### Pull Requests

Once you're assigned an issue, fork a copy of this repo and create a branch.

Branch names should adhere to the format `<type>/<name-of-issue>`, where `<type>` describes your contribution (`feat`, `fix`, `chore`, `refactor`, `test`, etc.).

Once you have ensured your branch works locally, open a PR back to this repo.

1. PR title should be formatted as `<type>: <Name of issue>`
2. Include a brief description
3. Link to the open issue

A maintainer will request changes if necessary. For content contributions, don't forget to add your name to the **Content Contributors** section at the bottom of the `.md` file.

## Setup Instructions

This project is built using

- [Hugo](https://gohugo.io/), an open-source static site generator
- [Docker](https://www.docker.com/), a platform to generate containerized environments.

Using Docker for developing this project can help minimize conflicts arising from machine, OS, or dependency variations.

### To get the project up and running with Docker:

1. Download and Install [Docker](https://docs.docker.com/get-docker/)
2. Run `docker compose up`
3. Visit the site at `http://localhost:1313`
4. Stop the container with either `Ctrl + C` or `docker compose stop`

    **NOTE:** This repo uses [Google's reCaptcha](https://developers.google.com/recaptcha/docs/faq#im-getting-an-error-localhost-is-not-in-the-list-of-supported-domains.-what-should-i-do). To view the recaptcha in development you can request your own key, list `127.0.0.1` as the domain and visit the site on the browser at `127.0.0.1:1313`. The data sitekey can be edited at `themes/hugo-theme-ephemeralenvironments/layouts/partials/subscribe.html`

5. Make your code changes! The app will reload whenever you save

#### Helpful Docker Commands

- `docker compose up` Builds and runs project in a container, based on instructions in Compose file and references dockerfile for container image specs
- `docker compose down` Stops and removes containers (all data too)
- `docker compose stop` Stops but does not remove the container
- `docker ps` List all running containers

### To get the project up and running with Hugo:

1. Follow the [installation guide](https://gohugo.io/installation/)
2. Go to the root of the project
3. Run `hugo server`

Your project should now be running locally on the link generated by Hugo.

If you've found EphemeralEnvironments.io valuable, please give us a star on GitHub -- one star goes a long way and helps us grow our project and community!

## Contact

For any questions regarding a particular issue or PR, tag [@nbeck415](https://github.com/nbeck415) in a comment.

Email <natalie@shipyard.build> for any other questions.
