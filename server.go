package main

import (
  "log"
  "net/http"
)

func main() {
  dfs := http.FileServer(http.Dir("."))
  dfsPaths := []string { "/", "/assets", "/bower_components", "/components" }

  for _, p := range dfsPaths {
    http.HandleFunc(p, dfs.ServeHTTP)
  }

  log.Fatal(http.ListenAndServe(":8080", nil))
}
