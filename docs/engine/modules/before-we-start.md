---
sidebar_position: 2
---

# Before We Start

Alright, you want to create your own module, but before we start, there are a few things you need to know.

## Requirements

To create your own module, you need to have some knowledge of C# and .NET.

You will also need to have a copy of [RPG Creator Engine](https://github.com/Ward727a/RPGCreator) source code, as you will need to reference it in your module project.

## Security concerns

The module feature is a very powerful feature, and can be used to do a lot of things.

But this also means that malicious modules can be created, and can do a lot of damage to your computer.

For this reason, only the modules created by the RPG creator team is trusted by default.

Any other module will require you to manually trust it before being able to use it.

If it's not trusted, the engine will refuse to load it, and you will see a warning in the log.

If you trust a module, the engine will load it, and you will be able to use it.

**The engine can't check if the module is safe or not, and will not be able to protect you from any malicious action the module can do.**

:::warning

Once you trust a module, you are trusting the author of the module to not do anything malicious.

If you don't trust the author, don't trust the module.

**The RPG Creator team is not responsible for any damage caused by a malicious module!**
:::

## Module compatibility

Modules are made to be compatible with a specific version of the engine.

Technically, a module that is not made for the version of the engine you are using can still work, but there is no guarantee that it will work properly.

## Module availability (store / website)

Actually there is **no website or store to find trusted modules**.

The only way to get modules for now is to find them on the internet, or create your own.

This also means that you should be very careful when downloading modules from the internet, as you don't know if they are safe or not.

If possible, try to find modules that are fully open-source, and if you can, build them yourself from the source code.

If any website or store say that they are '*official*' or '*trusted*' by RPG Creator, **they are lying**, avoid them.