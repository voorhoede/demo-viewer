# Size controls

## Functionality

Change the size of the viewer by selecting a preset size (eg. *S*, *M*, *L*) or entering it manually.
In addition you can force the viewer to take the entire size of the window by setting it to *FULL*.

## Usage

Include as Riot tag `<size-controls/>` with the following options:

* `sizes`: list of presets with `name` and `width` pairs (eg. `[{ name: 'XS', width: 320 }, { name: 'M', width: 540 }]`.
* `on-resize` (optional): function called (with `size` as parameter) every time size is changed.