import {
    ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

    title: "Application Name: Jabber/Finesse",
    desc: "Application Error:  KB0020723",
    category: "Programming",
    Icon: ViewListIcon,
    // tags: [],
    permissions: ['user'],

    fromColor: "gray-500",
    toColor: "gray-500",

    to: "/ai/jabber",
    api: "/ai/jabber",

    output: {
        title: "Jabber/Finesse : | FLCORPHBBLDTE5T1",
        desc: "The following key points detected",
        Icon: false,
        color: "blue",
    },

    prompts: [{
        title: "Application Name: Jabber/Finesse",
        desc: "A sentence or paragraph you wish to understand in bullet point form.",
        // n: 1,
        prompts: [{
            title: "Content",
            attr: "content",
            value: "",
            placeholder: "Prepare to be amazed as we unveil the powerful process that yields impactful solutions",
            label: "",
            type: "textarea",
            maxLength: 600,
            // max: 100,
            min: 3,
            required: true,
            error: "",
            example: "Application Error:  KB0020723",
        },
        ],
        example: {
            outputs: [
                "",
                "Incident Number: ",
                "Team Mate Name:",
                " Call Back Number:  ",
                "Application Name: Jabber/Finesse",
                "Application Error:  KB0020723",
                "Steps Taken: (1) Verified user Bomgar  session established.",
                "",

                "Jabber/Finesse Issues",
                "Can’t make out bound calls | i'm speaking and no one can hear me.",
                "Confirm that VPN is connected Confirm Jabber log in is working.",
                "If Team Mate does not know jabber log in check email from L2-VoiceTelcom or Contact Via Teams?",
                "make sure jabber log in works",
                "settings>audio>",
                "Make sure Microphone is set to Team mate Headset/LogiTech/Plantronics - microphone",
                "Make sure speaker audio and microphone works look for audio spike.",
                "Software Center has  “Cisco Jabber”. You may need to update or reinstall.",
                "Can't find it in Software center did you check  software (\\flcorpfile.shcr.com\MIS)",
                "if your here and still stuck please assign to l2-Voicetelcomsupport team other wise mark this resolve",

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

