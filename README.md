# Fullscreen Toggle Mod for Shapez.io

## Description

This mod enables toggling fullscreen mode in Shapez.io using the F11 key (or a configurable key). It properly intercepts the key event and uses the game's native API to switch fullscreen mode. Compatible with Steam, web, and standalone Electron versions of the game.

------

## Features

- Toggle fullscreen mode with F11 (default key).
- Properly intercepts the key to avoid default browser behavior.
- Uses the game's native fullscreen API for compatibility.
- Supports multiple languages (translations included, but can be improved).
- Works seamlessly across Steam, web, and standalone Electron versions.
- Registers the keybinding in-game with localized name and description.

------

## Installation

1. Download or clone this repository.
2. Place the mod folder inside the `mods` directory of your Shapez.io installation.
3. Launch Shapez.io; the mod will load automatically when the interface starts.

------

## Configuration

Currently, the fullscreen toggle key is fixed to F11. Future versions will allow configuring this key via the game UI or settings.

------

## Usage

Press **F11** while playing to toggle fullscreen mode.

------

## Development & Contribution

Feel free to fork the repository and submit pull requests with improvements or fixes. Possible areas of improvement include:

- Configurable toggle key.
- Improved detection and support for platform wrappers.
- Better error handling for fullscreen permission issues.
- More robust language change event integration.
- Persisting fullscreen state across sessions.
- Adding or improving translations and dynamic language support.

------

## Final Notes

The mod, as currently implemented, works reliably on Steam, web, and standalone Electron versions.
 While translations need refinement, the mod has a solid and dependable foundation.
 The F11 key can be used to toggle fullscreen mode if the mod is placed in the Shapez.io mods directory and loaded at interface startup.
