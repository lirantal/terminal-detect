# Testing

## Test Command

Run the test suite with:

```sh
npm test
```

## Linting

Run lint checks with:

```sh
npm run lint
```

## Expectations

- Add or update tests for behavior changes.
- Run the relevant package-level checks before opening a PR.
- Keep generated coverage, build output, and dependency folders out of commits.

## Runtime compatibility

Tests use Node.js 24, the built-in test runner, and c8 coverage with the existing
80% thresholds. This exercises the real ESM supports-color dependency without
a Jest module transform. CI uses `npm ci` so `.npmrc` release-age and engine
policies apply to the locked dependency tree.

## Dependency release age

Dependabot waits 30 days for routine npm version updates. Security updates are
exempt from its cooldown and may arrive earlier; leave them unmerged until the
policy cutoff. Keep the install-time release-age configuration enabled.
Because `npm ci` trusts locked versions without rechecking publication age,
validate newly locked versions when reviewing an upgrade.
