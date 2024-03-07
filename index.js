module.exports = {
	"plugins": [
		"stylelint-order"
	],
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
};
