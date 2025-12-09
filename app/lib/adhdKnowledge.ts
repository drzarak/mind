/**
 * ADHD Knowledge Base
 * 
 * Curated information about ADHD symptoms, treatments, and coping strategies
 * to provide evidence-based support in conversations.
 */

export interface ADHDKnowledgeItem {
  topic: string;
  content: string;
  keywords: string[];
}

export const adhdKnowledgeBase: ADHDKnowledgeItem[] = [
  {
    topic: "Time Management Strategies",
    content: `Time management for ADHD involves breaking tasks into smaller steps, using visual timers, and the Pomodoro Technique (25-minute focused work sessions). Create external structure through calendars, alarms, and routines. Time blindness is common with ADHD, so use tools that make time visible.`,
    keywords: ["time management", "pomodoro", "time blindness", "productivity", "scheduling", "planning"]
  },
  {
    topic: "Rejection Sensitive Dysphoria (RSD)",
    content: `RSD is an extreme emotional sensitivity to perceived rejection or criticism, common in ADHD. It can cause intense emotional pain and fear of failure. Coping strategies include: cognitive reframing, recognizing RSD triggers, self-compassion practices, and understanding that the emotional intensity is neurological, not reality-based.`,
    keywords: ["RSD", "rejection", "sensitivity", "emotional", "dysphoria", "criticism"]
  },
  {
    topic: "Executive Function Support",
    content: `Executive functions include working memory, cognitive flexibility, and impulse control. Support strategies: external reminders, body doubling, breaking tasks into steps, transition warnings, and reducing decision fatigue. Use tools like task lists, visual schedules, and accountability partners.`,
    keywords: ["executive function", "working memory", "planning", "organization", "cognitive", "flexibility"]
  },
  {
    topic: "ADHD Symptoms in Adults",
    content: `Adult ADHD symptoms include difficulty concentrating, restlessness, time management challenges, forgetfulness, impulsivity, and emotional dysregulation. Symptoms may be subtler than in children, often presenting as chronic disorganization, procrastination, or relationship difficulties.`,
    keywords: ["adult adhd", "symptoms", "diagnosis", "attention", "focus", "hyperactivity"]
  },
  {
    topic: "Medication and Treatment",
    content: `ADHD treatment often combines medication (stimulants like Adderall/Ritalin or non-stimulants like Strattera) with behavioral strategies. Medication can improve focus and impulse control. Therapy, coaching, and lifestyle changes (exercise, sleep, nutrition) are also crucial components of comprehensive treatment.`,
    keywords: ["medication", "treatment", "stimulants", "therapy", "adderall", "ritalin", "strattera"]
  },
  {
    topic: "Hyperfocus and Flow States",
    content: `Hyperfocus is intense concentration on engaging tasks, common in ADHD. While it can be productive, it may cause neglect of other responsibilities. Harness it by: scheduling hyperfocus time, setting alarms for breaks, and choosing focus tasks wisely. Balance hyperfocus with structure.`,
    keywords: ["hyperfocus", "flow", "concentration", "intense focus", "productivity"]
  },
  {
    topic: "Emotional Regulation",
    content: `ADHD affects emotional regulation, leading to quick mood changes and intense emotions. Strategies: mindfulness, naming emotions, physical movement, deep breathing, and creating space before responding. Recognize emotions are valid but may be amplified by ADHD.`,
    keywords: ["emotions", "regulation", "mood", "feelings", "dysregulation", "mindfulness"]
  },
  {
    topic: "Sleep and ADHD",
    content: `ADHD often disrupts sleep patterns through racing thoughts, delayed sleep phase, and medication effects. Improve sleep with: consistent sleep schedule, wind-down routine, limit screens before bed, cool dark room, and consider melatonin. Good sleep improves ADHD symptoms.`,
    keywords: ["sleep", "insomnia", "rest", "bedtime", "melatonin", "sleep hygiene"]
  },
  {
    topic: "Procrastination and Motivation",
    content: `ADHD brains need urgency or interest for motivation. Combat procrastination with: artificial deadlines, reward systems, starting with tiny steps, body doubling, and making tasks more engaging. Understand procrastination isn't laziness—it's executive dysfunction.`,
    keywords: ["procrastination", "motivation", "deadline", "task initiation", "getting started"]
  },
  {
    topic: "Relationships and Communication",
    content: `ADHD impacts relationships through forgetfulness, impulsivity, emotional intensity, and distraction. Improve connections by: communicating about ADHD needs, setting reminders for important dates, active listening techniques, and partnering on systems for shared responsibilities.`,
    keywords: ["relationships", "communication", "partner", "social", "friendship", "family"]
  }
];

/**
 * Search the ADHD knowledge base for relevant information
 */
export function getADHDKnowledge(query: string): string {
  const lowerQuery = query.toLowerCase();
  
  // Find matching items based on keywords or topic
  const matches = adhdKnowledgeBase.filter(item => {
    const topicMatch = item.topic.toLowerCase().includes(lowerQuery);
    const keywordMatch = item.keywords.some(keyword => 
      lowerQuery.includes(keyword) || keyword.includes(lowerQuery)
    );
    return topicMatch || keywordMatch;
  });

  if (matches.length === 0) {
    return "I don't have specific information on that topic in my knowledge base, but I'm here to help explore your concerns together.";
  }

  // Return the most relevant match or combine multiple matches
  if (matches.length === 1) {
    return matches[0].content;
  }

  // Return multiple matches
  return matches.map(m => `**${m.topic}:** ${m.content}`).join('\n\n');
}

/**
 * Generate contextual follow-up questions based on the conversation topic
 */
export function generateFollowUpQuestions(userMessage: string): string[] {
  const lowerMessage = userMessage.toLowerCase();
  
  // Topic-specific follow-up questions
  if (lowerMessage.includes('anxious') || lowerMessage.includes('anxiety') || lowerMessage.includes('worry')) {
    return [
      "What situations tend to trigger your anxiety the most?",
      "Have you noticed any physical sensations when you feel anxious?",
      "What coping strategies have you tried so far?"
    ];
  }
  
  if (lowerMessage.includes('focus') || lowerMessage.includes('concentrate') || lowerMessage.includes('distract')) {
    return [
      "What time of day do you find it easiest to focus?",
      "Are there specific environments where you concentrate better?",
      "What's usually going on when you notice your mind wandering?"
    ];
  }
  
  if (lowerMessage.includes('overwhelm') || lowerMessage.includes('too much') || lowerMessage.includes('stressed')) {
    return [
      "What's feeling most overwhelming right now?",
      "Have you been able to take any breaks lately?",
      "What would feel manageable to tackle first?"
    ];
  }
  
  if (lowerMessage.includes('procrastinat') || lowerMessage.includes('avoid') || lowerMessage.includes('put off')) {
    return [
      "What do you think is holding you back from starting?",
      "Is there a smaller version of this task you could begin with?",
      "What would make this task feel more appealing or urgent?"
    ];
  }
  
  if (lowerMessage.includes('motivat') || lowerMessage.includes('energy') || lowerMessage.includes('tired')) {
    return [
      "How have your sleep and eating patterns been?",
      "What activities usually help boost your energy?",
      "Are there any small wins we can celebrate from today?"
    ];
  }
  
  // General therapeutic follow-ups
  return [
    "How long have you been experiencing this?",
    "What do you think would be most helpful to focus on?",
    "How is this affecting your daily life?"
  ];
}
