import {
    ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

    title: "Application Name: Software Installs",
    desc: "Application Error:  Not Installed  ",
    category: "Programming",
    Icon: ViewListIcon,
    // tags: [],
    permissions: ['user'],

    fromColor: "gray-500",
    toColor: "gray-500",

    to: "/ai/softwareinstalls",
    api: "/ai/softwareinstalls",

    output: {
        title: "Software Installs   : | FLCORPHBBLDTE5T1",
        desc: "The following key points detected",
        Icon: false,
        color: "blue",
    },

    prompts: [{
        title: "Application Name: Software Installs",
        desc: "Application Error:  Not Installed  ",
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
            example: "Application Error:  Not Installed  ",
        },
        ],
        example: {
            //output: //"Hello World Hello World Hello World Hello World Hello World Hello World Hello World ",
            outputs: [
                "",
                "Incident Number: ",
                "Team Mate Name: ",
                " Call Back Number: ",
                "Application Name: Software Installs",
                "Application Error:  Not Installed  ",
                "Steps Taken: (1) Verified user Bomgar  session established.",
                "",

                "Software Installs",
                "ITSD will only install applications from Software Center. ",
                "All other software (non-standard) will be assigned to L2 Desktop for review.",
                "KB0021864",
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

