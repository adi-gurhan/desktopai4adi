import {
	MenuAlt2Icon,
} from '@heroicons/react/solid'


const obj = {

	title: "Citrix-Access",
	desc: "Create a useful instructional for Citrix Workspace",
	category: "Content",
	Icon: MenuAlt2Icon,
	// tags: [],
	permissions: ['user'],

	fromColor: "yellow-400",
	toColor: "yellow-600",

	to: "/ai/writing/intro",
	api: "/ai/writing/intro",

	output: {
		title: "Citrix-Access- | FLCORPHBBLDTE5T1",
		desc: "The following introduction has been generated",
		// Icon: RefreshIcon,
		// color: "",
	},

	prompts: [{
		title: "Citrix-Access-| FLCORPHBBLDTE5T1",
		desc: "Write small sentence or paragraph you wish to review.",
		// n: 1,
		prompts: [
			{
				title: "Title",
				attr: "title",
				value: "",
				placeholder: "The Subject",
				label: "The title you were planning to give the article.",
				// type: "textarea",
				maxLength: 150,
				// max: 100,
				min: 5,
				required: true,
				error: "",
				example: "Getting Started With Storybook Without a JavaScript Framework",
			},
			{
				title: "Audience",
				attr: "audience",
				value: "",
				placeholder: "Technology, development, etc",
				label: "Who the main group are you are writing for",
				// type: "textarea",
				maxLength: 50,
				// max: 100,
				// min: 5,
				// required: true,
				error: "",
				example: "Technology, development",
			},
			{
				title: "Description",
				attr: "desc",
				value: "",
				placeholder: "An article about how to start coding...",
				label: "A short description of what the article will be about",
				type: "textarea",
				maxLength: 600,
				// max: 100,
				// min: 100,
				// required: true,
				error: "",
				example: "An article about why its important to use storybook to document your progress even when working without a javascript framework to help you understand what you are doing.",
			},
			{
				title: "Keywords",
				attr: "keywords",
				value: "",
				placeholder: "Tech, code, etc...",
				label: "A summary of keywords that the article will consist of",
				// type: "textarea",
				maxLength: 100,
				// max: 100,
				// min: 4,
				// required: true,
				error: "",
				example: "Coding, development, html, css, js",
			},
		],
		example: {
			output: "Citrix/Emtrac \n\n The user must know their credentials \n\n (username and password) and be logged into Okta after that, they will need to follow the instructions below.\n\n access Citrix:Through your Start menu, locate and launch Citrix Workspace. \n\n Type https://myapps.shcr.com \n\n Type https://myapps.envisionhealth.com \n\n.click on Add \n\n When the application opens, you will probably be prompted twice for credentials: \n\n. First, enter your username and your Envision password \n\n Second, enter your username in the format of domain back slash username and your password. Domains: shcr.com, evhc.us \n\n Please check the Remember my password box and select Log On. \n\n  In Citrix, please select the APPS view and search for the one needed. \n\n  Launch the app directly from Citrix workspace. \n\n  ",
			// outputs: [],
			// Icon: RefreshIcon,
			// color: "",
		}
	}]

}

export default obj

