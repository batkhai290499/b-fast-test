# About Project

- It was builed for bfast can check ref
- Signed by Khainb

## Technologies Used

- [Next.js 15](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

### Features

- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
- ✅ Strict Mode for TypeScript and React 18
- 🌐 Multi-language (i18next) with [i18next](https://www.i18next.com/)
- ⌨️ Form handling with React Hook Form
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with Commitlint

## How to Use

### Use the template with nextui-cli

To clone project based on using `nextui-cli`, run the following command:

```bash
git clone git@github.com:batkhai290499/b-fast-test.git
cd b-fast-test
bun install
```

Clone a file **.env.local** from **.env.example**

```shell
.env.local
```

Then, you can run the project locally in development mode with live reload by executing:

```shell
bun run dev
```

### Prerequisites

- Node.js (v18.20.4)
- bun (v1.1.7)
- nvm (v0.39.7)

### Commit Message Format

```text
feat(ticket ID):[**user**] Test messages
```

### Project structure

```shell
.
├── README.md                       # README file
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── src
│   ├── app                         # Next JS App (App Router)
│       ├── [lng]                   # This pattern support for dynamic languages
│           ├── page.tsx            # page.tsx
│           ├── layout.tsx          # layout.tsx. We can custome layout here
│       ├── global.css              # Global css, all variables of colors, fontSize were defined here
│   ├── components                  # React components
│   ├── hooks                       # hooks functions
│   ├── i18n                        # Locales folder (i18next)
│   ├── lib                         # Store common functions or helper
│   ├── providers                   # SolanaWalletProvider.tsx, RectQueryProvider.tsx
│   ├── store                       # Store for Zustand
│   ├── middleware.ts               # middleware to handle requests

├── .env.example                    # Tailwind CSS configuration
├── .eslint.config.mjs                 # Eslint configuration
├── .gitignore                      # Git configuration
├── commitlint.config.ts            # Commitlint configuration
├── prettier.config.mjs            # Commitlint configuration
├── next.config.mjs                 # NextJS 14 configuration
├── tailwind.config.ts              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

### Workflow

1. Create your feature branch (git branch feature/**[project-task ID]**). Example: **feat/PI-number**
2. Commit your changes (feat(ticket ID):[**user**] Test messages. Example: git commit -m 'feat(PI-1711):[Khainb] Test commitlint 1')
3. Push to the branch (git push origin feature/YourFeature)
4. Open a pull request with description and follow template below:

```
Changelog - 06/07/2024

**Branch: feat/PI-number**

**What does this PR do?**
* Development: Briefly describe the new feature or development (If any)
* Improvement: Briefly describe the new feature or improvement (if any)
* Bugfix: Briefly describe the bug and how it's fixed (If any)
*
**Why are we making these changes?**
* Reason for the changes, including any related problem or issue this addresses.

**Dependencies**
* List any dependencies, issues or block.

**Scope impact**
* Sign in

```

### Acceptance criteria

1. A FILE IS NOT ALLOWED TO EXCEED 400 LINES OF CODE. You must separate code when the number of lines of code over 400 lines.

2. To create a component, we can put it into here: **/src/components/**. And following name convention below:

- For folder, using PascalCase. Example: DemoComponent
- For file, default(index.tsx) and PascalCase are allowed. Example: index.tsx, PascalComponent.tsx
- For name of component, using PascalCase.
- And the component must be exported default, export {} is not allowed. Example: **export default Component;**

3. DO NOT use async callbacks in the useEffect(). [Reference](https://dev.to/jasmin/how-to-use-async-function-in-useeffect-5efc)

4. Fix all of critcal errors in Sonarqube

### VS code extentions

- Headwind
- ESLint
- GitLens
- GitGraph
- SVG
- ES7+ React/Redux/React-Native snippets
- Test

## License

- All copyright belong to my team [Khainb]()
- Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).
