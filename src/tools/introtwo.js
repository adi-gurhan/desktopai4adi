import {
	MenuAlt2Icon,
} from '@heroicons/react/solid'


const obj = {

	title: "Citrix Workspace-Template",
	desc: "Citrix Workspace-Disconnection issues-Template",
	category: "Content",
	Icon: MenuAlt2Icon,
	// tags: [],
	permissions: ['user'],

	fromColor: "yellow-400",
	toColor: "yellow-600",

	to: "/ai/writing/introtwo",
	api: "/ai/writing/introtwo",

	output: {
		title: "Citrix Workspace- | FLCORPHBBLDTE5T1",
		desc: "Application Error: Disconnection issues",
		// Icon: RefreshIcon,
		// color: "",
	},

	prompts: [{
		title: "Entry Text",
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
			output: "Incident Number\n\nTeamMateName:\n\nCall Back Number:\n\nApplicationName:Citrix WorkSpace\n\nApplication Error: Disconnection Issues\n\nSteps Taken:Verified Team-mate\n\nThen Established Bomgar Session\n\nplease verify what version of Citrix Workspace is installed on the Team-Mate host PC\n\nThe most up to date version is 2302.\n\n Many of the older version have become unstable and are creating lots of disconnection issues\n\nCitrix Workspace app 2303 for Windows \n\nUrl:\n\n< https://www.citrix.com/downloads/workspaceapp \n\n /windows/workspace-app-for-windows-latest.html> \n\nSummary Resolution:\n\nResolved: Yes ",
			// outputs: [],
			// Icon: RefreshIcon,
			// color: "",
		}
	}]

}

export default obj

