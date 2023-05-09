import {
    ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

    title: "One Drive Share files",
    desc: "–  Via Email | Via Link Use the Template. ",
    category: "Programming",
    Icon: ViewListIcon,
    // tags: [],
    permissions: ['user'],

    fromColor: "gray-500",
    toColor: "gray-500",

    to: "/ai/onedrive",
    api: "/ai/onedrive",

    output: {
        title: "One Drive Share files Via Email | Via Link",
        desc: "OneDrive training  Share and sync - OneDrive (personal)  Share files and folders",
        Icon: false,
        color: "blue",
    },

    prompts: [{
        title: "One Drive Share files Via Email | Via Link",
        desc: "Share and sync - OneDrive  Share files and folders  ",
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
            example: "One Drive Share files Via Email | Via Link",
        },
        ],
        example: {
            //output: //"Hello World Hello World Hello World Hello World Hello World Hello World Hello World ",
            outputs: [

                "Video:",
                "https://support.microsoft.com/en-us/office/",
                "share-files-and-folders-in-onedrive-personal-3fcefa26-1371-401e-8c04-589de81ed5eb",
                "",
                "Share a folder",
                "",
                "Select the folder you want to share, and then select Share",
                "Choose if you want to allow Allow editing.",
                "Select Get a link or Email and follow the steps above.",
                "",
                "",
                "Share files or photos in email",
                "",
                "",
                "Select the files or photos you want to share, and then select Share",
                "Choose if you want to allow Allow editing.",
                "Select Email.",
                "Enter the email addresses of the people you'd like to share with and add an optional message.",
                "Select Share.",
                "Everyone you share with will receive an email.",
                "",
                "",
                "Change permissions",
                "Select Shared.",
                "Select a folder or file, and then select the Information icon.",
                "Do one of the following:",
                "Select Add People to share with more people.",
                "Select Manage access to change permissions.",
                "Select the Can Edit or Can View dropdown to change permissions or Stop Sharing.",
                "Select the X to remove the link.",
                "",
            ],
            // Icon: RefreshIcon,
            color: "blue",
        }
    }]

}

export default obj

