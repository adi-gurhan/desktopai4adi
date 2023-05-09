import {
    ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

    title: "Tier 2 Escalation",
    desc: "Escalating to Tier2 – Use the Template. ",
    category: "Programming",
    Icon: ViewListIcon,
    // tags: [],
    permissions: ['user'],

    fromColor: "gray-500",
    toColor: "gray-500",

    to: "/ai/Tier2",
    api: "/ai/Tier2",

    output: {
        title: "Tier 2 Escalation",
        desc: "The following key points detected",
        Icon: false,
        color: "blue",
    },

    prompts: [{
        title: "Tier 2 Escalation",
        desc: "Escalating to Tier2 – Use the Template.  ",
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
            example: "Escalating to Tier2 – Use the Template. ",
        },
        ],
        example: {
            //output: //"Hello World Hello World Hello World Hello World Hello World Hello World Hello World ",
            outputs: [
                "Escalating to Tier2 – Use the Template. ",
                "Tier2 Escalation Template",
                "Have you searched the KBs? ",
                "If so, please reference the KB.",
                "",
                "Have you search SNOW for similar previous issues? ",
                "If so, please reference previous ticket.",
                "",
                " Have you searched Slack/Teams for reference to previous issues? ",
                "",
                "Have you searched your Personal notes regarding the issue? ",
                "",
                " Have you done anything to correct the problem? (Reboot ET) Adjusted display and power settings",
                "",
                "· Have you checked SentinelOne? ",
                "",
                "Are all AD accounts in Sync? SHCR vs. EVHC. Big time hit for GE/Athena. ",
                "",
                "Application access – Have you had access in the past? ",
                "",
                "Is there a request for the access? ",
                "",






            ],
            // Icon: RefreshIcon,
            color: "blue",
        }
    }]

}

export default obj

