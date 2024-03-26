package server

import (
	// "database/sql"
	// "fmt"
	"fmt"
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
	var user User
	err := c.Bind(&user)
	fmt.Println(user.Name)
	if err != nil {
		return err // Or return an HTTP error with more context
	}

	name := user.Name
	password := user.Password

	password, err := hashPassword(user.Password)
	resp := map[string]string{
		"message": "Succussfully LoggedIn",
		"status":  "OK",
	}

	return c.JSON(http.StatusOK, resp)
}
