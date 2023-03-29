# @sveltejs/kit

## 1.14.0

### Minor Changes

- feat: add HMR to fallback error pages during dev ([#9497](https://github.com/sveltejs/kit/pull/9497))

### Patch Changes

- fix: add `submitter` type to `SumbitFunction` ([#9484](https://github.com/sveltejs/kit/pull/9484))

## 1.13.0

### Minor Changes

- feat: add dark mode styles to default error page ([#9460](https://github.com/sveltejs/kit/pull/9460))

### Patch Changes

- fix: recover from errors during dev by reloading ([#9441](https://github.com/sveltejs/kit/pull/9441))

## 1.12.0

### Minor Changes

- feat: expose submitter in use:enhance SubmitFunction ([#9425](https://github.com/sveltejs/kit/pull/9425))

- feat: add data-sveltekit-keepfocus and data-sveltekit-replacestate options to links (requires Svelte version 3.56 for type-checking with `svelte-check`) ([#9019](https://github.com/sveltejs/kit/pull/9019))

### Patch Changes

- fix: don't start debugger on 404s ([#9424](https://github.com/sveltejs/kit/pull/9424))

- fix: handle srcset attributes with newline after comma ([#9388](https://github.com/sveltejs/kit/pull/9388))

- fix: allow tsconfig to extend multiple other tsconfigs ([#9413](https://github.com/sveltejs/kit/pull/9413))

- chore: update Undici to 5.21.0 ([#9417](https://github.com/sveltejs/kit/pull/9417))

## 1.11.0

### Minor Changes

- feat: pause on debugger when falling back to full page reload during development ([#9305](https://github.com/sveltejs/kit/pull/9305))

- feat: expose `base` via `$service-worker`, make paths relative ([#9250](https://github.com/sveltejs/kit/pull/9250))

### Patch Changes

- fix: don't automatically prerender non-SSR'd pages ([#9352](https://github.com/sveltejs/kit/pull/9352))

- fix: use 308 responses for trailing slash redirects, instead of 301s ([#9351](https://github.com/sveltejs/kit/pull/9351))

- fix: remove buggy cookie path detection ([#9298](https://github.com/sveltejs/kit/pull/9298))

- fix: don't prevent `beforeNavigate` callbacks from running following a cancelled unloading navigation ([#9347](https://github.com/sveltejs/kit/pull/9347))

- fix: persist DOM state on beforeunload ([#9345](https://github.com/sveltejs/kit/pull/9345))

- fix: redirect to path with/without trailing slash when previewing prerendered pages ([#9353](https://github.com/sveltejs/kit/pull/9353))

- fix: avoid FOUC when using CSS modules in dev ([#9323](https://github.com/sveltejs/kit/pull/9323))

- fix: don't skip required parameters after missing optional parameters ([#9331](https://github.com/sveltejs/kit/pull/9331))

- fix: account for server-emitted assets when prerenering ([#9349](https://github.com/sveltejs/kit/pull/9349))

- fix: deal with fast consecutive promise resolutions when streaming ([#9332](https://github.com/sveltejs/kit/pull/9332))

- chore: replace deprecated property access in preparation for TS 5.0 ([#9361](https://github.com/sveltejs/kit/pull/9361))

## 1.10.1

### Patch Changes

- fix: respect `<base>` when crawling ([#9257](https://github.com/sveltejs/kit/pull/9257))

- fix: scroll before resetting focus, to avoid flash of unscrolled content ([#9311](https://github.com/sveltejs/kit/pull/9311))

- fix: omit hash from global during development ([#9310](https://github.com/sveltejs/kit/pull/9310))

## 1.10.0

### Minor Changes

- feat: add `cookies.getAll` ([#9287](https://github.com/sveltejs/kit/pull/9287))

### Patch Changes

- fix: always include `<link rel="stylesheet">`, even for stylesheets excluded from Link headers ([#9255](https://github.com/sveltejs/kit/pull/9255))

- fix: preserve form state when submitting a second time ([#9267](https://github.com/sveltejs/kit/pull/9267))

## 1.9.3

### Patch Changes

- fix: successive optional route parameters can now be empty ([#9266](https://github.com/sveltejs/kit/pull/9266))

## 1.9.2

### Patch Changes

- fix: correct undefined reference to global var with Vitest ([#9252](https://github.com/sveltejs/kit/pull/9252))

## 1.9.1

### Patch Changes

- feat: warn when calling depends(...) with special URI scheme ([#9246](https://github.com/sveltejs/kit/pull/9246))

## 1.9.0

### Minor Changes

- feat: add `paths.relative` option to control interpretation of `paths.assets` and `paths.base` ([#9220](https://github.com/sveltejs/kit/pull/9220))

## 1.8.8

### Patch Changes

- fix: always add `@sveltejs/kit` to `noExternal` for ssr build ([#9242](https://github.com/sveltejs/kit/pull/9242))
- feat: add `api.methods` and `page.methods` to `builder.routes` ([#9145](https://github.com/sveltejs/kit/pull/9145))

## 1.8.7

### Patch Changes

- fix: correct not found message when setting `paths.base` ([#9232](https://github.com/sveltejs/kit/pull/9232))

## 1.8.6

### Patch Changes

- fix: bundle SvelteKit when using Vitest ([#9172](https://github.com/sveltejs/kit/pull/9172))

## 1.8.5

### Patch Changes

- fix: allow relative fetch to endpoint outside app from within `handle` ([#9198](https://github.com/sveltejs/kit/pull/9198))

## 1.8.4

### Patch Changes

- fix: include .mjs files in precompression ([#9179](https://github.com/sveltejs/kit/pull/9179))

- fix: revert mjs extension usage by default, make it an option ([#9179](https://github.com/sveltejs/kit/pull/9179))

- chore: dummy changeset to force a release ([#9207](https://github.com/sveltejs/kit/pull/9207))

## 1.8.3

### Patch Changes

- fix: use a proprietary content-type to ensure response is not buffered ([#9142](https://github.com/sveltejs/kit/pull/9142))

## 1.8.2

### Patch Changes

- fix: append newline to trigger script evaluation ([#9139](https://github.com/sveltejs/kit/pull/9139))

## 1.8.1

### Patch Changes

- fix: encode streamed chunks ([#9136](https://github.com/sveltejs/kit/pull/9136))

## 1.8.0

### Minor Changes

- feat: implement streaming promises for server load functions ([#8901](https://github.com/sveltejs/kit/pull/8901))

### Patch Changes

- fix: set public env before starting app ([#8957](https://github.com/sveltejs/kit/pull/8957))

- fix: preload modules on Safari ([#8957](https://github.com/sveltejs/kit/pull/8957))

- fix: make `assets` work in client when app is served from a subfolder ([#8957](https://github.com/sveltejs/kit/pull/8957))

## 1.7.2

### Patch Changes

- fix: return correct asset list from `builder.writeClient()` ([#9095](https://github.com/sveltejs/kit/pull/9095))

## 1.7.1

### Patch Changes

- fix: deploy server assets. Only works with Vite 4.1+ ([#9073](https://github.com/sveltejs/kit/pull/9073))

## 1.7.0

### Minor Changes

- feat: richer error message for invalid exports ([#9055](https://github.com/sveltejs/kit/pull/9055))

### Patch Changes

- chore: throw more helpful error when encoding uri fails during prerendering ([#9053](https://github.com/sveltejs/kit/pull/9053))

## 1.6.0

### Minor Changes

- feat: add `OPTIONS` server method ([#8731](https://github.com/sveltejs/kit/pull/8731))

### Patch Changes

- fix: solve `missing "./paths" specifier in "@sveltejs/kit" package` error occurring in all projects ([#9050](https://github.com/sveltejs/kit/pull/9050))

## 1.5.7

### Patch Changes

- fix: use internal alias that won't collide with user aliases ([#9022](https://github.com/sveltejs/kit/pull/9022))

## 1.5.6

### Patch Changes

- fix: ssr defaults preventing minification for client build ([#9012](https://github.com/sveltejs/kit/pull/9012))

- fix: client-side trailing slash redirect when preloading data ([#8982](https://github.com/sveltejs/kit/pull/8982))

## 1.5.5

### Patch Changes

- fix: warn after failed data preloads in dev ([#8985](https://github.com/sveltejs/kit/pull/8985))

## 1.5.4

### Patch Changes

- fix: support all relevant vite cli flags ([#8977](https://github.com/sveltejs/kit/pull/8977))

## 1.5.3

### Patch Changes

- docs: clarify that `version.name` should be deterministic ([#8956](https://github.com/sveltejs/kit/pull/8956))

- fix: correctly include exported http methods in allow header ([#8968](https://github.com/sveltejs/kit/pull/8968))

- chore: polyfill File from node:buffer ([#8925](https://github.com/sveltejs/kit/pull/8925))

- fix: provide helpful error/warning when calling `fetch` during render ([#8551](https://github.com/sveltejs/kit/pull/8551))

- fix: print useful error when subscribing to SvelteKit's stores at the wrong time during SSR ([#8960](https://github.com/sveltejs/kit/pull/8960))

- fix: ignore external links when automatically preloading ([#8961](https://github.com/sveltejs/kit/pull/8961))

- chore: refactor fallback generation ([#8972](https://github.com/sveltejs/kit/pull/8972))

## 1.5.2

### Patch Changes

- fix: always default `paths.assets` to `paths.base` ([#8928](https://github.com/sveltejs/kit/pull/8928))

## 1.5.1

### Patch Changes

- fix: pick up config from endpoints ([#8933](https://github.com/sveltejs/kit/pull/8933))

- fix: don't reuse previous server load cache when there's no server load function ([#8893](https://github.com/sveltejs/kit/pull/8893))

- fix: deduplicate paths in tsconfig ([#8880](https://github.com/sveltejs/kit/pull/8880))

- docs: clarify version management feature ([#8941](https://github.com/sveltejs/kit/pull/8941))

## 1.5.0

### Minor Changes

- feat: support route-level configuration ([#8740](https://github.com/sveltejs/kit/pull/8740))

- feat: add snapshot mechanism for preserving ephemeral DOM state ([#8710](https://github.com/sveltejs/kit/pull/8710))

### Patch Changes

- chore(deps): update dependency undici to v5.18.0 ([#8884](https://github.com/sveltejs/kit/pull/8884))

## 1.4.0

### Minor Changes

- feat: allow $app/paths to be used without an app ([#8838](https://github.com/sveltejs/kit/pull/8838))

### Patch Changes

- fix: ensure types of all form actions are accessible even if differing ([#8877](https://github.com/sveltejs/kit/pull/8877))

- fix: correctly handle HttpErrors on the client side ([#8829](https://github.com/sveltejs/kit/pull/8829))

- docs: discourage use of `goto` with external URLs ([#8837](https://github.com/sveltejs/kit/pull/8837))

- fix: prevent crawling empty urls (`<img src="">`) ([#8883](https://github.com/sveltejs/kit/pull/8883))

- fix: correctly serialize request url when using load `fetch` ([#8876](https://github.com/sveltejs/kit/pull/8876))

- fix: ensure endpoints can fetch endpoints on the same host but not part of the application ([#8869](https://github.com/sveltejs/kit/pull/8869))

## 1.3.10

### Patch Changes

- fix: preserve build error messages ([#8846](https://github.com/sveltejs/kit/pull/8846))

## 1.3.9

### Patch Changes

- fix: output errors properly if pages fail to compile ([#8813](https://github.com/sveltejs/kit/pull/8813))

## 1.3.8

### Patch Changes

- fix: remove Vite manifest before running adapter ([#8815](https://github.com/sveltejs/kit/pull/8815))

## 1.3.7

### Patch Changes

- fix: only show prerendering message when actually prerendering ([#8809](https://github.com/sveltejs/kit/pull/8809))

- fix: handle anchors with special chars when navigating ([#8806](https://github.com/sveltejs/kit/pull/8806))

- fix: await finalise hook and run it only once ([#8817](https://github.com/sveltejs/kit/pull/8817))

## 1.3.6

### Patch Changes

- fix: allow rest parameters to follow multiple optional - or not - parameters ([#8761](https://github.com/sveltejs/kit/pull/8761))

- fix: consider headers when constructing request hash ([#8754](https://github.com/sveltejs/kit/pull/8754))

## 1.3.5

### Patch Changes

- docs: fix typo ([#8790](https://github.com/sveltejs/kit/pull/8790))

- fix: build error on layout with missing leaves ([#8792](https://github.com/sveltejs/kit/pull/8792))

- fix: handle hash links with non-ASCII characters when navigating ([#8767](https://github.com/sveltejs/kit/pull/8767))

## 1.3.4

### Patch Changes

- chore: bump devalue ([#8789](https://github.com/sveltejs/kit/pull/8789))

## 1.3.3

### Patch Changes

- fix: forward `process.env` to child process ([#8777](https://github.com/sveltejs/kit/pull/8777))

## 1.3.2

### Patch Changes

- fix: take base path into account when preloading code ([#8748](https://github.com/sveltejs/kit/pull/8748))

## 1.3.1

### Patch Changes

- fix: only fetch `__data.json` files for routes with a server `load` function ([#8636](https://github.com/sveltejs/kit/pull/8636))

- fix: add `ignoreDeprecations` flag for TS 5.x ([#8718](https://github.com/sveltejs/kit/pull/8718))

- fix: install polyfills when analysing code ([#8636](https://github.com/sveltejs/kit/pull/8636))

## 1.3.0

### Minor Changes

- feat: allow generated tsconfig to be modified ([#8606](https://github.com/sveltejs/kit/pull/8606))

### Patch Changes

- fix: skip navigation hooks on popstate events when only hash changed ([#8730](https://github.com/sveltejs/kit/pull/8730))

## 1.2.10

### Patch Changes

- chore: restrict methods allowed for POST ([#8721](https://github.com/sveltejs/kit/pull/8721))

- fix: provide proper error when POSTing to a missing page endpoint ([#8714](https://github.com/sveltejs/kit/pull/8714))

## 1.2.9

### Patch Changes

- fix: reapply exports alignment after Vite dependency optimizations ([#8690](https://github.com/sveltejs/kit/pull/8690))

## 1.2.8

### Patch Changes

- fix: include base path in path to start script ([#8651](https://github.com/sveltejs/kit/pull/8651))

## 1.2.7

### Patch Changes

- fix: set headers when throwing redirect in handle ([#8648](https://github.com/sveltejs/kit/pull/8648))

## 1.2.6

### Patch Changes

- fix: allow importing assets while using base path ([#8683](https://github.com/sveltejs/kit/pull/8683))

## 1.2.5

### Patch Changes

- fix: check for wrong return values from form actions ([#8553](https://github.com/sveltejs/kit/pull/8553))

## 1.2.4

### Patch Changes

- chore: update undici to v5.16.0 ([#8668](https://github.com/sveltejs/kit/pull/8668))

## 1.2.3

### Patch Changes

- fix: set environment variables before postbuild analysis ([#8647](https://github.com/sveltejs/kit/pull/8647))

## 1.2.2

### Patch Changes

- fix: focus management after navigation ([#8466](https://github.com/sveltejs/kit/pull/8466))

## 1.2.1

### Patch Changes

- feat: throw error if cookie exceeds size limit ([#8591](https://github.com/sveltejs/kit/pull/8591))

## 1.2.0

### Minor Changes

- feat: add `text(...)` helper for generating text responses ([#8371](https://github.com/sveltejs/kit/pull/8371))

- feat: enable access to public env within app.html ([#8449](https://github.com/sveltejs/kit/pull/8449))

- fix: add `Content-Length` header to SvelteKit-generated responses ([#8371](https://github.com/sveltejs/kit/pull/8371))

## 1.1.4

### Patch Changes

- fix: squelch unknown prop warning for `+error.svelte` components ([#8593](https://github.com/sveltejs/kit/pull/8593))

## 1.1.3

### Patch Changes

- docs: explain how to add ambient typings ([#8558](https://github.com/sveltejs/kit/pull/8558))

- fix: ignore `target="_blank"` links ([#8563](https://github.com/sveltejs/kit/pull/8563))

## 1.1.2

### Patch Changes

- fix: correct link in types documentation ([#8557](https://github.com/sveltejs/kit/pull/8557))

- fix: correctly detect changed data ([#8377](https://github.com/sveltejs/kit/pull/8377))

- fix: only generate type definitions with `sync` command ([#8552](https://github.com/sveltejs/kit/pull/8552))

- fix: remove baseUrl to prevent wrong TypeScript auto imports if possible ([#8568](https://github.com/sveltejs/kit/pull/8568))

## 1.1.1

### Patch Changes

- chore: upgrade devalue ([#8520](https://github.com/sveltejs/kit/pull/8520))

## 1.1.0

### Minor Changes

- feat: warn when usage of page options in `.svelte` files or missing `<slot />` in layout is detected ([#8475](https://github.com/sveltejs/kit/pull/8475))

### Patch Changes

- fix: exit postbuild step with code 0 ([#8514](https://github.com/sveltejs/kit/pull/8514))

- fix: only run missing page check in dev mode ([#8515](https://github.com/sveltejs/kit/pull/8515))

- fix: avoid input name clobbering form method check ([#8471](https://github.com/sveltejs/kit/pull/8471))

- fix: exclude service worker from tsconfig ([#8508](https://github.com/sveltejs/kit/pull/8508))

- fix: provide better error message in case of missing `+page.svelte` ([#8478](https://github.com/sveltejs/kit/pull/8478))

## 1.0.13

### Patch Changes

- chore: separate generated from non-generated server code ([#8429](https://github.com/sveltejs/kit/pull/8429))

## 1.0.12

### Patch Changes

- fix: make prerendered endpoint callable from non-prerendered server load ([#8453](https://github.com/sveltejs/kit/pull/8453))

- docs: add links to http status codes ([#8480](https://github.com/sveltejs/kit/pull/8480))

- fix: prerender page when prerender set to 'auto' and ssr set to true ([#8481](https://github.com/sveltejs/kit/pull/8481))

- fix: prevent false positive warnings for fetch uses in firefox ([#8456](https://github.com/sveltejs/kit/pull/8456))

- fix: check version on node fetch fail ([#8487](https://github.com/sveltejs/kit/pull/8487))

- fix: avoid unnecessary $page store updates ([#8457](https://github.com/sveltejs/kit/pull/8457))

## 1.0.11

### Patch Changes

- feat: warn that hydration may break if comments are removed from HTML ([#8423](https://github.com/sveltejs/kit/pull/8423))
- fix: ignore `<a>` elements with no `href` attribute when refocusing after navigation ([#8418](https://github.com/sveltejs/kit/pull/8418))
- fix: invalidate dependencies implicitly added by `fetch` in server load functions ([#8420](https://github.com/sveltejs/kit/pull/8420))

## 1.0.10

### Patch Changes

- fix: skip inline cache when vary header is present ([#8406](https://github.com/sveltejs/kit/pull/8406))

## 1.0.9

### Patch Changes

- fix: add `assetFileNames` to worker rollup options ([#8384](https://github.com/sveltejs/kit/pull/8384))

## 1.0.8

### Patch Changes

- feat: error in dev mode if global `fetch` is used with relative URL ([#8370](https://github.com/sveltejs/kit/pull/8370))
- fix: disable illegal import detection when running unit tests ([#8365](https://github.com/sveltejs/kit/pull/8365))
- fix: only prerender a given dependency once ([#8376](https://github.com/sveltejs/kit/pull/8376))
- fix: `updated.check()` type changed to `Promise<boolean>` ([#8400](https://github.com/sveltejs/kit/pull/8400))
- fix: don't strip body in no-cors mode on the server ([#8412](https://github.com/sveltejs/kit/pull/8412))
- fix: quote 'script' in CSP directives ([#8372](https://github.com/sveltejs/kit/pull/8372))
- fix: correctly compare route ids for load change detection ([#8399](https://github.com/sveltejs/kit/pull/8399))
- fix: don't add nonce attribute to `<link>` elements ([#8369](https://github.com/sveltejs/kit/pull/8369))

## 1.0.7

### Patch Changes

- fix: ignore `*.test.js` and `*.spec.js` files in `params` directory ([#8250](https://github.com/sveltejs/kit/pull/8250))

## 1.0.6

### Patch Changes

- fix: guarantee that `$page.route` has the correct shape ([#8359](https://github.com/sveltejs/kit/pull/8359))

## 1.0.5

### Patch Changes

- fix: update typings of `event.platform` to be possibly undefined ([#8232](https://github.com/sveltejs/kit/pull/8232))

## 1.0.4

### Patch Changes

- fix: don't polyfill undici if using Deno or Bun ([#8338](https://github.com/sveltejs/kit/pull/8338))

## 1.0.3

### Patch Changes

- feat: include submitter's value when progressively enhancing `<form method="get">` ([#8273](https://github.com/sveltejs/kit/pull/8273))

## 1.0.2

### Patch Changes

- fix: correct `filterSerializedResponseHeaders` error message ([#8348](https://github.com/sveltejs/kit/pull/8348))
- fix: correct form action redirect status code ([#8210](https://github.com/sveltejs/kit/pull/8210))

## 1.0.1

### Patch Changes

- fix: explicitly mark Node 17.x as not supported ([#8174](https://github.com/sveltejs/kit/pull/8174))

## 1.0.0

### Major Changes

First major release, see below for the history of changes that lead up to this.
Starting from now all releases follow semver and changes will be listed as Major/Minor/Patch

## Pre 1.0

See [CHANGELOG-pre-v1.md](CHANGELOG-pre-v1.md)
