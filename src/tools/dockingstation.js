import {
	ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Application Name: Docking Station",
	desc: "Analyze your text or documents and convey the important concepts in bullet form.",
	category: "Programming",
	Icon: ViewListIcon,
	// tags: [],
	permissions: ['user'],

	fromColor: "gray-500",
	toColor: "gray-500",

	to: "/ai/dockingstation",
	api: "/ai/dockingstation",

	output: {
		title: "Docking Station : | FLCORPHBBLD0TesT",
		desc: "Application Error:  peripheral’s not connecting",
		Icon: false,
		color: "blue",
	},

	prompts: [{
		title: "Application Name: Docking Station",
		desc: "Application Error:  peripheral’s not connecting.",
		// n: 1,
		prompts: [{
			title: "Content",
			attr: "content",
			value: "",
			placeholder: "Peek the solution process....",
			label: "",
			type: "textarea",
			maxLength: 600,
			// max: 100,
			min: 3,
			required: true,
			error: "",
			example: "Application Error:  peripheral’s not connecting ",
		},
		],
		example: {
			outputs: [
				"",
				"Incident Number: ",
				"Team Mate Name:",
				" Call Back Number:  ",
				"Application Name: Docking Station",
				"Application Error:  peripheral’s not connecting ",
				"Steps Taken: (1) Verified user Bomgar  session established.",
				"",

				"Docking Station",
				"Team-mate's may call in with peripheral’s not connecting (monitors, keyboards, mouse, etc.).",
				"Unplug all connected devices including the laptop.",
				"Unplug the dock from the power source.",
				"Press down on the dock’s power button for about 1 minute.",
				"Connect the devices and docking station power cable.",
				"This should reset the dock and the peripheral devices should now function.",
				"",
				"",
				"Summary Resolution:",
				"Resolved: Yes",




			],
			// Icon: RefreshIcon,
			color: "blue",
		}
	}]

}

export default obj

