const openai = require('openai');

const openAiClient = new openai.OpenAI(process.env.OPENAI_API_KEY);

const getSuggestedPlaces = async (city) => {
  const completion = await openAiClient.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: `You are a helping agent and you need to tell the places one can visit in the City mentioned in ~~.Don't give me any other details other than name of the places to be visited, description. The City is ~${city}~.Repond only in json format. The key in the response containg the list is placesToVisit, The list contains objects with fields name, description`,
      },
    ],
    temperature: 0.5,
    response_format: { type: 'json_object' },
  });

  // eslint-disable-next-line no-console
  console.log(JSON.stringify(completion, null, 2));

  return JSON.parse(completion.choices[0].message.content).placesToVisit;
};

module.exports = {
  getSuggestedPlaces,
};
