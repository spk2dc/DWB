---
layout: single
title: Sitemap
permalink: /sitemap/
toc: false
sidenav: true
side_react: true
comments: false
anchor: false
reviews: true
adds: true
slack: true
hotjar: true
excerpt: "Sitemap with Post by Categories, by Tags and by Years"
image:
  cover: true
  path: &image /assets/images/sitemap.png
  feature: *image
  thumbnail: /assets/images/sitemap-320.png
header:
  image: /assets/images/sitemap-1200.png
  teaser: /assets/images/sitemap-320.png
  excerpt: "Sitemap of Posts"
support: [adds, cookies, anchor]
folder: _pages
product: sitemap
slug: sitemap
github_editme_path: donaldboulton/DWB/blob/gh-pages/_pages/sitemap.md
---

{% include octo-arm.html %}

# Sitemap Posts by Categories

Links to Posts by Years, Months, Days and Tags.

For your viewing and or all robots out there. Here is an [XML version]({{ "sitemap.xml" | absolute_url }}) and a [Atom Version]({{ "atom.xml" | absolute_url }}) or a [Json Feed]({{ "feed.json" | absolute_url }}) with a listing of all Pages and Posts, available for digesting as well.

# Posts

{% include posts-all.html %}

{% include post_pagination.html %}
