import {
    ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

    title: "Application Name: Printer",
    desc: "Application Error:  Can’t print/Set up printer",
    category: "Programming",
    Icon: ViewListIcon,
    // tags: [],
    permissions: ['user'],

    fromColor: "gray-500",
    toColor: "gray-500",

    to: "/ai/printer",
    api: "/ai/printer",

    output: {
        title: "Printer Issues  : | FLCORPHBBLDTE5T1",
        desc: "The following key points detected",
        Icon: false,
        color: "blue",
    },

    prompts: [{
        title: "Can’t print/Set up printer",
        desc: "A sentence or paragraph you wish to understand in bullet point form.",
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
            example: "Application Error:  Can’t print/Set up printer",
        },
        ],
        example: {
            outputs: [
                "",
                "Incident Number: ",
                "Team Mate Name:",
                " Call Back Number:  ",
                "Application Name: Printer Issues",
                "Application Error:  Can’t print/Set up printer",
                "Steps Taken: (1) Verified user Bomgar  session established.",
                "",

                "Printer Issues",
                "Can’t print.",
                "Confirm that the printer is powered on, connected (USB, Wi-Fi, LAN).",
                "When was the last time the printer was working?",
                "Restart the printer.",
                "Restart print spooler.",
                "Restart the computer.",
                "Check to see if there are jobs waiting to print in the print queue. Delete all.",
                "Software Center has the “Universal HP Driver”. You may need to update or reinstall.",
                "If a network printer.",
                "Can anyone else print?",
                "Ping the IP Address.",
                "Reinstall the printer.",
                "",
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

