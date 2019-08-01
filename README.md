# blog

language: node_js

node_js:
  - "11.3.0"

branches:
  only:
    - dev

install:
  - npm install

script:
  - npm run start
  - npm run build

after_success:
  - cd ./dist
  - git init
  - git config --global user.name "${GIT_NAME}"
  - git config --global user.email "${GIT_EMAIL}"
  - git add .
  - git commit -m "Update docs"
  - git push --force --quiet "https://${GITHUB_TOKEN}@${GH_REF}" master:master

env:
 global:
   - GH_REF: github.com/abu0418/blog.git