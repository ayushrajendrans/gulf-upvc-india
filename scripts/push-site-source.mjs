import { spawn } from "node:child_process";
import process from "node:process";

let input = "";
process.stdin.setEncoding("utf8");
for await (const chunk of process.stdin) input += chunk;

const { remoteUrl, token, branch = "main" } = JSON.parse(input);

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: ["ignore", "pipe", "pipe"],
      ...options,
    });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => (stdout += chunk));
    child.stderr.on("data", (chunk) => (stderr += chunk));
    child.on("close", (code) => {
      if (code === 0) {
        resolve({ stdout, stderr });
      } else {
        reject(new Error(`${command} ${args.join(" ")} failed with ${code}\n${stderr}`));
      }
    });
  });
}

const commonEnv = {
  ...process.env,
  GIT_CONFIG_COUNT: "1",
  GIT_CONFIG_KEY_0: `http.${remoteUrl}.extraheader`,
  GIT_CONFIG_VALUE_0: `Authorization: Bearer ${token}`,
};

await run("git", ["push", "site-origin", `HEAD:${branch}`], { env: commonEnv });
