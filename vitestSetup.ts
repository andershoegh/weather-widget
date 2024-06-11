import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

afterEach(() => {
  cleanup();
});
