---
layout: single
title: Social Sharing
permalink: 2017-04-11-post-Social-Sharing.html
date: 2017-04-11 16:16:01 -0600
last_modified_at: 2017-04-28T12:42:38-04:00
search: true
author: Donald Boulton
author_profile: true
tags:
  - Social Sharing
  - MMistakes
category:
  - Social
locations:
  - Idabel Oklahoma
  - 4 Oaks Storaage
toc: true
toc_label: "Page Contents"
read_time: true
comments: false
related: true
share: false
sidenav: true
side_react: true
reviews: true
adds: true
cookies: true
share: false
web-intents: false
slack: true
hotjar: true
newsletters: true
event_title: My Birthday
event_comment: Love ya Mom
event_date: 2019-15-1
tweet_id: 1027102649798287360
anchor: true
social-share: twitter --twitter-hashtags facebook
excerpt: "Using just links in Asp.NET Core 2 add like included below  @Context.Request.GetDisplayUrl(), to get the url of the page your sharing. View the source of this repo to see how to do it in Jekyll"

image:
  cover: true
  path: &image /assets/images/social-sharing.jpg
  feature: *image
  thumbnail: /assets/images/social-sharing-320.jpg
header:
  image: /assets/images/social-sharing.jpg
  teaser: /assets/images/social-sharing-320.jpg       

support: [adds, cookies]
folder: _posts
product: social-sharing
slug: social-sharing
github_editme_path: donaldboulton/DWB/blob/gh-pages/_i18n/en/_posts/2017-04-11-post-Social-Sharing.md
---

{% include octo-arm.html %}

{% include page-intro.html %}

# Social Sharing Bootstrapped with no external JavaScript

Using just links in Asp.NET Core 2 add @@Context.Request.GetDisplayUrl() to get the url of the page your sharing.

