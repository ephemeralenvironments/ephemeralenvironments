+++
date = "2024-06-27T00:00:00Z"
title = "Agentic Workflows with Ephemeral Environments"
featuresslug = "agentic-workflows"
type = "feature"
hero = "/images/headers/collab.png"
metadescription = "Ephemeral environments make agentic development workflows more efficient, as they allow agents to deploy code, collect error logs, and resolve without human intervention."
pagetitle = "Agentic Workflows with Ephemeral Environments"
ogimage = "/images/headers/collab.png"
+++

Ephemeral environments make agentic development workflows more efficient, as they allow agents to deploy code, collect error logs, and resolve without human intervention. They’re an important security gate before production: devs can take more risks since they’re first deploying to a fully-isolated, zero trust environment. Agentic workflows enable devs to push a higher volume of code changes, and ephemeral environments ensure those features can get plenty of testing/review.

## The agentic dev/test loop

Typical agentic workflows happen at the local level. For example, a developer using an agent like <a href="https://github.com/anthropics/claude-code" target="_blank">Claude Code</a>, <a href="https://github.com/google-gemini/gemini-cli" target="_blank">Gemini CLI</a>, or <a href="https://devin.ai/" target="_blank">Devin</a> may have an inner dev loop that looks like this: 

- a developer prompts an agent to code a feature
- the developer runs the app locally, feeds any logs or findings back to the agent
- once a feature meets expectations, the agent commits and pushes code to source control

This workflow itself is limited: there’s a break in the loop once you get past the source control stage and move to the CI/CD stage. This disruption compounds over time, especially if you have to wait until your later-stage infra is ready. 

## Closing the loop with ephemeral environments

A feature’s local behavior might not match how it fares in staging or test environments (see <a href="https://12factor.net/dev-prod-parity" target="_blank">dev/prod parity</a>). With traditional static environments, there’s often significant wait time before you can view the env and pass that feedback back to the dev agent. 

Using ephemeral envs within agentic workflows can result in a more “complete” dev/test loop, and one with less human intervention:

- the agent commits and pushes to source control
- GitOps event hooks trigger an ephemeral environment based on the code changes
- an MCP server notifies the agent that the environment is ready
- the agent runs tests against the remote environment
- the agent collects service logs via the MCP server
- taking the test results and logs as context, the agent resolves any issues with the feature

Ephemeral envs lengthen the effective dev loop, and make it more self-sustained (the agent no longer needs to wait for human instruction after pushing code). 

## More code, more problems

Agentic workflows help dev teams push high volumes of code. This means that their infra and tooling need to be up to the task to verify *everything* before production. There are a few ways that ephemeral envs help teams ease into the velocity without bottlenecking:

- **Testing early + often**: agents are only as successful as their prompting (they’re prone to poor practices, bugs, messy code, etc.)
- **Run envs in parallel:** faster feature dev can lead to more outstanding PRs at any given time, meaning you’ll have multiple coexisting envs
- **Extra human verification:** devs, QA, product, and design should review agent-developed features with a fine-tooth comb; ephemeral env auth and access should be painless

## Sandboxing and de-risking

Agentic workflows, when not closely monitored, can introduce vulnerabilities into your codebase. This can happen from using outdated dependency versions or poor security practices. Ephemeral environments are an important pre-production gate for your agent’s code changes, since they allow you to safely test/verify without putting your codebase at risk.

- ephemeral envs are fully isolated from other envs in your workflow (e.g. services, dependencies, data)
- fires that happen in one ephemeral env are contained; won’t take down other services
- ephemeral envs are prod-like, so most bugs and vulnerabilities will surface at this stage
- manual testers and QA can spin up envs async and review extensively before approving

Ephemeral environments help devs feel confident in moving fast and taking risks, without the consequences of spreading fires to staging or prod. This is extremely valuable in agentic workflows, especially as devs adjust to velocity “growing pains”, as they can keep moving forward instead of walking on eggshells with their code changes.

---
### Content Contributors

{{< contributors username="nbeck415" >}}
