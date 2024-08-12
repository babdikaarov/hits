# Getting started

## ECAP cms usage

### local usage

- config

```yaml
# /static/admin/config.yaml
local_backend: true #set to true
```

- run server

```bash
# run comand on seperated terminal
npx decap-server

# add /admin path to the local hugo server
```

### netlify usage

- config

```yaml
# /static/admin/config.yaml
local_backend: false #set to false
```

- invite on netlfiy identity any user
- unable git-gateway on netlify

## rest documentation pending

TODO:

- documentation
- seo optimization (tags aria-labels sitemap limit crawler from paginated pages )
- create content for content creation guide and shortcode usage
- documentaion usage of og_data API

### pending articles

- Behavioral interview questions by Hello IT Safari => og data
- Аналитика вакансий Кыргызстана by Hello IT Safari 🦖 => table
- Cover letters and engaging texts by Hello IT Safari 🦖 => md navigation, og data
- Soft skills, interviews, and career by Hello IT Safari 🦖 => md navigation, table
- Критерии для оценки работодателей by Hello IT Safari 🦖 => table
- English materials by Hello IT Safari 🦖
- Junior (и не только) Frontend Developer by Hello IT Safari 🦖
- AI для работы и учебы by Hello IT Safari 🦖
- Кино и сериалы про карьеру by Hello IT Safari 🦖
- Мотивация by Hello IT Safari 🦖

- add logic to prevent infinite crawler

```hugo

    {{ if .Params.noindex }}
        <meta name="robots" content="noindex, nofollow">
    {{ end }}

```

```md
---
title: "My Page"
date: 2024-08-12
noindex: true
---

```
