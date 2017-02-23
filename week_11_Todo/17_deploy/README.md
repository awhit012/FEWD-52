![GeneralAssemb.ly](https://github.com/generalassembly/ga-ruby-on-rails-for-devs/raw/master/images/ga.png "GeneralAssemb.ly")

# Deploying Online

## Deploying front end projects is easy! 
### Thanks to free services like BitBaloon and Github Pages. 

#### BitBalloon
- Features drag and drop. 
- All you need is a front end project with the main fail in the root folder
- and that file to be called `index.html`
- and drag and drop that folder onto the bitbaloon site

[BitBaloon.com](https://www.bitballoon.com/)

#### GitHub Pages
- Also quite easy, though not drag and drop. Very convenient if already using GitHub.
- Just create an account
- Create a 'repo' called your-user-name.github.io
- upload your project to that repo

[GitHub Pages Full Instructions](https://pages.github.com/)

[Get a custom domain with for your GitHub Pages site](https://help.github.com/articles/using-a-custom-domain-with-github-pages/)

##### To update your local changes on Github Pages:
- navigate into your repo (project) folder:
  - `cd ~/Desktop/**path-to-your-folder**/yourusername.github.io`
- add your changes to be commited:
  - `git add -A`
- commit your changes (a commit is like a super-save) and add a message
  - `git commit -m 'your message here'`
- push your changes to GitHub
  - `git push`

## Demo
Let's do it together!
