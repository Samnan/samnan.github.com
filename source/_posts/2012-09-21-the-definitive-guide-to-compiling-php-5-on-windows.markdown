---
layout: post
title: "The definitive guide to compiling PHP 5 on Windows"
date: 2012-09-21 11:03
comments: true
categories: 
- howto
- php
- windows
- guides
---

Compiling PHP 5 on a Windows platform is a messy business. There are lot of pitfalls and annoying problems that make it difficult to compile PHP itself, or a PHP extension on Windows. After recently going through the pain, I decided to create a step by step guide so that it might be useful to other people out there.
Using this guide, the latest version of PHP 5(currently 5.4.7) and related extensions can be compiled on Windows 32bit and 64bit platforms (Windows XP, Vista, 7).
<!--more-->

##Pre-requisite

This article assumes you have basic knowledge of using the Windows command line as we will be doing most of the work on the command line, which is the easier way to compile PHP on windows. Other than that most of the tools/applications mentioned in the article are easily downloadable and all are free, with links provided wherever necessary. You will also need some archiving tool that can extract zip, gz and 7z files.

##Setting up the environment

Follow the steps exactly as they are described below:

- Install Microsoft Windows SDK 6.1

- Install Microsoft Visual Studio 2008 (Express/Ultimate/Super, all versions work, but VS2010 will not work)

- Create a folder somewhere on your disk with enough space available for the source, tools and output files (for this article we will use C:\php, you should replace it with the path where you create your own folder)

- Download latest version of PHP binary tools from [http://windows.php.net/downloads/php-sdk/](php.net), extract into C:\php\ directly, so that the c:\php folder contains the bin, script and share folders from binary tools.

- Download latest PHP 5 32bit source code from [http://windows.php.net/download/](php.net). You will most probably want the thread safe version, but you can also try non-thread safe if that is your requirement.

- Create the folder structure inside C:\php so that it look like below (if required):

		C:\php
		|__ bin
		|__ script
		|__ share
		|__ php54dev
		    |___vc9
		        |___x86

- Now extract the PHP source code in the x86 folder, so that the complete path of the source code looks like this:

		C:\php\php54dev\vc9\x86\php-5.4.7-src

- Download the dependency headers and libraries package from [http://windows.php.net/downloads/php-sdk/](php.net), usually called "deps-5.4-vc9-x86.7z". Extract it inside the folder C:\php\php54dev\vc9\x86\deps folder, so that the 'deps' folder contains bin, include and other folders from the package.

That's all we need to start configuring and compiling php and related extensions.

## Configuring and Compiling PHP

From start menu, within the Windows SDK 6.1 folder, start the "CMD Shell". It is basically a command prompt with the paths setup properly for using the compiler and related tools. One by one, enter the following commands:
[Note: replace `C:\php` with the path of your folder in the commands below]
		
		
		setenv /xp /x86 /release         # command prompt colors would change as you run this to confirm it worked
		set PATH=C:\php\bin;%PATH%       
		cd c:\php\php54dev\vc9\x86\php-5.4.7-src
		
		buildconf
		
After the last command you will see a message 'Now run configure --help'. At this stage you can run the command `configure --help` to see all available option for PHP compilation. I will describe some of those below which arre most commonly used (each command is preceded by comments on what it does).


	# compile everything, including all extensions statically into PHP
	configure

	# compile only PHP, without any extensions
	configure --disable-all

	# compile php statically with only the 'curl' extension 
	configure --disable-all --with-curl

	# compile php with only the 'curl' extension as a separate dll
	configure --disable-all --with-curl=shared
	# another example of the above command
	configure --disable-all --with-curl=shared --with-bz2=shared --with-mysql=shared

	# compile php with command line
	configure --disable-all --enable-cli

	# compile everything, but leave the curl extension
	configure --without-curl


After you have run the desired configuration command, all you have to do to finally compile PHP is to run the command:

	nmake

Wait for a few minutes and if the compilation is successful, you should have the php libraries, dll's and cli command line (if configured) in the `Release_TS` folder.

###Compiling individual extensions
Let's assume you want to only recompile the `curl` extension after you have applied some patch to it in the source code tree. You do not need to rebuild all of build, just run the following command to re-build the `php_curl.dll` extension again:

	nmake php_curl.dll

If however, you want to compile it to PHP statically, then you will have to run `nmake` since all of the PHP needs to be linked again, though it will take much less time than first compilation since only the changed files are compiled and linked again.


###Creating / compiling your extension
Creating a PHP extension from scratch requires another tutorial, and there are plenty of resources available online that show you how to do that, but just in case you want your extension to be part of the build whenever you run `nmake`, then you need to follow just one extra step.

Create a folder called 'pecl' at the following location:

`c:\php\php54dev\vc9\x86\`

Asusming your extension is called `myext`, then copy the `myext` folder inside the pecl folder, so that the folder structure looks like this:

`c:\php\php54dev\vc9\x86\pecl\myext`

Now you have to reconfigure PHP so that it finds your new extension:

	buildconf
	configure --enable-myext
	# alternatively, to build the extension as a dll, use the command below
	configure --enable-myext=shared

	nmake php_myext.dll

That's it! That is everything you need to know to configure and compile PHP on your Windows platform.

####Compiling 64bit version of PHP

While the compilation process of 64bit PHP source code is very similar to above, there are only few small things that changed, for example, `x86` in the above article should be replaced with `x64`, ans similarly, the folder structure should contain `x64` instead of `x86`. Other than that, everything should work fine if you have installed the 64bit versions of the compiler on your machine.
