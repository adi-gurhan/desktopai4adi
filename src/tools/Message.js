import {
    ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

    title: "3 Strikes Templates",
    desc: "– Use the Template. ",
    category: "Programming",
    Icon: ViewListIcon,
    // tags: [],
    permissions: ['user'],

    fromColor: "gray-500",
    toColor: "gray-500",

    to: "/ai/Message",
    api: "/ai/Message",

    output: {
        title: "2nd Strike: ITSS-SD002",
        desc: "The following key points detected",
        Icon: false,
        color: "blue",
    },

    prompts: [{
        title: "1st Strike: ITSS-SD001",
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
            example: "3rd Strike: ITSS-SD003",
        },
        ],
        example: {
            //output: //"Hello World Hello World Hello World Hello World Hello World Hello World Hello World ",
            outputs: [

                "Subject: [Incident or Request#] - Waiting for Team-Mate regarding your ticket  ",
                "",
                "The IT Service Desk has received your ticket.  We have attempted to contact you without success on",
                "",
                "[Date] -  ",
                "via [Teams, Phone # and Email]-",
                "regarding [incident or request#]-      -                    -  ",
                "related to [problem description].       -                   -   ",
                "",
                "In order to properly troubleshoot your issue, we need more information. ",
                " Please call IT Service Desk @ 833-893-4357(HELP) with your device in front of you ",
                "so that we may recreate your issue.  Reference this ticket number.  ",
                "The EVHC IT Service Desk is available Monday through Friday 7am CST to 7pm CST.",
                "  Our lowest call volumes and hold times are after 1pm Wednesday through Friday.",
                "",
                "",
                "Adi.Gurhan",

                "Enterprise, IT ServiceDesk ",

                "833-893-4357 (HELP)",

                "ITSS-SD001",






            ],
            // Icon: RefreshIcon,
            color: "blue",
        }
    }]

}

export default obj

