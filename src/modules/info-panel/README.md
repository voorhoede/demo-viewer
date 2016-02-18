# Info panel

## Functionality

Display additional (external) info sections.

## Usage

Include as Riot tag `<info-panel/>` with the following options:

* `sections`: collection of info pages as `name:url` pairs. Example:

		{ 
			readme: 'path/to/readme', 
			template: 'path/to/template',
			<label>: <url>
		}