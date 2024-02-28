import { factories } from "@strapi/strapi";

const donationAPI = "api::donation.donation"

const recipientPhoneNumber = "+254798356532"

export default factories.createCoreController(
    donationAPI,
    ({ strapi }) => ({
        async create(ctx) {
            console.log("Create Donations")
            // Send an SMS to thank the sponsor
            strapi.service(donationAPI).africasTalkingSendSMS({
                recipientPhoneNumber: "",
                message: "Happiness is giving it away. The more you give the more you receive, thank you for your generous donation"

            });

            // Call the default parent controller action
            const result = await super.create(ctx);

            return result;
        },
    })
);
