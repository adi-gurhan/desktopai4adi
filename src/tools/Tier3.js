import {
    ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

    title: "Layers Troubleshooting",
    desc: "Layers Troubleshooting– Use the Template. ",
    category: "Programming",
    Icon: ViewListIcon,
    // tags: [],
    permissions: ['user'],

    fromColor: "gray-500",
    toColor: "gray-500",

    to: "/ai/Tier3",
    api: "/ai/Tier3",

    output: {
        title: "Layers Troubleshooting",
        desc: "The following key points detected",
        Icon: false,
        color: "blue",
    },

    prompts: [{
        title: "Layers Troubleshooting",
        desc: "Use the Template.  ",
        // n: 1,
        prompts: [{
            title: "Content",
            attr: "content",
            value: "",
            placeholder: "Witness the remarkable transformation that occurs when you Use the Template. .",
            label: "",
            type: "textarea",
            maxLength: 600,
            // max: 100,
            min: 3,
            required: true,
            error: "",
            example: "Layers Troubleshooting Use the Template. ",
        },
        ],
        example: {
            //output: //"Hello World Hello World Hello World Hello World Hello World Hello World Hello World ",
            outputs: [
                "Oracle (Include FTE and IC)",
                "ADAccount:  ",
                "EmployeeID:  ",
                "Email Address: ",
                "Supervisor:  ",
                "",
                " ARS (Include all active ARS accounts as well",
                " as duplicates within the same domain. Disable any duplicate accounts.) ",
                "Username: EVHC\ ",
                "Employee ID:   ",
                "E-mail|SMTP: ",
                "Manager:  ",
                " ",
                "SNow (Include duplicate accounts. Create child INC to have SNow team update record (if it does not ", "update automatically after 24 hours) or remove to duplicates. Assign to ITSS-L2ServiceNowSupport.) ",
                "Username:  ",
                "Employee number: ",
                "E-mail:  ",
                "Manager:  ",
                " ",
                "OKTA (Include active duplicate accounts. Create child INC to have OKTA team update chiclet, re-sync", "account or remove duplicates. Assign to ITSS-L2OKTASupport.)",
                "Prod ",
                "Status:   Active ",
                "Username:   ",
                "Primary Email:  ",
                "Chiclet having issue: MyHrConnections – old ",
                "Assignment: ",
                "App Username:  ",
                "Chiclet having issue: My Hr Portal ",
                "Assignment:       ",
                "App Username:  ",
                "Notes  + Next Steps:",






            ],
            // Icon: RefreshIcon,
            color: "blue",
        }
    }]

}

export default obj

