import mentalHealthCoach from './mentalHealthCoach';

export const agentConfigs = {
  mentalHealthCoach,
};

export type AgentConfigName = keyof typeof agentConfigs;

export default agentConfigs;
