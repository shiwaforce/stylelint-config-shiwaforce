# stylelint-config-shiwaforce


## Installation
```
npm i stylelint-config-shiwaforce --save
```

## Usage
If you've installed stylelint-config-shiwaforce locally within your project, just set your stylelint(`.stylelintrc`) config to:
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
