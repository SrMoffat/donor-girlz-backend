import { factories } from "@strapi/strapi";

const donationAPI = "api::donation.donation"

export default factories.createCoreController(
    donationAPI,
    ({ strapi }) => ({
        async create(ctx) {
            console.log("Create Donations")
            // Send an SMS to thank the sponsor
            strapi.service(donationAPI).africasTalkingSendSMS({
                recipientPhoneNumber: "+254798356532",
                message: "Thanks for your donation"

            });

            // Call the default parent controller action
            const result = await super.create(ctx);

            return result;
        },
    })
);
