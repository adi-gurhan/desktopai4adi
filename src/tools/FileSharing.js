import {
    ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

    title: "Application Name: Shared Drive/File Sharing  ",
    desc: "Application Error:  Not Connecting",
    category: "Programming",
    Icon: ViewListIcon,
    // tags: [],
    permissions: ['user'],

    fromColor: "gray-500",
    toColor: "gray-500",

    to: "/ai/FileSharing",
    api: "/ai/FileSharing",

    output: {
        title: "Shared Drive/FileSharing  : | FLCORPHBBLDTE5T1",
        desc: "The following key points detected",
        Icon: false,
        color: "blue",
    },

    prompts: [{
        title: "Application Name: Shared Drive/File Sharing  ",
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
                "Application Name: Shared Drive/File Sharing  ",
                "Application Error:  Not Connecting ",
                "Steps Taken: (1) Verified user Bomgar  session established.",
                "",

                "SHCR Drive Mappings not working after device migration",
                "For SHCR Users that have been migrated and are unable to access their H: and Q: drives remap as ",
                "H:   \\flcorpfil.shcr.com\flcorp\firstname.Lastname",
                "Q:  \\flcorpfile.shcr.com\shared",
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

