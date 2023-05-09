import {
    ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

    title: "Application Name: Calabrio One Smart Desktop",
    desc: "Application Error:  Installing Calabrio One Smart Desktop ",
    category: "Programming",
    Icon: ViewListIcon,
    // tags: [],
    permissions: ['user'],

    fromColor: "gray-500",
    toColor: "gray-500",

    to: "/ai/calabrio",
    api: "/ai/calabrio",

    output: {
        title: "Calabrio One Smart Desktop  : | FLCORPHBBLDTE5T1",
        desc: "The following key points detected",
        Icon: false,
        color: "blue",
    },

    prompts: [{
        title: "Application Name: Calabrio One Smart Desktop",
        desc: "Application Error: Installing Calabrio One Smart Desktop ",
        // n: 1,
        prompts: [{
            title: "Content",
            attr: "content",
            value: "",
            placeholder: "Witness the remarkable transformation that occurs as we implement the process towards a solution.",
            label: "",
            type: "textarea",
            maxLength: 600,
            // max: 100,
            min: 3,
            required: true,
            error: "",
            example: "Application Error: Installing Calabrio One Smart Desktopt ",
        },
        ],
        example: {
            //output: //"Hello World Hello World Hello World Hello World Hello World Hello World Hello World ",
            outputs: [
                "",
                "Incident Number: ",
                "Team Mate Name:",
                "Call Back Number:",
                "Application Name:   Calabrio One Smart Desktop",
                "Application Error:  Installing Calabrio One Smart Desktopt ",
                "Steps Taken: (1) Verified user Bomgar  session established.",
                "",

                "Calabrio One Smart Desktop",
                "Installing Calabrio One Smart Desktop",
                " On your local computer, open Software center",
                "You can find this in the start menu by typing software center in the search bar",
                "In software center, find Calabrio One smart desktop client",
                " by scrolling or using the search bar function.",
                "Double click the Icon “Calabrio One smart desktop client” to open it",
                "Choose Install",
                "The Status Indicates Installed:",
                "Type Calabrio One Recording Controls in your Search Bar and Pin to taskbar",
                "Make sure to open this icon daily in and minimize it as you will not use",
                "any of the buttons in the window",
                "Please continue to pause/ resume calls in the Calabrio chiclet via Okta only",
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

