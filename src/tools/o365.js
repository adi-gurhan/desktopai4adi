import {
    ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

    title: "Application Name: MS Outlook / O365",
    desc: "Application Error:  Not Connecting",
    category: "Programming",
    Icon: ViewListIcon,
    // tags: [],
    permissions: ['user'],

    fromColor: "gray-500",
    toColor: "gray-500",

    to: "/ai/o365",
    api: "/ai/o365",

    output: {
        title: "MS Outlook / O365  : | FLCORPHBBLDTE5T1",
        desc: "The following key points detected",
        Icon: false,
        color: "blue",
    },

    prompts: [{
        title: "Application Name: MS Outlook / O365",
        desc: "Application Error:  Not Connecting ",
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
            example: "Application Error:  Not Connecting ",
        },
        ],
        example: {
            //output: //"Hello World Hello World Hello World Hello World Hello World Hello World Hello World ",
            outputs: [
                "",
                "Incident Number: ",
                "Team Mate Name:",
                "Call Back Number: ",
                "Application Name: MS Outlook / O365",
                "Application Error:  Not Connecting ",
                "Steps Taken: (1) Verified user Bomgar  session established.",
                "Check if Global protect is connected for remote Team-Mates",
                "Make sure Team-Mate know the password to log into evhc.okta.com + evhc.oktapreview.com + 0365 Log in ",
                "Check default Apps and make sure Email is set to windows mail in order for windows calendar to fetch appointments",
                "If your still here you may need to check 0365 Modern authentication-Template-INC1532381",
                "Check Above template before doing any uninstall and re install",
                "Make sure under control panel mail show profile a profile is set up for this computer",
                "Some times you have to check for any firmware updates and driver updates on pc manufacturer website. ",
                "if this is resolved please close the ticket other wise fill out Tier 2 Checklist and escalate",



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

