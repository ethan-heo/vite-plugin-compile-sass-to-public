## vite-public-compile-sass-to-public

Plugin to make sass files compile from the source directory into public files

### Installation

```bash
# npm
npm install --save-dev vite-plugin-compile-sass-to-public

# yarn
yarn add -D vite-plugin-compile-sass-to-public

# pnpm
pnpm add -D vite-plugin-compile-sass-to-public
```

### Usage

```typescript
import compileSassToPublic from "vite-plugin-compile-sass-to-public";

export default {
    // ...
    plugins: [compileSassToPublic()],
};
```

### Options

```typescript
compileSassToPublic({
    watch: "", // Paths that VITE will monitor
    files: [
        // Setting file information to compile
        {
            src: "",
            output: {
                path: "",
                filename: "",
            },
            // Set the sass-embedded option
            sassOptions: {
                //...
            },
        },
    ],
});
```

### License

MIT
