import {
    ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

    title: "Application Name: Intune",
    desc: "Application Error:  setup mobile devices with Intune.",
    category: "Programming",
    Icon: ViewListIcon,
    // tags: [],
    permissions: ['user'],

    fromColor: "gray-500",
    toColor: "gray-500",

    to: "/ai/Intune",
    api: "/ai/Intune",

    output: {
        title: "Intune: | FLCORPHBBLD0TesT",
        desc: "The following key points detected",
        Icon: false,
        color: "blue",
    },

    prompts: [{
        title: "Application Name: Intune",
        desc: "Application Error:  setup mobile devices with Intune.",
        // n: 1,
        prompts: [{
            title: "Content",
            attr: "content",
            value: "",
            placeholder: "Unlocking Possibilities.Impactful Rewrite: Empowering Progress.",
            label: "",
            type: "textarea",
            maxLength: 600,
            // max: 100,
            min: 3,
            required: true,
            error: "",
            example: "Application Error:  setup mobile devices with Intune",
        },
        ],
        example: {
            outputs: [
                "",
                "Incident Number: ",
                "Team Mate Name:",
                " Call Back Number:  ",
                "Application Name: Intune",
                "Application Error:  setup mobile devices with Intune",
                "Steps Taken: (1) Verified user Bomgar  session established.",
                "",

                "Intune Access request process",
                "Intune – We have been given permission to setup users mobile devices with Intune. ",
                "If the teammate has the appropriate license, you can get them setup",
                "If a license needs to be updated use the following SNOW Catalog item to request the update.",
                "Email, Office365 Apps (Teams) or Mobile Device Access",
                "https://evhc.service-now.com/",
                "evhc_sp?id=sc_cat_item&sys_",
                "id=1c1ff75f6f3f4a002ee995fd5d3ee41a",
                "Current License: EVHC\O365_F3_License_EVHC | EVHC\O365_E1_License_EVHC ",
                "License to get Intune: EVHC\M365_F3_License_EVHC | EVHC\M365_E1_StepUp_License_EVHC",
                "Current License: EVHC\O365_E3_License_EVHC | EVHC\O365_E5_License_EVHC ",
                "License to get Intune: EVHC\M365_E3_StepUp_License_EVHC | EVHC\M365_E5_StepUp_License_EVHC",
                "Current License: RTI\O365_F3_License_RTI | RTI\O365_E1_License_RTI | ",
                "License to get Intune: RTI\M365_F3_License_RTI | RTI\M365_E1_StepUp_License_RTI",
                "Current License: RTI\O365_E3_License_RTI | RTI\O365_E5_License_RTI",
                "License to get Intune: RTI\M365_E3_StepUp_License_RTI | RTI\M365_E5_StepUp_License_RTI",
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
