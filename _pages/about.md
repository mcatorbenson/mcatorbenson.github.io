---
permalink: /
title: "Welcome"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Here I intend to share some of the research that I am currently involved with. As of July 1st 2021, I am a research associate with the tree-ring lab of the Institute of Geography at Johannes Gutenberg-Universität-Mainz. I was previously with the Department of Civil Engineering at the Ohio State University, working in the [Stagge Hydrology Lab](https://www.jstagge.com/). I received my Ph.D. in Geoscienes from the University of Arkansas ([UARK Tree-Ring Laboratory](https://dendro.uark.edu)). Prior to obtaining my master's degree in Geography from the University of Minnesota (at the Center for Dendrochronology), I studied for a Bachelor of Science in Archaeology and Palaeoecology at Queen's University Belfast, Northern Ireland. My research interests mainly revolve around tree growth and past and current climate variability.
 
One of the first scientific discoveries we make as kids is that trees form rings over time. These rings are annual features in most tree species found outside of the tropics, and how well a tree grows (and therefore the how wide a ring becomes) is dependent on several factors including climate. Simplified, growth is limited by soil moisture in arid regions and by temperature at cold sites. The shared variability in year-to-year growth across a stand of trees, or trees from a whole region, is the basis of our science - dendrochronology. Tree rings have been used to date archaeological artifacts with unrivaled precision, and have provided a greater understanding of many of our planet's ecosystems. The relationship between tree-growth and climate has also allowed for the reconstructions of past changes in temperature and precipitation regimes. This information is crucial because our observational record of 100 years or so (at best) does not encompass the full variability of Earth's climate. By using tree rings as a proxy, we can extend the climate records hundreds, if not thousands, of years back in time.

A data-driven personal website
======
Like many other Jekyll-based GitHub Pages templates, academicpages makes you separate the website's content from its form. The content & metadata of your website are in structured markdown files, while various other files constitute the theme, specifying how to transform that content & metadata into HTML pages. You keep these various markdown (.md), YAML (.yml), HTML, and CSS files in a public GitHub repository. Each time you commit and push an update to the repository, the [GitHub pages](https://pages.github.com/) service creates static HTML pages based on these files, which are hosted on GitHub's servers free of charge.

Many of the features of dynamic content management systems (like Wordpress) can be achieved in this fashion, using a fraction of the computational resources and with far less vulnerability to hacking and DDoSing. You can also modify the theme to your heart's content without touching the content of your site. If you get to a point where you've broken something in Jekyll/HTML/CSS beyond repair, your markdown files describing your talks, publications, etc. are safe. You can rollback the changes or even delete the repository and start over -- just be sure to save the markdown files! Finally, you can also write scripts that process the structured data on the site, such as [this one](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb) that analyzes metadata in pages about talks to display [a map of every location you've given a talk](https://academicpages.github.io/talkmap.html).

Getting started
======
1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Fork [this repository](https://github.com/academicpages/academicpages.github.io) by clicking the "fork" button in the top right. 
1. Go to the repository's settings (rightmost item in the tabs that start with "Code", should be below "Unwatch"). Rename the repository "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and create content & metadata (see below -- also see [this set of diffs](http://archive.is/3TPas) showing what files were changed to set up [an example site](https://getorg-testacct.github.io) for a user with the username "getorg-testacct")
1. Upload any files (like PDFs, .zip files, etc.) to the files/ directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.  
1. Check status by going to the repository settings, in the "GitHub pages" section

Site-wide configuration
------
The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header. 
