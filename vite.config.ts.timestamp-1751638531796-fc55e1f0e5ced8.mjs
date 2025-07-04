// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      format: {
        comments: false
      }
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules/react/") || id.includes("node_modules/react-dom/") || id.includes("node_modules/react-router-dom/")) {
            return "react-vendor";
          }
          if (id.includes("node_modules/framer-motion/") || id.includes("node_modules/lucide-react/")) {
            return "ui-vendor";
          }
          if (id.includes("/src/pages/") && !id.includes("/src/pages/Home")) {
            return id.split("/src/pages/")[1].split(".")[0].toLowerCase();
          }
        },
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]"
      }
    },
    sourcemap: false,
    cssCodeSplit: true
  },
  server: {
    headers: {
      "Cache-Control": "public, max-age=31536000"
    }
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgYnVpbGQ6IHtcbiAgICBtaW5pZnk6ICd0ZXJzZXInLFxuICAgIHRlcnNlck9wdGlvbnM6IHtcbiAgICAgIGNvbXByZXNzOiB7XG4gICAgICAgIGRyb3BfY29uc29sZTogdHJ1ZSxcbiAgICAgICAgZHJvcF9kZWJ1Z2dlcjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBmb3JtYXQ6IHtcbiAgICAgICAgY29tbWVudHM6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3M6IChpZCkgPT4ge1xuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzL3JlYWN0LycpIHx8IFxuICAgICAgICAgICAgICBpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS8nKSB8fCBcbiAgICAgICAgICAgICAgaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tLycpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3JlYWN0LXZlbmRvcic7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vJykgfHwgXG4gICAgICAgICAgICAgIGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0LycpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3VpLXZlbmRvcic7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnL3NyYy9wYWdlcy8nKSAmJiAhaWQuaW5jbHVkZXMoJy9zcmMvcGFnZXMvSG9tZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gaWQuc3BsaXQoJy9zcmMvcGFnZXMvJylbMV0uc3BsaXQoJy4nKVswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdhc3NldHMvW25hbWVdLVtoYXNoXS5qcycsXG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiAnYXNzZXRzL1tuYW1lXS1baGFzaF0uanMnLFxuICAgICAgICBhc3NldEZpbGVOYW1lczogJ2Fzc2V0cy9bbmFtZV0tW2hhc2hdLltleHRdJ1xuICAgICAgfSxcbiAgICB9LFxuICAgIHNvdXJjZW1hcDogZmFsc2UsXG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ2FjaGUtQ29udHJvbCc6ICdwdWJsaWMsIG1heC1hZ2U9MzE1MzYwMDAnLFxuICAgIH0sXG4gIH0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGluY2x1ZGU6IFsncmVhY3QnLCAncmVhY3QtZG9tJywgJ3JlYWN0LXJvdXRlci1kb20nXSxcbiAgfSxcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUyxvQkFBb0I7QUFDdFAsT0FBTyxXQUFXO0FBRWxCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxlQUFlO0FBQUEsTUFDakI7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLFVBQVU7QUFBQSxNQUNaO0FBQUEsSUFDRjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sY0FBYyxDQUFDLE9BQU87QUFDcEIsY0FBSSxHQUFHLFNBQVMscUJBQXFCLEtBQ2pDLEdBQUcsU0FBUyx5QkFBeUIsS0FDckMsR0FBRyxTQUFTLGdDQUFnQyxHQUFHO0FBQ2pELG1CQUFPO0FBQUEsVUFDVDtBQUNBLGNBQUksR0FBRyxTQUFTLDZCQUE2QixLQUN6QyxHQUFHLFNBQVMsNEJBQTRCLEdBQUc7QUFDN0MsbUJBQU87QUFBQSxVQUNUO0FBQ0EsY0FBSSxHQUFHLFNBQVMsYUFBYSxLQUFLLENBQUMsR0FBRyxTQUFTLGlCQUFpQixHQUFHO0FBQ2pFLG1CQUFPLEdBQUcsTUFBTSxhQUFhLEVBQUUsQ0FBQyxFQUFFLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxZQUFZO0FBQUEsVUFDOUQ7QUFBQSxRQUNGO0FBQUEsUUFDQSxnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFdBQVc7QUFBQSxJQUNYLGNBQWM7QUFBQSxFQUNoQjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sU0FBUztBQUFBLE1BQ1AsaUJBQWlCO0FBQUEsSUFDbkI7QUFBQSxFQUNGO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsU0FBUyxhQUFhLGtCQUFrQjtBQUFBLEVBQ3BEO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
