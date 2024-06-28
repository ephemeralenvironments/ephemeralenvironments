+++
date = "2024-06-27T00:00:00Z"
title = "Ephemeral Environments And DORA Metrics"
featuresslug = "dora-metrics"
type = "feature"
hero = "/images/headers/collab.png"
metadescription = "While ephemeral environments are only part of the DORA equation, they can have a significant impact on how you build, test, and ship software."
pagetitle = "Ephemeral Environments And DORA Metrics"
ogimage = "/images/headers/collab.png"
+++

<a href="https://dora.dev">DevOps Research and Assessment (DORA) Metrics</a> are the industry standard when it comes to measuring your engineering org’s performance. Improving your DORA Metrics isn’t something that you can do overnight; good DORA Metrics are a result of dedicated efforts to improve your infrastructure, people, and process.

While ephemeral environments are only part of the DORA equation, they can have a significant impact on how you build, test, and ship software. Once you remove infrastructure blocks and pain points from the equation, you’ll start to see improvements to people *and* process.

## Change lead time

**Change lead time** is measured as the length of time it takes for a commit to get deployed to production. For reference, top-performing orgs have change lead time of under an hour, whereas low-scorers can have lead times upwards of months. With ephemeral environments, you can shorten lead times by:

- **Testing code changes immediately:** instead of waiting for staging to free up, your PR’s ephemeral environment spins up quickly and automatically, allowing you to test, iterate, and test again until your changes are ready for merge.
- **Sharing environments across teams:** design, product, and code reviews don’t have to be a big deal anymore — you can simply direct your collaborators to a live, interactive environment reflecting your code changes for async feedback.

## Deployment frequency

**Deployment frequency** reflects how often code changes are deployed to production. Many orgs aspire to achieve multiple deployments per day: true continuous delivery. Deployments happen more often with ephemeral environments, owing to:

- **Smaller deployments:** since you can test earlier and at the PR level, you can deploy individual commits as soon they’re verified by your CI/CD pipeline.
- **Testing features individually:** with static environment limitations, E2E and integration tests happen infrequently, and against multiple features at a time. Testing features independently quickly identifies bugs and regressions and eliminates unnecessary wait time.

## Change fail percentage

**Change fail percentage** is the percentage of deployments that cause production failures. Keeping this number low is crucial; and anything above 10% can indicate that your delivery process and/or test suite are not reliable. You can keep this low with ephemeral environments for a few reasons:

- **More opportunities for stakeholder review:** traditional static staging environments aren’t usually shareable or user-friendly. When done right, ephemeral environments are easily distributed across teams and domains, getting more eyes and more UAT on your code changes.
- **Increased test exposure:** in addition to enabling more human testing, ephemeral environments also enable easier, more frequent automated testing. Since they can spin up earlier on in the pipeline, you’ll be testing against code changes multiple times per day, instead of per week — meaning features can be tested 10-40x *more* prior to deployment.

## Failed deployment recovery time

**Failed deployment recovery time** is the average time it takes to restore service after a deployment causes a failure or introduces a regression. Ideally, there should be little to no turnaround. Ephemeral environments help you keep this low by:

- **Expediting your remediations:** test your patches and hotfixes as soon as they’re ready, getting instant feedback and then merging/deploying within the same hour.
- **Production-like conditions:** your ephemeral environments simulate production pretty closely, so you can test remediations/patches with your entire test suite before they hit production *and* have more confidence once you deploy.

---
### Content Contributors

{{< contributors username="nbeck415" >}}