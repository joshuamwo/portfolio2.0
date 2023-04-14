[![Deploy with Vercel](https://vercel.com/button)]

# yullu.me

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [PlanetScale](https://planetscale.com)
- **Authentication**: [NextAuth.js](https://next-auth.js.org)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## TODO

- [ ] guestbook page coming soon
- [ ] blog page coming soon
- [ ] Global `404` page coming soon
- [ ] Move redirects to end of routing stack (not in `next.config.js`)
- [ ] Use new support for API routes in `app` (not ready yet)
- [ ] Improved scroll position support in `app/` (not implemented yet)

You can learn more about the `app/` directory [here](https://beta.nextjs.org/docs).

## Running Locally

This application requires Node.js v16.13+.

```bash
git clone https://github.com/leerob/portfolio2.0.git
cd portfolio2.0
pnpm install
pnpm run setup # Remove all of my personal information
pnpm dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/joshuamwo/portfolio2.0/.env.example).

## Cloning / Forking

Please review the [license](https://github.com/joshuamwo/portfolio2.0/blob/master/LICENSE.txt) and remove all of my personal information (resume, blog posts, images, etc.) by running `pnpm run setup`.
