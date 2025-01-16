
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const GITHUB_TOKEN: string;
	export const npm_package_devDependencies__types_node: string;
	export const npm_package_devDependencies__eslint_compat: string;
	export const npm_package_devDependencies_eslint_plugin_storybook: string;
	export const USER: string;
	export const SSH_CLIENT: string;
	export const npm_config_version_commit_hooks: string;
	export const npm_config_user_agent: string;
	export const npm_config_bin_links: string;
	export const XDG_SESSION_TYPE: string;
	export const GIT_ASKPASS: string;
	export const npm_node_execpath: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_config_init_version: string;
	export const SHLVL: string;
	export const GO_PATH: string;
	export const BROWSER: string;
	export const HOME: string;
	export const MOTD_SHOWN: string;
	export const OLDPWD: string;
	export const LESS: string;
	export const npm_package_devDependencies__eslint_js: string;
	export const TERM_PROGRAM_VERSION: string;
	export const VSCODE_IPC_HOOK_CLI: string;
	export const NVM_BIN: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const ZSH: string;
	export const LSCOLORS: string;
	export const NVM_INC: string;
	export const npm_config_init_license: string;
	export const PAGER: string;
	export const _ZSH_TMUX_FIXED_CONFIG: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const YARN_WRAP_OUTPUT: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_config_version_tag_prefix: string;
	export const SSL_CERT_FILE: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const npm_package_scripts_check: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const ZPLUG_HOME: string;
	export const P9K_TTY: string;
	export const COLORTERM: string;
	export const npm_package_description: string;
	export const npm_package_dependencies__tailwindcss_typography: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_package_devDependencies_daisyui: string;
	export const NVM_DIR: string;
	export const npm_package_readmeFilename: string;
	export const npm_package_devDependencies__storybook_svelte: string;
	export const GO_PKG_PATH: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_scripts_dev: string;
	export const LOGNAME: string;
	export const GO111MODULE: string;
	export const npm_package_type: string;
	export const _: string;
	export const _P9K_SSH_TTY: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_private: string;
	export const XDG_SESSION_CLASS: string;
	export const USER_ZDOTDIR: string;
	export const npm_package_scripts_lint: string;
	export const npm_config_registry: string;
	export const XDG_SESSION_ID: string;
	export const TERM: string;
	export const npm_package_devDependencies__storybook_addon_interactions: string;
	export const npm_config_ignore_scripts: string;
	export const npm_package_devDependencies_prettier_plugin_tailwindcss: string;
	export const npm_package_devDependencies__chromatic_com_storybook: string;
	export const PATH: string;
	export const NODE: string;
	export const npm_package_devDependencies_typescript_eslint: string;
	export const npm_package_devDependencies__types_eslint_config_prettier: string;
	export const npm_package_name: string;
	export const XDG_RUNTIME_DIR: string;
	export const npm_package_devDependencies_storybook: string;
	export const SSL_CERT_DIR: string;
	export const npm_package_dependencies__tailwindcss_container_queries: string;
	export const npm_package_devDependencies__storybook_addon_svelte_csf: string;
	export const LANG: string;
	export const VSCODE_INJECTION: string;
	export const npm_package_devDependencies_eslint: string;
	export const AWS_ACCOUNT_ID: string;
	export const LS_COLORS: string;
	export const ZSH_TMUX_TERM: string;
	export const TERM_PROGRAM: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const npm_lifecycle_script: string;
	export const npm_package_eslintConfig_extends_0: string;
	export const npm_config_path: string;
	export const SSH_AUTH_SOCK: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_config_version_git_message: string;
	export const SHELL: string;
	export const npm_lifecycle_event: string;
	export const npm_package_version: string;
	export const YARN_PATH: string;
	export const AWS_ACCESS_KEY_ID: string;
	export const npm_config_argv: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_scripts_build: string;
	export const AWS_SECRET_ACCESS_KEY: string;
	export const npm_package_devDependencies__storybook_sveltekit: string;
	export const npm_config_version_git_tag: string;
	export const npm_config_version_git_sign: string;
	export const P9K_SSH: string;
	export const npm_package_license: string;
	export const npm_package_devDependencies_globals: string;
	export const npm_package_devDependencies__storybook_blocks: string;
	export const npm_config_strict_ssl: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const VSCODE_NONCE: string;
	export const npm_package_scripts_format: string;
	export const PWD: string;
	export const GPG_TTY: string;
	export const npm_execpath: string;
	export const SSH_CONNECTION: string;
	export const ZSH_TMUX_CONFIG: string;
	export const ZDOTDIR: string;
	export const _P9K_TTY: string;
	export const NVM_CD_FLAGS: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_scripts_build_storybook: string;
	export const npm_config_save_prefix: string;
	export const npm_config_ignore_optional: string;
	export const TMUX_TZ: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_package_devDependencies__storybook_test: string;
	export const npm_package_devDependencies__storybook_addon_essentials: string;
	export const npm_package_scripts_storybook: string;
	export const npm_package_scripts_preview: string;
	export const CLOUDSDK_HOME: string;
	export const npm_package_dependencies__tailwindcss_forms: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		GITHUB_TOKEN: string;
		npm_package_devDependencies__types_node: string;
		npm_package_devDependencies__eslint_compat: string;
		npm_package_devDependencies_eslint_plugin_storybook: string;
		USER: string;
		SSH_CLIENT: string;
		npm_config_version_commit_hooks: string;
		npm_config_user_agent: string;
		npm_config_bin_links: string;
		XDG_SESSION_TYPE: string;
		GIT_ASKPASS: string;
		npm_node_execpath: string;
		npm_package_devDependencies_vite: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_config_init_version: string;
		SHLVL: string;
		GO_PATH: string;
		BROWSER: string;
		HOME: string;
		MOTD_SHOWN: string;
		OLDPWD: string;
		LESS: string;
		npm_package_devDependencies__eslint_js: string;
		TERM_PROGRAM_VERSION: string;
		VSCODE_IPC_HOOK_CLI: string;
		NVM_BIN: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		ZSH: string;
		LSCOLORS: string;
		NVM_INC: string;
		npm_config_init_license: string;
		PAGER: string;
		_ZSH_TMUX_FIXED_CONFIG: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		YARN_WRAP_OUTPUT: string;
		npm_package_devDependencies_svelte_check: string;
		npm_config_version_tag_prefix: string;
		SSL_CERT_FILE: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		npm_package_scripts_check: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		ZPLUG_HOME: string;
		P9K_TTY: string;
		COLORTERM: string;
		npm_package_description: string;
		npm_package_dependencies__tailwindcss_typography: string;
		npm_package_devDependencies_typescript: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_package_devDependencies_daisyui: string;
		NVM_DIR: string;
		npm_package_readmeFilename: string;
		npm_package_devDependencies__storybook_svelte: string;
		GO_PKG_PATH: string;
		npm_package_devDependencies_prettier: string;
		npm_package_scripts_dev: string;
		LOGNAME: string;
		GO111MODULE: string;
		npm_package_type: string;
		_: string;
		_P9K_SSH_TTY: string;
		npm_package_devDependencies_autoprefixer: string;
		npm_package_scripts_check_watch: string;
		npm_package_private: string;
		XDG_SESSION_CLASS: string;
		USER_ZDOTDIR: string;
		npm_package_scripts_lint: string;
		npm_config_registry: string;
		XDG_SESSION_ID: string;
		TERM: string;
		npm_package_devDependencies__storybook_addon_interactions: string;
		npm_config_ignore_scripts: string;
		npm_package_devDependencies_prettier_plugin_tailwindcss: string;
		npm_package_devDependencies__chromatic_com_storybook: string;
		PATH: string;
		NODE: string;
		npm_package_devDependencies_typescript_eslint: string;
		npm_package_devDependencies__types_eslint_config_prettier: string;
		npm_package_name: string;
		XDG_RUNTIME_DIR: string;
		npm_package_devDependencies_storybook: string;
		SSL_CERT_DIR: string;
		npm_package_dependencies__tailwindcss_container_queries: string;
		npm_package_devDependencies__storybook_addon_svelte_csf: string;
		LANG: string;
		VSCODE_INJECTION: string;
		npm_package_devDependencies_eslint: string;
		AWS_ACCOUNT_ID: string;
		LS_COLORS: string;
		ZSH_TMUX_TERM: string;
		TERM_PROGRAM: string;
		VSCODE_GIT_IPC_HANDLE: string;
		npm_lifecycle_script: string;
		npm_package_eslintConfig_extends_0: string;
		npm_config_path: string;
		SSH_AUTH_SOCK: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_config_version_git_message: string;
		SHELL: string;
		npm_lifecycle_event: string;
		npm_package_version: string;
		YARN_PATH: string;
		AWS_ACCESS_KEY_ID: string;
		npm_config_argv: string;
		npm_package_devDependencies_svelte: string;
		npm_package_scripts_build: string;
		AWS_SECRET_ACCESS_KEY: string;
		npm_package_devDependencies__storybook_sveltekit: string;
		npm_config_version_git_tag: string;
		npm_config_version_git_sign: string;
		P9K_SSH: string;
		npm_package_license: string;
		npm_package_devDependencies_globals: string;
		npm_package_devDependencies__storybook_blocks: string;
		npm_config_strict_ssl: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		VSCODE_NONCE: string;
		npm_package_scripts_format: string;
		PWD: string;
		GPG_TTY: string;
		npm_execpath: string;
		SSH_CONNECTION: string;
		ZSH_TMUX_CONFIG: string;
		ZDOTDIR: string;
		_P9K_TTY: string;
		NVM_CD_FLAGS: string;
		npm_package_devDependencies_postcss: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_scripts_build_storybook: string;
		npm_config_save_prefix: string;
		npm_config_ignore_optional: string;
		TMUX_TZ: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_package_devDependencies__storybook_test: string;
		npm_package_devDependencies__storybook_addon_essentials: string;
		npm_package_scripts_storybook: string;
		npm_package_scripts_preview: string;
		CLOUDSDK_HOME: string;
		npm_package_dependencies__tailwindcss_forms: string;
		INIT_CWD: string;
		EDITOR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
