# stylelint-config-shiwaforce
We want to work with beautiful, nicely formatted code, so with the help of stylelint we aim to enforce it - as much as we can. In an ideal world everybody would write such high quality code. Until we reach this state to standardise code formatting the stylelint plugin can be a great help.

## Installation
```
npm i stylelint-config-shiwaforce --save
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
    "max-nesting-depth": 4,
  }
}
```

## Default Rules
```json
{
	"rules": {
		"at-rule-empty-line-before": ["always", {
			"except": ["blockless-after-blockless", "first-nested", "blockless-after-same-name-blockless"],
			"ignore": ["after-comment"],
			"ignoreAtRules": ["font-face", "keyframes"]
		}],
		"at-rule-disallowed-list": ["extend"],
		"at-rule-no-vendor-prefix": true,
		"block-no-empty": true,
		"declaration-block-no-duplicate-properties": true,
		"declaration-block-no-shorthand-property-overrides": true,
		"declaration-block-single-line-max-declarations": 1,
		"declaration-no-important": true,
		"font-family-name-quotes": "always-unless-keyword",
		"length-zero-no-unit": true,
		"max-nesting-depth": 3,
		"media-feature-name-no-vendor-prefix": true,
		"no-duplicate-selectors": true,
		"no-invalid-double-slash-comments": true,
		"number-max-precision": 6,
		"order/properties-alphabetical-order": true,
		"property-no-vendor-prefix": true,
		"selector-no-vendor-prefix": true,
		"selector-pseudo-element-colon-notation": "double",
		"unit-allowed-list": ["px", "em", "rem", "fr", "%", "pt", "vw", "vh", "dvh", "svh", "lvh", "dvb", "svb", "lvb", "vmin", "vmax", "deg", "s", "ms"]
	}
}
```
