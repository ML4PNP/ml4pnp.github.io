
  ![on-push](../../actions/workflows/on-push.yaml/badge.svg)
  ![on-pull-request](../../actions/workflows/on-pull-request.yaml/badge.svg)
  ![on-schedule](../../actions/workflows/on-schedule.yaml/badge.svg)

  # ML4PNP's Website

  Visit **[ml4pnp.github.io](https://ml4pnp.github.io)** 🚀

  _Built with [Lab Website Template](https://greene-lab.gitbook.io/lab-website-template-docs)_

## News subscriptions

The News page and each post link to the Atom feed at `/feed.xml`. Publishing a post updates the feed automatically.

## Optional visitor likes

The site can display shared like counts for projects, software, publications and individual news posts. New entries use the existing content fields. Counts belong to the post URL, publication ID, or project/software link (title if a link is absent).

To enable likes from an authorised Cloudflare account, run from `_likes/`:

```sh
npx wrangler login
npx wrangler d1 create ml4pnp-likes
```

Copy the returned database ID into `wrangler.toml`, then run:

```sh
npx wrangler d1 execute ml4pnp-likes --remote --file=schema.sql
npx wrangler deploy
```

Set `likes_endpoint` in `_config.yaml` to the deployed HTTPS Worker URL and rebuild the site. For a preview origin, use a separate Worker and database and set its `SITE_ORIGIN` to the exact preview origin.

The browser remembers a separate random token for each item it likes. The likes database stores only item keys and tokens. The hosting provider receives network requests. Clearing browser storage or switching devices loses the ability to undo an earlier like. Counts describe reactions and cannot establish how many distinct people voted.
