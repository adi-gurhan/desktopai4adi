import {
    MenuAlt2Icon,
} from '@heroicons/react/solid'


const obj = {

    title: "Disable offline sync",
    desc: "Steps instructions to disable offline sync settings:",
    category: "Content",
    Icon: MenuAlt2Icon,
    // tags: [],
    permissions: ['user'],

    fromColor: "yellow-400",
    toColor: "yellow-600",

    to: "/ai/writing/citrix",
    api: "/ai/writing/citrix",

    output: {
        title: "Disable offline sync",
        desc: "Steps instructions to disable offline sync settings:",
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
            output: "Disable offline sync \n\n Instructions to disable offline sync settings: \n\n Click the start menu \n\n  type Control Panel \n\n and press enter \n\n Double-click Sync Center \n\n Click on Manage Offline files \n\n Click on Disable Offline Files \n\n This will require administrator credentials \n\n Select OK \n\n Select Yes to restart the computer \n\n Make sure Team-Mate \n\n Saved all open files \n\n After the computer restart, \n\n have the Team-Mate log in to their workstation and connect to Global Protect VPN \n\n if working from home \n\n Once connected, have the Team-Mate open their shared drive to verify if all files have returned. \n\n If files are still missing, \n\n escalate the issue to ITSS-L2ServerSupport \n\n to check for any backups.",
            // outputs: [],
            // Icon: RefreshIcon,
            // color: "",
        }
    }]

}

export default obj

