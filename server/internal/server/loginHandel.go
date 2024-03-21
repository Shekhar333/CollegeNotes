package server

import (
	// "database/sql"
	// "fmt"
	"net/http"
	// "os"

	// "time"

	_ "github.com/go-sql-driver/mysql"
	// "github.com/golang-jwt/jwt/v5"
	_ "github.com/joho/godotenv/autoload"
	"github.com/labstack/echo/v4"
	// "github.com/labstack/echo/v4/middleware"
	// "golang.org/x/crypto/bcrypt"
)

func (s *Server) LoginHandel(c echo.Context) error {
	// w.Header().Set("Content-Type", "application/json")
	// var u User
	// json.NewDecoder(r.Body).Decode(&u)

	// // here i have to implement database to check the data provided by user for authentication
	// if u.username == "check" && u.password == "check" {
	// 	tokenString, err := CreateToken(u.username)
	// 	if err != nil {
	// 		w.WriteHeader(http.StatusInternalServerError)
	// 	}
	// 	w.WriteHeader(http.StatusOK)
	// 	fmt.Fprint(w, tokenString)
	// 	return
	// } else {
	// 	w.WriteHeader(http.StatusUnauthorized)
	// 	fmt.Fprint(w, "Invalid Credentials")
	// }

	// var user User

	resp := map[string]string{
		"message": "Succussfully LoggedIn",
		"status":  "OK",
	}

	return c.JSON(http.StatusOK, resp)
}
