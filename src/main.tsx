import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

async function enableMocking() {
  if (import.meta.env.MODE !== "production") {
    return
  }

  const { worker } = await import("./mocks/browser")
  return worker.start({
    serviceWorker: {
      url: `${import.meta.env.BASE_URL}mockServiceWorker.js`,
    },
  })
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>,
  )
})
