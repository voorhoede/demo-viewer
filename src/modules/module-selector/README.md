# Module selector

## Functionality

Let's the user select a module to preview from a dropdown list.
Modules may be grouped within the dropdown (see usage options).


## Usage

Include as Riot tag `<module-selector/>` with the following options:

* `modules` (optional): list of modules. Each module must have a `name` & `url` and optionally a `group` name.
* `default-module` (optional): `url` of module to show if none is selected.
* `on-select` (optional): function called (with `module` parameter) every time a new module is selected.

Alternatively, the `modules` and `default-module` can be defined as HTML using transclusion.
In that case the HTML inside `<module-selector> HTML </module-selector>` must be a `<select>` with
an `<option>` for each module. The option label must be the module `name` and the `value` its `url`
(eg. `<option value="path/to/module/demo">module name</option>`).
Additionally the `<option>`s may be grouped using `<optgroup label="group name">`.


## Examples

### Using tag options

    <module-selector modules="{ modules }" on-select="{ callMe }" />

    <script>
    this.modules = [
        { group: 'Auth', name: 'Login form',        url: 'demo/auth/login-form' },
        { group: 'Auth', name: 'Password strength', url: 'demo/auth/password-strength' },
        { group: 'Core', name: 'Alerts',            url: 'demo/core/alerts' },
        { group: 'Core', name: 'Buttons',           url: 'demo/core/buttons' },
    ]
    ths.callMe = function(activeModule){ console.log(activeModule); }
    </script>

### Using transclusion

    <module-selector on-select="{ callMe }">
        <select>
            <optgroup label="Auth">
                <option value="demo/auth/login-form">Login form</option>
                <option value="demo/auth/password-strength">Password strength</option>
            </optgroup>
            <optgroup label="Core">
                <option value="demo/core/alerts">Alerts</option>
                <option value="demo/core/buttons">Buttons</option>
            </optgroup>
        </select>
    </module-selector>