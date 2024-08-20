#!/usr/bin/env node
import childProcess from "child_process";

const repos = [
  "git@github.com:elixir-lang/elixir",
  "git@github.com:facebook/lexical",
  "git@github.com:framer/motion",
  "git@github.com:mui/material-ui",
  "git@github.com:pmndrs/jotai",
  "git@github.com:tailwindlabs/tailwindcss",
  "git@github.com:TanStack/query",
  "git@github.com:react-hook-form/react-hook-form",
  "git@github.com:vercel/next.js",
];

repos.forEach((repo) => {
  const [_, name] = repo.split("/");
  console.log(`Updating ${name}...`);
  const cmd = `(cd ${name} && git pull) || git clone ${repo} || git gc`;
  childProcess.execSync(cmd, { stdio: "inherit" });
});
