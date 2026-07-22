---
title: Modding
description: How to write the code for your mod
sidebar:
    order: 5
---

The simplest way to mod UCG is by just changing scenes directly within the Godot editor. This is a decent way to start, but it will lead to conflicts in the future as if multiple mods try to overwrite the same scene, only one will be loaded. As such, you should instead try to move as much as you can into your mod script. Please see [here](../guides/modscript_basics) for how to do that effectively.