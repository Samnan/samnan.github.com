---
layout: post
title: "Integrating Propel ORM with Kohana 3"
date: 2012-04-27 23:10
comments: true
categories: 
- modules
- kohana
- orm
---

[Propel](http://www.propelorm.org/) is a fast ORM with multiple database support and can be integrated with the Kohana 3.x framework instead of it's default ORM.
Since Propel generates it's models using command line, some work is involved in integrating it with Kohana 3. Therefore, I created a simple module for Kohana 3 with all the required scripts and stuff.
<!--more-->

* The module described in this article is available for download [here](https://github.com/Samnan/Kohana-Propel). *

Pre-requisite
-------------
While the module neatly integrates into Kohana, you will still require to download Propel sepearately and put it inside the module's vendor folder.

Apart from that, you will also need to have a working installation of [Phing](http://www.phing.info/trac/). The best way to do that is install it using PEAR, and then set the paths correctly in the script provided with the module.

Downloading Propel
------------------
Download Propel 1.6 or above (version 2.0 is in beta at the time of this writing) from [Propel website](http://www.propelorm.org/).

Using the module
----------------
Before you enalbe the module in your application's bootstrap, you will need to generate your database models, otherwise you will get exceptions as the required Propel configuration files will not be available until the schema is generated. From there on, you can simply regenerate your models when required without changing any other configuration.

Troubleshooting
---------------
If you enable the propel module for the first time, and you have not yet run the propel model and conf generator commands, Kohana will throw an exception. Make sure you run the convert-conf command at least once before you enable the module in your application.

If you encounter errors while running some of the commands above, then you are most likely missing the 'Phing' command on your system, or you have setup your paths incorrectly in the 'propel.bat' file.