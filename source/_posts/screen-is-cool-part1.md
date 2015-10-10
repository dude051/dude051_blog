title: Screen Is Cool - Part 1
date: 2013-4-12 16:34:01
tags:
  - Linux
  - screen
  - source code
  - tools
---
Screen is one of those tools I can not live without on the systems that I administer day to day. I have also been using the tool for quite a while, and have never actually ran across this remark:

```
[justin@NAS ~]$ Password: interface: eth0 IP address is: 192.168.0.100 MAC address is: ff:ff:ff:ff:ff:ff
Suddenly the Dungeon collapses!! - You die...
```

Now I dunno about you, but the very first thing I thought was, "Well I am glad it was not a grue!". But then I had to wonder exactly why and where this came from, so after some source hunting -

```
[justin@NAS screen-4.0.3]$ grep -r "Suddenly the Dungeon collapses"
attacher.c: printf("\nSuddenly the Dungeon collapses!! - You die...\n");

excerpt:
if (AttacherPanic)
{
fcntl(0, F_SETFL, 0);
SetTTY(0, &attach_Mode);
printf("\nSuddenly the Dungeon collapses!! - You die...\n");
eexit(1);
}
```

and some googling -

>Debian Bug report logs - #512299 screen: "Dungeon collapses" error message is unhelpful

I found out two things, one, its quite an ambiguous error message that basically means that screen has quit uncleanly - in other words, it died. And two, Debian people need to lighten up a bit  :)

```
[justin@NAS screen-4.0.3]$ screen -ls
There is a screen on:
8069.pts-0.NAS (Dead ???)
Remove dead screens with 'screen -wipe'.
1 Socket in /tmp/screens/S-justin.
```

This is Part 1 of a few real post I will do on screen, but in an effort to be light spirited, I thought I would start here. By the way, this is from my Arch box GNU Screen 4.0.3-13, mileage may vary.
