export default {
	plugins: ['stylelint-order'],
	rules: {
		'alpha-value-notation': 'number',
		'at-rule-empty-line-before': [
			'always',
			{
				except: ['blockless-after-blockless', 'first-nested', 'blockless-after-same-name-blockless'],
				ignore: ['after-comment'],
				ignoreAtRules: ['font-face', 'keyframes']
			}
		],
		'at-rule-disallowed-list': ['extend'],
		'at-rule-no-vendor-prefix': true,
		'block-no-empty': true,
		'declaration-block-no-duplicate-properties': true,
		'declaration-no-important': true,
		'font-family-name-quotes': 'always-where-recommended',
		'length-zero-no-unit': true,
		'max-nesting-depth': 3,
		'no-duplicate-selectors': true,
		'no-invalid-double-slash-comments': true,
		'order/properties-alphabetical-order': true,
		'rule-empty-line-before': [
			'always',
			{
				except: ['first-nested'],
				ignore: ['after-comment']
			}
		],
		'selector-pseudo-element-colon-notation': 'double',
		'unit-allowed-list': [
			'px',
			'em',
			'rem',
			'fr',
			'%',
			'pt',
			'vw',
			'vh',
			'dvh',
			'svh',
			'lvh',
			'dvb',
			'svb',
			'lvb',
			'vmin',
			'vmax',
			'deg',
			's',
			'ms'
		]
	}
};
