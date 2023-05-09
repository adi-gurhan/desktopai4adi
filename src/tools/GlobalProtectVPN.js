import {
    ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

    title: "Application Name: Global Protect VPN",
    desc: "Application Error:  unable to access Global Protect ",
    category: "Programming",
    Icon: ViewListIcon,
    // tags: [],
    permissions: ['user'],

    fromColor: "gray-500",
    toColor: "gray-500",

    to: "/ai/GlobalProtectVPN",
    api: "/ai/GlobalProtectVPN",

    output: {
        title: "Global Protect VPN  : | FLCORPHBBLDTE5T1",
        desc: "The following key points detected",
        Icon: false,
        color: "blue",
    },

    prompts: [{
        title: "Application Name: Global Protect VPN",
        desc: "Application Error:  unable to access Global Protect ",
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
            example: "Application Error:  unable to access Global Protect ",
        },
        ],
        example: {
            //output: //"Hello World Hello World Hello World Hello World Hello World Hello World Hello World ",
            outputs: [
                "",
                "Incident Number: ",
                "Team Mate Name:",
                "Application Name:   Global Protect VPN",
                "Application Error:  unable to access Global Protect ",
                "Steps Taken: (1) Verified user Bomgar  session established.",
                "",

                "Global Protect VPN",
                "If the Team mate is unable to access Global Protect VPN perform the following steps.",
                "Test the Team Mate ability to login to OKTA (evhc.okta.com). If successful use the same credentials to",
                "login to the VPN. Successful login will prompt the Team Mate for their MFA code.",
                "In the event of login failure confirm that the Team-Mate has previously logged into Global Protect VPN.",
                "Check ARS for correct Security Group Access.",
                "Check – Is the AD account or OKTA Prod account active or Locked Out.",
                "Reinstall from Software Center. Uninstall may be needed.",
                "Login successful but the VPN will not connect. Error message will display in “RED”. 1st restart the computer. Attempt login to the VPN again.",
                "If you are unable to correct the problem, document all you have done and assign to ITSS-L2Desktopsupport.",
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

