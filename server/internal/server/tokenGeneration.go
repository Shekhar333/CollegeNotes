package server

import (
	// "database/sql"
	"fmt"
	// "net/http"
	// "os"

	"time"

	_ "github.com/go-sql-driver/mysql"
	"github.com/golang-jwt/jwt/v5"
	_ "github.com/joho/godotenv/autoload"
	// "github.com/labstack/echo/v4"
	// "github.com/labstack/echo/v4/middleware"
	// "golang.org/x/crypto/bcrypt"
)

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
