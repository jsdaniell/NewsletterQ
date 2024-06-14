import cron from "node-cron"
import moment from "moment-timezone";
import { Resend } from "resend";


cron.schedule('00 12 * * *', async () => {
    try {
        const saoPauloTime = moment.tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss');

        console.info(`Running cron job at ${saoPauloTime}`);
    
        const resend = new Resend('re_S4vsLutT_2RxvtXU7yPFcyL4QKYimv1JB');
    
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: "danieldigitalcollege@gmail.com",
            subject: "subject",
            html: `<p>oioioioioioio</p>`
        });
    } catch (error) {
        console.log(error);
    }
}, {
    scheduled: true,
    timezone: "America/Sao_Paulo"
});

console.log('Cron job set up to run every day at 12:00 PM São Paulo time.');
