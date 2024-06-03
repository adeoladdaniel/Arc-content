import axios from "axios";

export const submitPrompt = async (prompt2) => {
    const reqBody = {prompt: prompt2};
    console.log("req body: ", reqBody)
    let {data} = await axios.post("https://gptprompt-2oqq2we3iq-uc.a.run.app", reqBody, {
        headers: {
           'Content-Type': 'application/x-www-form-urlencoded',
        }});
    return data.result;
}

export const generatePrompt = (formValues) => {
    return `My name is ${formValues.name}. I'm a Content Creator who creates on youtube, instagram and facebook.
    I'm interested in creating for ${formValues.target_audience} community. 
    The 3 Topics I'm interested in my niche are how to monetize your audience, how to make your first video and how to speak better on camera
    What are 5 topics that would be good for people interested in my niche? 
    My goal for my social media channel is to focus on impact.
    
    I want to know how I can maximize value in this ${formValues.target_audience} community? 
    My initial strategy was to develop ${formValues.clear_strategy_text} but what is the right content strategy to adopt if I want these ${formValues.engagement_strategy_text} . 
    What metrics should I pay attention to according to my different platforms youtube, instagram and facebook. 
    Who are 5 creators across multiple platforms making content to ${formValues.target_audience} and how to monetize your audience, how to make your first video and how to speak better on camera topics?
    Can you give me 10 content ideas for this ${formValues.target_audience} and how to monetize your audience, how to make your first video and how to speak better on camera topics that would help me leverage SEO, increase monetization and get discovered faster`
}

