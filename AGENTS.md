# Story Archive publishing rules

- Every story the user asks to add must be treated as incomplete until its text, metadata, cover assets, static page, sitemap entry, and compliance record have been validated.
- After validation, commit the story and its required site updates to Git, publish them to the branch that deploys GitHub Pages, wait for deployment, and verify the public page and public story count.
- Do not tell the user that a story has been fully recorded or published when it exists only in the local working tree.
- If GitHub authentication or deployment is unavailable, clearly report that the work is local-only and keep the publication step pending.
- Preserve unrelated user changes and avoid staging files outside the intended story/site update scope.
