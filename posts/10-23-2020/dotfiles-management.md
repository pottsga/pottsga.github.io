---
layout: post.md
title: "Dotfiles Management"
active: posts

date: 2020-10-23T19:37:00Z
description: How to manage your dotfiles with GNU stow 
tags: [ dotfiles, gnu stow ]
---

## Summary

Managing your dotfiles on multiple machines has never been easier with the utilization of [`GNU stow`](https://www.gnu.org/software/stow/). 

Whereas before to install dotfiles you would `cp` each individual version-controlled file to the user's home directory, `GNU stow`, originally a utility for managing `perl` extensions, has allowed for this process to be made much easier. To learn how to implement this in your dotfiles setup, read this article.

An exmaple of this type of integration can be found in my dotfiles at [`https://github.com/pottsga/dotfiles`](https://github.com/pottsga/dotfiles).

## Process

### 1. Create `git` repository

Your dotfiles should already be in a version-control system (VCS), but if they are not, do this now. 

Create a directory called `dotfiles` in your home directory. Run `git init` within this directory to initialize a git repository within that directory.

Within your new `dotfiles` directory, `touch` a `README.md` file, fill it out with your information, and create a new subdirectory that your dotfiles will live in. I named mine `src`.

### 2. Move your files into subdirectory

Move all of the dotfiles that you have into the `~/dotfiles/src` directory. For example, a common dotfile is `.vimrc` for `vim`.

At this point, your filesystem should now look like this:

```bash
~/
  ...
  dotfiles/
    .git/
    README.md
    src/
      .vimrc
      ...
```

### 3. Remove current dotfiles in home directory

Before being able to utilize `stow` you will have to remove any current files you have in the home directory. 

_Be sure you have copied this file to the `~/dotfiles/src/` directory before removing your configurations._

For example, `rm ~/.vimrc`

### 4. Execute `stow`

By default, `stow` will create symlinks to the files within a directory in its direct parent directory. We want to override this because we want the utility to write files instead to the home directory. Luckily, you can tell stow to do this by passing in the target, or `-t` flag, with the directory you want it to instead write to.

`cd` into the `src` directory. Execute the following command:

```bash
# -v verbose
# -R recursive
# -t target, the home directory
stow . -v -R -t ~
```

You now will have a symlink at `~/.vimrc` that points to `~/dotfiles`

### 5. Creating an install script

It is best to package your dotfiles with a method of installing the dotfiles for simplicity and ease of use.

To do this, run the following commands to create an install script file.

```bash
cd ~/dotfiles
touch install
chmod a+x install # make the script executable
```

The simple script should programmatically call the `stow` utility within the `src` directory with the flags needed. It should look something like this:

```bash
#!/bin/bash
cd src
stow . -v -R -t ~
cd ..
```

### 6. Run the script

Test and run the script to ensure that the files are being put where needed and that the symlinks are being created correctly.

### 7. Push to git

Push your source to a remote repository like [`https://github.com/`](https://github.com/) to ensure the safety of your code and better be able to deploy your dotfiles on remote machines.
