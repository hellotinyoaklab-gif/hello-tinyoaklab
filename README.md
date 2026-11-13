# Tiny Oak Lab

The independent Tiny Oak Lab studio site. LookPiko is a featured product. The site has its own repository and can be hosted independently.

The site uses static HTML, CSS, and a small JavaScript file. It needs no package install, build step, database, or environment variables. The project inquiry form opens the visitor’s email app with a prepared draft.

```powershell
npm.cmd run check
npm.cmd run preview
```

The preview runs at `http://127.0.0.1:4174/`.

## Publish on Cloudflare Pages Free

For a manual deployment, sign in to Cloudflare, then open **Workers & Pages** and choose **Create application → Pages → Direct Upload**. Use `hello-tinyoaklab` as the project name if available. Upload the `public/` directory, or a ZIP with `index.html` at its root, and deploy. The project gets a free `pages.dev` address.

For automatic deployment from GitHub, choose **Connect to Git** instead of Direct Upload when creating the project. Give Cloudflare access to this repository only. Choose `main`, the **None** framework preset, leave the build command empty, and set the build output directory to `public`. Cloudflare Pages supports private GitHub repositories.

Keep credentials and local preview output out of Git. The repository and the deployed public site have separate access settings. Use the published HTTPS address for any later website verification in Play Console.

[Direct Upload guide](https://developers.cloudflare.com/pages/get-started/direct-upload/) · [Git integration guide](https://developers.cloudflare.com/pages/get-started/git-integration/) · [Free plan limits](https://developers.cloudflare.com/pages/platform/limits/)

Edit content in `public/index.html` and styles in `public/styles.css`. The public work section uses LookPiko’s existing launch artwork and links. The oak and worktable artwork were created for this site. See `public/assets/licenses/` for font licenses.
