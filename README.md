# stylelint-config-shiwaforce
We want to work with beautiful, nicely formatted code, so with the help of stylelint we aim to enforce it - as much as we can. In an ideal world everybody would write such high quality code. Until we reach this state to standardise code formatting the stylelint plugin can be a great help.

## Installation
```
npm i stylelint-config-shiwaforce --save-dev
```

## Usage
If you've installed stylelint-config-shiwaforce locally within your project, just set your stylelint(`.stylelintrc.json`) config to:
```json
{
	"extends": "stylelint-config-shiwaforce"
}
```

## Extending/Overriding the config
Just add ```"rules"``` key to your config, then add your additional/override rules.
For example if you would like to change ```"max-nesting-depth"``` rule from default to your own:
```json
{
	"extends": "stylelint-config-shiwaforce",
	"rules": {
		"max-nesting-depth": 4
	}
}
```

## Default Rules
```json
{
	"rules": {
		"alpha-value-notation": "number",
		"at-rule-empty-line-before": ["always", {
			"except": ["blockless-after-blockless", "first-nested", "blockless-after-same-name-blockless"],
			"ignore": ["after-comment"],
			"ignoreAtRules": ["font-face", "keyframes"]
		}],
		"at-rule-disallowed-list": ["extend"],
		"at-rule-no-vendor-prefix": true,
		"block-no-empty": true,
		"declaration-block-no-duplicate-properties": true,
		"declaration-no-important": true,
		"font-family-name-quotes": "always-where-recommended",
		"length-zero-no-unit": true,
		"max-nesting-depth": 3,
		"no-duplicate-selectors": true,
		"no-invalid-double-slash-comments": true,
		"order/properties-alphabetical-order": true,
		"selector-pseudo-element-colon-notation": "double",
		"unit-allowed-list": ["px", "em", "rem", "fr", "%", "pt", "vw", "vh", "dvh", "svh", "lvh", "dvb", "svb", "lvb", "vmin", "vmax", "deg", "s", "ms"]
	}
}
```
