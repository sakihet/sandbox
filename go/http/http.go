package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	resp, err := http.Get("https://api.github.com/users/octocat/orgs")
	if err != nil {
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
	}
	fmt.Println("users/octocat/orgs")
	fmt.Println(string(body))

	resp2, err := http.Get("https://api.github.com/repos/golang/go")
	if err != nil {
	}
	defer resp.Body.Close()
	body2, err := ioutil.ReadAll(resp2.Body)
	if err != nil {
	}
	fmt.Println("repos/golang/go")
	fmt.Println(string(body2))
}
