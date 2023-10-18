import { NextResponse } from "next/server"
import openai from "@/openai"

export async function POST (request: Request) {
    // weather data in the body of the post request
    const { weatherData } = await request.json();
    
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        temperature: 0.8,
        n: 1,
        stream: false,
        messages: [
            {
                role: 'system',
            content: `Pretend you are a meterologist on TV giving today's local weather forecast. Be sure to state the city you are providing the summary for. Draft a brief paragraph that is easy to understand and give the readers an idea as far as what to prepare for (i.e. rain, snow, sun) and how they can best deal with the conditions. Assume the data came from the local weather team and not the user`,
            }, {
                role: 'user',
                content: `Hi, can I please get a summary of todays weather, use the following information to get eth weather data: ${JSON.stringify(
                    weatherData
                    )}`
            }
        ]
    })
    const { choices } = response;
    if (choices && choices.length > 0) {
        const messageContent = choices[0].message.content;
        console.log("Message Content: ", messageContent);

        return NextResponse.json(messageContent);
    } else {
        console.error("No response message found.");
        return NextResponse.json({ message: "No response message found." });
    }
}