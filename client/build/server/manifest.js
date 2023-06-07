const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["empty.png","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.c59e0ac6.js","app":"_app/immutable/entry/app.2b107b52.js","imports":["_app/immutable/entry/start.c59e0ac6.js","_app/immutable/chunks/index.b13adcb1.js","_app/immutable/chunks/singletons.b4a4fbcc.js","_app/immutable/entry/app.2b107b52.js","_app/immutable/chunks/index.b13adcb1.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-3d89b26c.js'),
			() => import('./chunks/1-ef62bbbc.js'),
			() => import('./chunks/2-b6dc482a.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
