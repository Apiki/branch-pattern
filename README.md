# Branch Pattern

## Dependencies
* [Node.js](https://nodejs.org/en/download/) (>= v6.10.3)

## Installation
`npm install apiki-branch-pattern --save-dev` OR `yarn add apiki-branch-pattern --dev`

## Usage in package.json
`"prepush": "git branch | grep \\* | cut -d ' ' -f2 | xargs apiki-branch-pattern -p='^care_([0-9]+)_(.+)$'"`

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License
[MIT License](http://opensource.org/licenses/MIT)