First download Mofit.Social and install it. Open your site folders Modules/Mofit.Social/Views/Parts/Social.cshtml and delee everything in the file. and Add [the below](#below) changing it to your own website content.

We will be using Font Awesome Icons for social icons on our bootstrap buttons but you could easily use glyph-icons or your own images instead and all the links open in a browser friendly window, thus no user gets lost  from your website on a new browser window, tab or page.

Not a download of JavaScript or Cookies is required.

As this is an issue? Probably not on your nice high-speed broadband, but is it an issue on your phone.

Of course this technique does have some downsides, the first is that you don’t have access to things like share counts and features like Facebook showing you if your friends have liked an article.

And some other issues like not being able to track clicks onto them are easily mitigated with some JavaScript feeding into your analytics package.

There is also an added bonus in that you don’t need to have Facebook/Twitter/Etc cookies coming from your website.

How to do this

Add the links below. Changing to Your Titles, Summary and where needed a Description.

Url's Model is buy url=@Model.Url on each link  and by addingdata-url="@Model.Url" so the page your user is on gets shared, instead of your website home url.

```html
    <div class="postnewtweet pull-left">
        <div class="btn-group" role="group">
        <a class="btn btn-info btn-sm" data-toggle="tooltip" data-url="@@Model.Url"
        href="https://twitter.com/intent/tweet?url=@@Model.Url&text=At Don Boulton.com&via=donboulton"
                data-original-title="Post A New Tweet" data-user-id="105217183">
        <button type="button" class="btn btn-info btn-sm newtweet"></button>Tweet</a>
    <div class="divgplusshare pull-right">
        <div class="btn-group" role="group">
        <a class="btn btn-danger btn-sm" data-toggle="tooltip" data-url="@@Model.Url"
        href="https://plus.google.com/share?url=@@Model.Url"
        onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" data-original-title="Share on Google+">
```

 Share

```html
 <button type="button" class="btn btn-danger btn-sm gplusshare"></button></a>
 ```

## The Container div

```html
        <div id="socialcontainer" class="center">
        <div class="row">
        <span class="btn-group">
        <a class="iframe btn btn-sm btn-default" data-toggle="tooltip" data-url="@@Model.Url"
        data-count="horizontal" title="" href="https://feeds.feedburner.com/donboulton/Sohc" data-original-title="Don Boulton Blog RSS">
        <i class="fa fa-rss"></i>
        </a>
        <a class="btn btn-sm btn-default" data-toggle="tooltip" data-toggle="tooltip"
        data-original-title="Email Donald Boulton at Google + Page" href="mailto:don-boulton-4557@pages.plusgoogle.com" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon fa-envelope" viewBox="0 0 512 512">
            <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
        </a>
        <a class="btn btn-sm btn-default" data-toggle="tooltip" data-count="horizontal"
                       href="https://twitter.com/intent/tweet?url=@@Model.Url&text=YOUR TEXT&via=TWITTER USERNAME"
                       class="twitter-share-button" data-original-title="Twitter Share" data-user-id="TWITTER USER ID">
        <i class="fa fa-twitter"></i>
        </a>
        <a class="btn btn-sm btn-default" data-toggle="tooltip"
                       data-url="@@Model.Url"  rel="publisher" href="https://plus.google.com/share?url=@@Model.Url"
        onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" data-original-title="Share on Google+">
        <i class="fa fa-google-plus"></i>
        </a>
        <a class="btn btn-sm btn-default" data-toggle="tooltip"
                       data-url="@@Model.Url" href="https://facebook.com/?n=donboulton"
        onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" data-original-title="Facebook" >
        <i class="fa fa-facebook"></i>
        </a>
        <a class="btn btn-sm btn-default" data-toggle="tooltip" data-url="@@Model.Url"
                       href="https://www.linkedin.com/shareArticle?mini=true&url=@@Model.Url&title=YOUR TITLE%20Website&summary=My%20favorite%20web%20site&source=YOR WEBSITE URL" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" data-original-title="LinkedIn">
        <i class="fa fa-linkedin"></i>
        </a>
        <a class="btn btn-sm btn-default" data-toggle="tooltip"
        data-url="@@Model.Url" href="https://onedrive.live.com/redir?resid=BFE52B3504AE372E%21135"
                       onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" data-original-title="My One Drive">
        <i class="fa fa-windows"></i>
        </a>
        <a data-toggle="tooltip" data-url="@@Model.Url"
                       data-original-title="Proof of God scientifically" class="youtube btn btn-sm btn-default" href="https://www.youtube.com/embed/p00AYijRJy4?feature=player_detailpage">
        <i class="fa fa-youtube"></i>
        </a>
        <input value="donboulton/Sohc" name="uri" type="hidden"> //For Feedburner
        <input value="en_US" name="loc" type="hidden"> //For Feedburner
        <meta content="EN" itemprop="InLanguage"> //For LinkedIn
```

Attach Mofit.Social Part to Blog Posts and Pages, set positioning with placement.info if you need it to be place anywhere but at the bottom of your post or page.

Add the page link to your post or page in the Mofit.Social Url input, add the full URL.

### Limited Dependencies With Twitter Web Intents

Some sites may prefer to embed the unobtrusive Web Intents pop-up JavaScript inline or without a dependency to platform.twitter.com. The snippet below will offer the equivalent functionality without the external dependency. [Twitter Web Intents page](https://dev.twitter.com/web/intents "Twitter Web Intents").

```javascript
    <script>
        (function() {
        if (window.__twitterIntentHandler) return;
        var intentRegex = /twitter\.com(\:\d{2,4})?\/intent\/(\w+)/,
          windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes',
          width = 550,
          height = 420,
          winHeight = screen.height,
          winWidth = screen.width;

        function handleIntent(e) {
        e = e || window.event;
        var target = e.target || e.srcElement,
            m, left, top;

        while (target && target.nodeName.toLowerCase() !== 'a') {
          target = target.parentNode;
        }

        if (target && target.nodeName.toLowerCase() === 'a' && target.href) {
          m = target.href.match(intentRegex);
        if (m) {
            left = Math.round((winWidth / 2) - (width / 2));
            top = 0;

        if (winHeight > height) {
              top = Math.round((winHeight / 2) - (height / 2));
        }

            window.open(target.href, 'intent', windowOptions + ',width=' + width +
        ',height=' + height + ',left=' + left + ',top=' + top);
            e.returnValue = false;
            e.preventDefault && e.preventDefault();
        }
        }
        }

        if (document.addEventListener) {
        document.addEventListener('click', handleIntent, false);
        } else if (document.attachEvent) {
        document.attachEvent('onclick', handleIntent);
        }
      window.__twitterIntentHandler = true;
    }());
    </script>
```
