---
title: Troubleshooting
description: Solutions to certain problems that might arise when modding
---

## After launching the game with my mod installed, the game...
<details>
<summary>...crashes, and the logs say <code>ERROR: Binary GDScript is too recent! Please use a newer engine version.</code></summary>

You are either using the wrong version of Godot, or its export templates. Make sure you are using Godot 4.4.1, and if the game still crashes after re-exporting, then:
1. Open your mod's project in Godot, then go to Editor > Manage Export Templates...
2. Click Uninstall, then OK on the popup that appears.
3. Once that's complete, change Current Version to 4.4.1.stable (if it isn't that already) and click Download and Install.
4. After it's finished installing, re-export your mod (handy guide [here](/getting_started/exporting/)
</details>

:::note
TODO: add more stuff here
:::
