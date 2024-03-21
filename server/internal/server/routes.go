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
	"github.com/labstack/echo/v4/middleware"
	"golang.org/x/crypto/bcrypt"
)

func hashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	return string(bytes), err
}

type User struct {
	Name     string `json:"name"`
	Username string `json:"username"`
	Password string `json:"password"`
}

func (s *Server) RegisterRoutes() http.Handler {
	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.GET("/", s.HelloWorldHandler)
	e.GET("/health", s.healthHandler)

	e.POST("/authenticatoin", s.HandelAuthentication)
	e.POST("/authentication/sinup", s.SignUpHandel)
	e.GET("/authentication/login", s.LoginHandel)

	// e.GET("/authentication")

	return e
}

func (s *Server) HandelAuthentication(c echo.Context) error {
	return c.JSON(http.StatusOK, "correct")
}

func (s *Server) HelloWorldHandler(c echo.Context) error {
	resp := map[string]string{
		"message": "Hello World",
	}

	return c.JSON(http.StatusOK, resp)
}

func (s *Server) healthHandler(c echo.Context) error {
	return c.JSON(http.StatusOK, s.db.Health())
}
