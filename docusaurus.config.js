const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: "烟花的博客",
	tagline: "一花一世界，一木一浮生。",
	url: "https://docusaurus-site-3gptgkjef7c33c6b-1251006253.ap-shanghai.app.tcloudbase.com",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "meteor tears", // Usually your GitHub org/user name.
	projectName: "blog", // Usually your repo name.
	i18n: {
		defaultLocale: "zh-Hans",
		locales: ["zh-Hans"],
	},
	themeConfig: {
		navbar: {
			title: "博客",
			logo: {
				alt: "My Site Logo",
				src: "img/logo.svg",
			},
			items: [
				// {
				// 	type: "doc",
				// 	docId: "intro",
				// 	position: "left",
				// 	label: "Tutorial",
				// },
				{ to: "/blog", label: "Blog", position: "left" },
				{
					to: "/helloMarkdown/helloMarkdown",
					label: "HelloMarkdown",
					position: "left",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				// {
				// 	title: "Docs",
				// 	items: [
				// 		{
				// 			label: "Tutorial",
				// 			to: "/docs/intro",
				// 		},
				// 	],
				// },
				{
					title: "Community",
					items: [
						{
							label: "Stack Overflow",
							href: "https://stackoverflow.com/questions/tagged/docusaurus",
						},
					],
				},
				{
					title: "More",
					items: [
						{
							label: "Blog",
							to: "/blog",
						},
						{
							label: "CloudBase Webify",
							to: "https://webify.cloudbase.net",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
		},
		prism: {
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme,
		},
	},
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl:
						"https://github.com/facebook/docusaurus/edit/master/website/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						"https://github.com/facebook/docusaurus/edit/master/website/blog/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
};
