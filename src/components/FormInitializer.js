import SurveyQuestion from './SurveyQuestion'

export const initializeSurveyScore = () => {
    return {
        your_niche: new SurveyQuestion("your_niche", 15, 0),
        clear_content_strategy: new SurveyQuestion("clear_content_strategy", 15, 0),
        current_level_of_engagement: new SurveyQuestion("current_level_of_engagement", 10, 0),
        analyze_content_performance: new SurveyQuestion("analyze_content_performance", 15, 0),
        leveraging_seo: new SurveyQuestion("leveraging_seo", 15, 0),
        plan_to_monetize_content: new SurveyQuestion("plan_to_monetize_content", 10, 0),
        preferred_time_for_creating: new SurveyQuestion("preferred_time_for_creating", 5, 0),
        collaboration_with_creators: new SurveyQuestion("collaboration_with_creators", 10, 0),
        platforms_actively_engaged_with: new SurveyQuestion("platforms_actively_engaged_with", 5, 0)
    };
}