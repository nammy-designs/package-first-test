import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "es",
        sourcemap: true,
      },
    ],
    external: ["react", "react-dom"], // Exclude react and react-dom as peer dependencies
    plugins: [
      resolve(),
      commonjs(),
      postcss({
        extract: true, // Extract CSS to a separate file (optional)
        minimize: true, // Minimize the output CSS in production
      }),
      typescript(),
    ],
  },
  {
    input: "dist/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [
      dts({
        respectExternal: true,
        compilerOptions: { skipLibCheck: true },
      }),
    ],
    external: [/\.css$/], // Ignore CSS files in declarations
  },
];
