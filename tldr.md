HotWeb: rethink web development.

## Why

If you want to create a modern component based js app, most tutorial will push
you to use javascript for tooling as well:
- install a recent version of Node.js
- **compiler**: such as babel: which turns jsx components to js which can be used by the browser
- **bundler**: such as webpack: minify, compact js/css optimized for load time
- **build**: such as gulp: this like make or maven which will run the previously mentioned tools,
when source is changed
- **hot-reload**: if you want your js changes take effect in the browser you are advised to use react-hot-loader or fast-refresh.

You want tu use a js compnent framework (like react), thats fine, but why do you want to use a compiler written in js? And why rewite every other development tool in js?

Let's replace all this nonsence with one single tool: <a href="https://github.com/progrium/hotweb">HotWeb</a>
