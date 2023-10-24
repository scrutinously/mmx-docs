/**
 * This configures the navigation sidebar.
 * All other languages follow this ordering/structure and will fall back to
 * English for any entries they haven’t translated.
 *
 * - All entries MUST include `text` and `key`
 * - Heading entries MUST include `header: true` and `type`
 * - Link entries MUST include `slug` (which excludes the language code)
 */
export default [
	{ text: 'Start Here', header: true, type: 'learn', key: 'startHere' },
	{ text: 'About', slug: 'about', key: 'about' },
	{ text: 'Installation', slug: 'install/manual', key: 'install' },
	{ text: 'Getting Started', slug: 'getting-started', key: 'getting-started' },

	{ text: 'Core Concepts', header: true, type: 'learn', key: 'coreConcepts' },

	{ text: 'Guides', header: true, type: 'learn', key: 'guides' },
	{ text: 'Remote Services', slug: 'guides/remote-services', key: 'guides/remote-services' },

	{ text: 'Tutorials', header: true, type: 'learn', key: 'tutorials' },
	{ text: 'Create a Token Contract', slug: 'tutorials/creating-tokens-manually', key: 'creating-tokens-manually' },
	
	// { text: 'Thinking with Islands', slug: 'tutorial/0-introduction', key: 'island-tutorial' },

	{ text: 'Basics', header: true, type: 'learn', key: 'basics' },

	{
		text: 'Frequently Asked Questions',
		slug: 'core-concepts/faq',
		key: 'core-concepts/faq',
	},

	{ text: 'Reference', header: true, type: 'api', key: 'reference' },
	{
		text: 'CLI Commands',
		slug: 'reference/cli',
		key: 'reference/cli',
	},
] as const;
