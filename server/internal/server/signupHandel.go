package server

import (
	"fmt"
	"net/http"

	// "time"

	_ "github.com/go-sql-driver/mysql"
	// "github.com/golang-jwt/jwt/v5"
	_ "github.com/joho/godotenv/autoload"
	"github.com/labstack/echo/v4"
	// "github.com/labstack/echo/v4/middleware"
	// "golang.org/x/crypto/bcrypt"
)

func (s *Server) SignUpHandel(c echo.Context) error {

	var user User
	if err := c.Bind(&user); err != nil {
		return err // Or return an HTTP error with more context
	}

	fmt.Println("correct")

	password, err := hashPassword(user.Password)
	name := user.Name
	username := user.Username

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "failed to hash password"})
	}

	err = s.db.Signup(fmt.Sprint("INSERT INTO users (name, username, password) VALUES ($1, $2, $3)", name, username, password))
	_ = s.db.Health()

	if err != nil {
		fmt.Println(err)
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "failed to insert user cdr"})

	}

	resp := map[string]string{
		"message": "Succussfully SignedIn",
		"status":  "OK",
	}

	return c.JSON(http.StatusOK, resp)

}
