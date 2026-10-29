# Release

This project uses Changesets CLI 2 with changesets/action 1. CI uses the committed
npm lockfile and runs `npm ci`; engine, source and release-age settings remain
in `.npmrc`.

## Record a change

For a published runtime change, run `npm exec changeset` or write a patch
changeset under `.changeset/` using the package name from `package.json`.
CI-only and test-only changes usually do not need a version bump.

## Version and publish

The release workflow runs on `master`. It creates the release PR or runs the
configured publish command. For an intentional manual release, use:

```sh
npm run version
npm run build
npm run release
```

`npm run release` publishes packages; do not run it merely to validate a PR.
