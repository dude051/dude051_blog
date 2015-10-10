title: To pkill is to skill - Log out those Users!
date: 2014-5-10 16:16:37
tags:
  - migrated
  - Linux
  - Tips
---
These days, its the simple Linux commands that make or break us.

A lot of my generation did not grow up with UNIX and Linux systems lying around; even though that might be the case today. Your true \*nix gurus came from these yesterdays, and were forced to learn what we don't use anymore and yet we do need them when we are in certain situations. Many of these situations crop up when administering a remote server with good old SSH, no X Window System there.

I had a friend today ask me:
How do I `logout` kill the process of  another user logged on?

The easy answer is to perform a ps and grep out their pts for the associated PID to kill. You always want to kill their `/bin/bash` or sshd PID, or technically if you want to be nice, instead of a `SIGTERM`, send a `SIGHUP`.

> Wikipedia - SIGHUP is a signal sent to a process when its controlling terminal is closed.

But there has to be an easier way or more Linux efficient way, right? After all, Linux has 1,001 possibilities for every action.

Enter brother pkill and its sister skill. Dive into their MAN pages on your own time, but in the mean time, read and learn easier ways to kill those remote logins with an easy swoop -

```bash
pkill -KILL -t pts/#
# - or -
skill -KILL pts/#
```

Run a `w` or `who` to see who is on, and just to check, ask who am i to see your pts location so you don't kill yourself. Again,  you can replace `KILL` above with `HUP` to be more proper.
