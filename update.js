#!/usr/bin/env node
const childProcess = require("child_process");

const repos = [
  "git@github.com:elixir-lang/elixir",
  "git@github.com:framer/motion",
  "git@github.com:mui/material-ui",
  "git@github.com:pmndrs/jotai",
  "git@github.com:vercel/next.js",
  "git@github.com:tailwindlabs/tailwindcss",
  "git@github.com:TanStack/query",
];

repos.forEach((repo) => {
  const [_, name] = repo.split("/");
  console.log(`Updating ${name}...`);
  const cmd = `(cd ${name} && git pull) || git clone ${repo} || git gc`;
  childProcess.execSync(cmd, { stdio: "inherit" });
});
