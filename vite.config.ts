import { defineConfig ,loadEnv} from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({mode})=>{
// mảng // npm in --save-dev process
  const env =loadEnv(mode, process.cwd(),"")
  return ({
    plugins: [react()],
    server: {
      port: parseInt(env.VITE_PORT),
    },
  })
});
