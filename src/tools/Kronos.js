import {
	ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Kronos Dimensions | UKG WFC 8.1 Clinical",
	desc: "Application Error:  Unable to access Kronos Dimensions | UKG WFC 8.1 Clinical Okta chicklet",
	category: "Programming",
	Icon: ViewListIcon,
	// tags: [],
	permissions: ['user'],

	fromColor: "gray-500",
	toColor: "gray-500",

	to: "/ai/Kronos",
	api: "/ai/Kronos",

	output: {
		title: "Kronos Dimension  : | FLCORPHBBLD0TesT",
		desc: "The following key points detected",
		Icon: false,
		color: "blue",
	},

	prompts: [{
		title: "UKG WFC 8.1 Clinical Chicklet-FLCORPHBBLD0TesT",
		desc: "access not working",
		// n: 1,
		prompts: [{
			title: "Content",
			attr: "content",
			value: "",
			placeholder: "Observe the following demonstration to uncover the steps towards arriving at a solution.",
			type: "textarea",
			maxLength: 600,
			// max: 100,
			min: 3,
			required: true,
			error: "",
			example: "Application Error:  Unable to access Kronos Dimensions | UKG WFC 8.1 Clinical Okta chicklet",
		},
		],
		example: {
			outputs: [
				"",
				"Incident Number: ",
				"Team Mate Name:",
				" Call Back Number:  ",
				"Application Name: Kronos Dimensions",
				"Application Name: UKG WFC 8.1 Clinical Chicklet",
				"Application Error: ",
				"Steps Taken: (1) Verified user Bomgar  session established.",
				"",

				"Kronos Dimensions",
				"Team-Mate will access from OKTA Prod evhc.okta.com",
				"Please note that new hire may not have immediate access to Kronos Dimensions. Access will be",
				"granted possibly up to 3 days after their initial start date.",
				"Assign the ticket to Kronos Support. Document the Team-Mate's start date.",
				"Escalate to ITSS-KronosDimensionTechnicalSupport",
				"",
				"",
				"UKG WFC 8.1 Clinical",
				"Unable to Currently access UKG WFC 8.1 Clinical Chicklet",
				"Fill out request link: Related To: Access Issues (TimeStamp,Request off, missing employess",
				"Request Link:",
				"<https://evhc.service-now.com/",
				"evhc_sp?id=sc_cat_item&sys_",
				"id=0210992b1b816450472054252a4bcb45>",
				"Summary Resolution:",
				"Resolved: Yes",




			],
			// Icon: RefreshIcon,
			color: "blue",
		}
	}]

}
export default obj

