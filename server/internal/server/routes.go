package server

import (
	"database/sql"
	"fmt"
	"net/http"
	"os"

	"time"

	_ "github.com/go-sql-driver/mysql"
	"github.com/golang-jwt/jwt/v5"
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
	e.GET("/authentication/sinup", s.LoginHandel)

	// e.GET("/authentication")

	return e
}

var secretKey = []byte("secret-key")

func CreateToken(username string) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256,
		jwt.MapClaims{
			"username": username,
			"exp":      time.Now().Add(time.Hour * 24).Unix(),
		})
	tokenString, err := token.SignedString(secretKey)
	if err != nil {
		return "", err
	}
	return tokenString, nil
}

func VerifyToken(tokenString string) error {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) { return secretKey, nil })
	if err != nil {
		return err
	}

	if !token.Valid {
		return fmt.Errorf("invalid token")

	}
	return nil
}

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

	var user User

	resp := map[string]string{
		"message": "Succussfully LoggedIn",
		"status":  "OK",
	}

	return c.JSON(http.StatusOK, resp)
}

func (s *Server) SignUpHandel(c echo.Context) error {

	var user User
	if err := c.Bind(&user); err != nil {
		return err // Or return an HTTP error with more context
	}

	// fmt.Println("db not correct")
	dbhost := os.Getenv("DB_HOST")
	dbport := os.Getenv("DB_PORT")
	dbuser := os.Getenv("DB_USER")
	dbpassword := os.Getenv("DB_PASSWORD")
	dbname := os.Getenv("DB_DATABASE")

	connectionString := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		dbhost, dbport, dbuser, dbpassword, dbname)
	db, err := sql.Open("postgres", connectionString)
	defer db.Close()
	if err != nil {
		fmt.Println("db not correct")
	}

	password, err := hashPassword(user.Password)
	name := user.Name
	username := user.Username

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "failed to hash password"})
	}

	_, err = db.Exec("INSERT INTO users (name, username, password) VALUES ($1, $2, $3)", name, username, password)

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "failed to create user"})
	}

	resp := map[string]string{
		"message": "Succussfully SignedIn",
		"status":  "OK",
	}

	return c.JSON(http.StatusOK, resp)

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
