/**
 * donation service
 */

import { factories } from '@strapi/strapi';

const AfricasTalking = require('africastalking');

const CONFIG = {
    apiKey: "d23b67718eed538d2956d178bd698fad1462dec8e7dc6b213b4d7f8feecd2829",
    username: "donorgirlz",
}

export default factories.createCoreService('api::donation.donation', ({ strapi }) => ({
    async africasTalkingSendSMS(args) {
        const { recipientPhoneNumber, message } = args
        const { apiKey, username } = CONFIG

        try {
            const africastalking = AfricasTalking({
                apiKey,
                username
            });

            const result = await africastalking.SMS.send({
                to: recipientPhoneNumber,
                message,
            });

            console.log(result);
        } catch (ex) {
            console.error(ex);
        }
    },
}));
