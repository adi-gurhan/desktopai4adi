import {
    ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

    title: "Syncing Domains",
    desc: "– Use the Template. ",
    category: "Programming",
    Icon: ViewListIcon,
    // tags: [],
    permissions: ['user'],

    fromColor: "gray-500",
    toColor: "gray-500",

    to: "/ai/syncing",
    api: "/ai/syncing",

    output: {
        title: "Syncing Domains",
        desc: "The following key points detected",
        Icon: false,
        color: "blue",
    },

    prompts: [{
        title: "Syncing Domains",
        desc: "The IT Service Desk has attempted to contact you without success on 2 separate occasions .  ",
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
            example: "Syncing Domains",
        },
        ],
        example: {
            //output: //"Hello World Hello World Hello World Hello World Hello World Hello World Hello World ",
            outputs: [

                "syncing the EMSC and the EVHC",
                "",
                "Work Around process for syncing the EMSC and the EVHC domain accounts:",
                "Verify their current device logon domain (EVHC in this case).",
                "Reset the password on that account with force reset checked.",
                "Lock the Windows screen.",
                "Have the Team-Mate log back in and reset the password.",
                "Verify that the accounts are synced.",
                "",
                "If the above method does not sync the accounts use the following method.",
                "",
                "Verify VPN connectivity.",
                "Reset the password on the EMSC account with force reset checked.",
                "Switch user on the computer.",
                "Login as other with the user's EMSC credentials.",
                "Have the user reset the password at the reset prompt using current EVHC password.",
                "Wait for the Windows desktop to load and log out of that profile.",
                "Have the user log back in to the EVHC profile.",
                "Verify the accounts are synced.",


            ],
            // Icon: RefreshIcon,
            color: "blue",
        }
    }]

}

export default obj

