---
title: Decompilation
description: How to properly decompile the game.
sidebar:
    order: 2
---

Decompiling is the process of getting back all the code and assets from a game so you can modify them. It's rather simple, surprisingly. Uncanny Cat Golf doesn't have any encryption on its files, and as such, it's very easy to decompile it. This is endorsed by the developers, don't worry about it being considered piracy.

To start, you will need to download the application GDSDecomp from [here](https://github.com/GDRETools/gdsdecomp/releases).

<details>
<summary>I can't find the download button :(</summary>
Press on the blue link corresponding to your operating system (pictured: Windows)

![The download page of GDSDecomp with a large obtrusive red arrow pointing ecstatically at the download link for GDSDecomp's windows release, with the label "Click Here" followed by an exclamation point](/src/assets/getting-started/decompiling/gdsdecomp_download_page.png)
</details>

You will also need to have a legally-aquired copy of the game. Surprisingly, given that the game is free, it is very simple to acquire this as you can press the download button [on the itch.io page](https://slappyhappy2000.itch.io/uncanny-cat-golf). Unzip it and make sure you know where the `Uncanny Cat Golf.pck` file is.

<details>
<summary>Can you please point a red arrow to where the pck file is?</summary>

Sure!

![The file manager Dolphin from KDE is pictured, open to the directory "Downloads/uncanny-cat-golf-linux" directory. The file "Uncanny Cat Golf" is circled with a useless red circle, adorned by multiple red arrows pointing at it in all of its glory](/src/assets/getting-started/decompiling/the_pck.png)

Hope this helps.
</details>

Now, open up GDSDecomp (henceforth I'll refer to it as "the decompiler" for simplicity's sake). Press on the button labeled `RE Tools`, then `Recover Project...`, and then navigate to the PCK file from earlier and select it.

![What the text above said, just in image form with big red arrows.](/src/assets/getting-started/decompiling/open_the_pck.png)

This will bring you to a screen like the following. Take note of the bottom, where it says `Extract to...`, as that is where the decompiled game code will be. This is in the desktop folder by default. Once on this screen, locate the button labeled "Extract" in the bottom middle. It will then extract the assets to the folder specified.

![More red arrows showing visually what the text above says](/src/assets/getting-started/decompiling/extractinator.png)

Congrats! You have now decompiled the game. Now, go back to Godot (you downloaded this during the previous page). Locate the button conveniently labeled "Import", and select the folder where the decompiled files went. This will import the game and you are ready to start coding things B)

![Red arrow pointing to the Import button at the top of the Godot window. Beneath that is a file browser where the user has navigated to the folder where they decompiled the game. There is a red arrow pointing to the "Select Current Folder" button. It is alluded to that pressing on this button will allow you to edit Uncanny Golf.](/src/assets/getting-started/decompiling/importing_the_thing.png)