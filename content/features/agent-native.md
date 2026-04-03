+++
date = "2021-08-13T00:00:00Z"
title = "Agent-Native Ephemeral Environments"
featuresslug = "agent-native"
type = "feature"
hero = "/images/headers/cli.png"
metadescription = "Ephemeral environments are most valuable when they're designed for agents from the ground up. This way, your agents can use them autonomously to test their own features."
pagetitle = "Agent-Native Ephemeral Environments"
ogimage = "/images/headers/collab.png"
+++

Ephemeral environments are a useful tool for coding agents to self-verify their code changes before pinging a dev to review. They enable agents to iterate continuously towards higher quality code. However, you have to make sure your agents know how to use them *and* that the environments are built with the tools agents need to leverage them.

## Envs Should Be Agent-Accessible
- agents need to be able to spin up and access environments without human intervention
- ephemeral environments should expose a programmatic interface that agents can call (CLI preferably, MCP in relevant cases)
- environment interfaces should be well documented so agents know how to use them and don't spend too many tokens learning/re-learning
- access controls and credentials should be scoped so agents can operate autonomously within safe boundaries

## Define Your Environment Workflows for Agents
- define an agent's dev workflow (e.g. agent makes PR → environment builds → agent pulls logs → if no errors, agent runs tests → if tests pass, ping dev) in your agent's Markdown config file
- outline how agents should rework a feature based on a failed test or error logs
- define environment naming conventions so agents can find the correct environment for a PR 
  
## Why Agent Native Benefits Developers
- agent native means strong docs, programmatic interfaces, and self-service dev workflows
- agents thrive when they can quickly find answers and course correct themselves, otherwise they fall off track and fail to complete tasks
- these are all components of good developer experience (DevEx): in making your platform agent-friendly, you're also making it developer-friendly
- any points of friction for agents will likely point to a greater pain point across your codebase


----
### Content Contributors


{{< contributors username="nbeck415" >}}
