import {
	ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Application Name:  Oracle",
	desc: "Application Error:  Oracle auto log in not working just getting a loading screen.",
	category: "Programming",
	Icon: ViewListIcon,
	// tags: [],
	permissions: ['user'],

	fromColor: "gray-500",
	toColor: "gray-500",

	to: "/ai/Oracle",
	api: "/ai/Oracle",

	output: {
		title: "Oracle re synch required: | FLCORPHBBLDTE5T1",
		desc: "The following key points detected",
		Icon: false,
		color: "blue",
	},

	prompts: [{
		title: "Application Name:  Oracle ",
		desc: "Oracle auto log in not working just getting a loading screen.",
		// n: 1,
		prompts: [{
			title: "Content",
			attr: "content",
			value: "",
			placeholder: "Play this template to reveal a process to a solution",
			label: "",
			type: "textarea",
			maxLength: 600,
			// max: 100,
			min: 3,
			required: true,
			error: "",
			example: "Oracle auto log in not working just getting a loading screen",
		},
		],
		example: {
			//output: //"Hello World Hello World Hello World Hello World Hello World Hello World Hello World ",
			outputs: [
				"Incident Number: ",
				"Team Mate Name:",
				"Application Name:  Oracle",
				"Application Error:  Oracle auto log in not working just getting a loading screen",
				"Steps Taken: (1) Verified user Bomgar  session established.",
				"",
				"Remoted and Cleared Cache, Disabled pop up blockers",
				"Enabled IE mode, Allowed all from : https://oraprod.evhc.net/OA_HTML/OA.jsp?OAFunc=OAHOMEPAGE#",
				"Then reset Okta plugin for browser; This did not load for user from SWC- Greyed out.",
				"Replaced and allowed plugin, redid Java settings; ",
				"https://oradev.evhc.net",
				"https://oraprod.evhc.net",
				"https://orastage.evhc.net",
				"https://oratest.evhc.net",
				"Close the browser, relaunch, and verified successful firing of Java. ",
				"User verified functionality and access.",
				"",
				"",
				"",
				"Summary Resolution:",
				"Resolved: Yes",

				"Notice",
				"We have upgraded Okta to the latest version.",
				" While doing the post-upgrade validation we realized that",
				"Team-Mates who have an Okta plugin version older than 5.45 ",
				"In Edge will not be able to access Oracle,",
				" the username and password will not auto-fill ",
				"so it will just remain on the login page.",
				"Here are the steps you can take to confirm if you have the correct version installed ",
				".",
				"",
				"Click on the windows icon () and type Internet Options",
				"Once it opens, go to Programs -> Manage add-ons:",
				"Then on the screen that shows up, click on the “Okta toolbar” ",
				"plugin, please check you have the Okta plugin 5.45 or newer ",
				"installed and that the status is Enabled:",
				"If for any reason you an older version than 5.45, ",
				"you can install the correct version from the Software Center by ",
				"",
				"following these steps:",
				"",
				"Make sure are on the VPN.",
				"Run gpupdate /force",
				"From a command prompt to receive the latest group policy.",
				"To open a command prompt, click on the windows ICon",
				"type “cmd” and press enter.",
				"Edge must be closed before installing the plugin from",
				"Software Center or it won’t install.",
				"Once the plug in is installed, Software Center will say “Failed” ",
				"but it was actually installed. You can confirm it with the step ",
				"gpupdate /force  ",
				"Make sure are on the VPN.",
				"receive the latest group policy",


			],
			// Icon: RefreshIcon,
			color: "blue",
		}
	}]

}

export default obj

