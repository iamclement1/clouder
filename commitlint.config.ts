// const config = {
//   extends: ["@commitlint/config-conventional"],
//   rules: {
//     // TODO: Add Scope Enum Here
//     "type-enum": [
//       2,
//       "always",
//       [
//          "feat", //changes that introduce a new feature.
//          "fix", //changes that patch a bug.
//          "docs", // changes that affect the documentation.
//          "chore", //changes that aren't user-facing.
//          "style", //changes that don't affect code logic, such as white-spaces, formatting, missing semi-colons.
//          "refactor", //changes which neither fix a bug nor add a feature.
//         "ci",
//          "test", //changes that add missing tests or correct existing tests.
//          "perf", // changes which improve performance.
//          "revert", //changes that revert a previous commit.
//         "vercel",
//       ],
//     ],
//   },
// };

// export default config;

import conventionalCommit from "./conventionalCommit.json";

const typesEnum = Object.keys(conventionalCommit.types) as string[];
const scopesEnum = Object.keys(conventionalCommit.scopes) as string[];

const config = {
   extends: ["@commitlint/config-conventional"],
   rules: {
      "type-enum": [2, "always", typesEnum],
      "scope-case": [2, "always", ["camel-case"]],
      "scope-enum": [2, "always", scopesEnum],
      "subject-empty": [2, "never"],
      "subject-case": [2, "always", ["lower-case"]],
      "header-max-length": [2, "always", 72],
   },
};

export default config;