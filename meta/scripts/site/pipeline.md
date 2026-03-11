# Scripts pipeline

```
pnpm --filter @datakit/scripts run extractDocs   (tsx meta/scripts/site/extract-docs.ts)
│
│  reads:   packages/tx/src/**/*.ts
│           packages/types/src/*.ts
│  writes:  meta/site/src/lib/data/generated/tx.json
│           meta/site/src/lib/data/generated/types.json
│
└─► pnpm --filter @datakit/scripts run generateLlms  (tsx meta/scripts/site/generate-llms.ts)
    │
    │  reads:   meta/site/src/lib/data/generated/tx.json
    │           meta/site/src/lib/data/generated/types.json
    │  writes:  meta/site/static/llms.txt          ← public, served at /datakit/llms.txt
    │           meta/site/static/llms-full.txt     ← public, served at /datakit/llms-full.txt
    │           meta/site/static/data/tx.json      ← public, served at /datakit/data/tx.json
    │           meta/site/static/data/types.json   ← public, served at /datakit/data/types.json
    │
    └─► vite build
        │
        │  reads:   meta/site/src/lib/data/generated/*.json  (bundled into JS chunks)
        │           meta/site/static/**                       (copied verbatim)
        │  writes:  meta/site/build/
        │
        └─► adapter-static  →  meta/site/build/   (deployed to GitHub Pages)
```

Both scripts run automatically via the `prebuild` / `predev` hooks in `meta/site/package.json`.
All outputs are gitignored — they are regenerated on every build.

## Consumer map

| File | Consumer |
|---|---|
| `meta/site/src/lib/data/generated/tx.json` | SvelteKit `load()` functions — bundled into JS, never directly fetchable |
| `meta/site/src/lib/data/generated/types.json` | Same |
| `meta/site/static/data/tx.json` | External HTTP clients: AI tools, RAG pipelines, IDE plugins |
| `meta/site/static/data/types.json` | Same |
| `meta/site/static/llms.txt` | LLM discovery crawlers (analogous to `robots.txt`) |
| `meta/site/static/llms-full.txt` | LLMs needing full API context in one file |
