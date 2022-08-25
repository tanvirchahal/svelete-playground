

Based on basic svelte examples: https://svelte.dev/examples/spread-props

# svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Using TypeScript

This template comes with a script to set up a TypeScript development environment, you can run it immediately after cloning the template with:

```bash
node scripts/setupTypeScript.js
```

Or remove the script via:

```bash
rm scripts/setupTypeScript.js
```

If you want to use `baseUrl` or `path` aliases within your `tsconfig`, you need to set up `@rollup/plugin-alias` to tell Rollup to resolve the aliases. For more info, see [this StackOverflow question](https://stackoverflow.com/questions/63427935/setup-tsconfig-path-in-svelte).

## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```

<h1 dir="auto">File name changes</h1>
<p dir="auto">The router is now folder-based, not file-based. This means there's now only one way to describe a route.</p>
<p dir="auto">Here's how you define that there's a route <code class="notranslate">/about</code>:</p>
<table role="table">
<thead>
<tr>
<th>Old</th>
<th>New</th>
</tr>
</thead>
<tbody>
<tr>
<td>routes/about/index.svelte</td>
<td>routes/about/+page.svelte</td>
</tr>
<tr>
<td>routes/about.svelte</td>
<td>routes/about/+page.svelte</td>
</tr>
</tbody>
</table>
<p dir="auto">The same principle applies to parameterized routes:</p>
<table role="table">
<thead>
<tr>
<th>Old</th>
<th>New</th>
</tr>
</thead>
<tbody>
<tr>
<td>routes/[slug]/index.svelte</td>
<td>routes/[slug]/+page.svelte</td>
</tr>
<tr>
<td>routes/[slug].svelte</td>
<td>routes/[slug]/+page.svelte</td>
</tr>
</tbody>
</table>
<p dir="auto">The naming of the routing files has changed. They correspond as follows (assuming the first variant of the table above):</p>
<table role="table">
<thead>
<tr>
<th>Old Description</th>
<th>Old</th>
<th>New</th>
</tr>
</thead>
<tbody>
<tr>
<td>page UI</td>
<td>index.svelte</td>
<td>+page.svelte</td>
</tr>
<tr>
<td>load function etc</td>
<td><code class="notranslate">&lt;script context="module"&gt;</code> in index.svelte</td>
<td>+page.js</td>
</tr>
<tr>
<td>page endpoint</td>
<td>index.js with index.svelte next to it</td>
<td>+page.server.js</td>
</tr>
<tr>
<td>standalone endpoint</td>
<td>index.js without index.svelte next to it</td>
<td>+server.js</td>
</tr>
<tr>
<td>layout UI</td>
<td>__layout.svelte</td>
<td>+layout.svelte</td>
</tr>
<tr>
<td>load function etc</td>
<td><code class="notranslate">&lt;script context="module"&gt;</code> in __layout.svelte</td>
<td>+layout.js</td>
</tr>
<tr>
<td></td>
<td></td>
<td>+layout.server.js (server GET for layout, didn't exist previously)</td>
</tr>
<tr>
<td>error UI</td>
<td>__error.svelte</td>
<td>+error.svelte</td>
</tr>
<tr>
<td>load function etc</td>
<td><code class="notranslate">&lt;script context="module"&gt;</code> in __error.svelte</td>
<td>No longer exists</td>
</tr>
</tbody>
</table>
<p dir="auto">To summarize: All route files have a <code class="notranslate">+</code> sign in front now to distinguish them at a glance and group them, the contents of <code class="notranslate">&lt;script context="module"&gt;</code> is moved into a separate file, which means that there's now at most three files per page (or layout).</p>
    </td>
  </tr>

    </tbody>
  </table>
 
