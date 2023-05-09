import {
	ChevronRightIcon,
} from '@heroicons/react/solid'

import {
	EyeIcon,
} from '@heroicons/react/outline'



const obj = {

	title: "Explain Code",
	desc: "Interpret some code based on the language, code, and syntax provided",
	category: "Programming",
	Icon: EyeIcon,
	// tags: [],
	permissions: ['user'],

	fromColor: "gray-800",
	toColor: "gray-600",

	to: "/ai/code/interpret",
	api: "/ai/code/interpret",

	output: {
		title: "What does this code do",
		desc: "The following code does:",
		Icon: ChevronRightIcon,
		color: "gray",
	},

	prompts: [{
		title: "Interpret Code",
		desc: "Write details about your code below",
		// n: 1,
		prompts: [
			{
				title: "Language",
				attr: "language",
				value: "",
				placeholder: "JavaScript...",
				label: "Which language are you using, will enable markup highlights",
				type: "text",
				maxLength: 40,
				// options: [{ title: "2nd Grader", value: "2nd Grader", desc: "Explain this like I'm 5 years old", Icon: AnnotationIcon },],
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: `JavaScript`,
			},
			{
				title: "Code Editor",
				attr: "content",
				value: "",
				placeholder: "function Name(attr){...",
				label: "Place some code above to understand how it works",
				type: "code",
				maxLength: 2000,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: `function How To Run React Native App(text){ 
	let text || "- \n\n How to Run using typescript template"; \n\n
	let text || \n\n "PS D:\Master\Expo\documents> \n\n npx react-native init lesson_one --template react-native-template-typescript"; 
	let text || \n\n "Then CD lesson_one"; 
	let text || \n\n "Then Code . "; 
	let text || \n\n"Then adb devices"; 
	let text || "\n\nThis will display a list of all connected devices and their status,similar to this, "; 
	let text || \n\n"List of devices attached"; 
	let text || \n\n"emulator-5554   device"; 
	let text || ""; 
	let text || \n\n"npx react-native run-android"; 
	let text || \n\n"Then "; 
	let text || \n\n"npx react-native start"; 
	console.log(text);
}`,
			},
		],
		example: {
			output: ``,
			outputs: [
				" npx react-native init lesson_one --template react-native-template-typescript",
				"",
				"",
				"npx react-native run-android",
				"Then CD lesson_one",
				"Then Code .",
				"Then adb devices",
				"List of devices attached",
				"emulator-5554   device",
				"npx react-native run-android",
				"Then ",
				"npx react-native start",
				"",
				"Welcome to Metro v0.73.7.",
				" Fast - Scalable - Integrated",
				"r - reload the app",
				"d - open developer menu",
				"i - run on iOS",
				"a - run on Android",
				"",
				"",
				"",
			],
			// Icon: TerminalIcon,
			// color: "gray",
		}
	}]

}

export default obj

