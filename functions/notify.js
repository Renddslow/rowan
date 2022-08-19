const twilio = require('twilio');

const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

exports.handler = async (event, context) => {
    const { headcount, family } = JSON.parse(event.body);

    await client.messages.create({
        body: `The ${family} family is coming to Rowan's party! They are bringing ${headcount} guests.`,
    });

    return {
        statusCode: 200,
    };
}