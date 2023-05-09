import {
    ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

    title: "Application Name: 0365 Modern authentication",
    desc: "Application Error:  0365 Modern authentication -required ",
    category: "Programming",
    Icon: ViewListIcon,
    // tags: [],
    permissions: ['user'],

    fromColor: "gray-500",
    toColor: "gray-500",

    to: "/ai/ADAL",
    api: "/ai/ADAL",

    output: {
        title: "0365 Modern authentication  : | FLCORPHBBLDTE5T1",
        desc: "The following key points detected",
        Icon: false,
        color: "blue",
    },

    prompts: [{
        title: "Application Name:  Software center-0365 Modern authentication. ",
        desc: "Application Error:  0365 Modern authentication -required t ",
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
            example: "Application Error:  0365 Modern authentication -required  ",
        },
        ],
        example: {
            //output: //"Hello World Hello World Hello World Hello World Hello World Hello World Hello World ",
            outputs: [
                "",
                "Incident Number: ",
                "Team Mate Name:",
                "Application Name:  Software center. ",
                "Application Error:  0365 Modern authentication -required ",
                "Steps Taken: (1) Verified user Bomgar  session established.",
                "",

                "Open Software Center by typing software center in the Start menu.",
                "Find ADAL Settings for Office 2016 in the list.",
                "Click Install and wait for it to show",
                "Installed in the status.",
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

