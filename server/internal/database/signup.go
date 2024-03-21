package database

import "fmt"

func (s *service) Signup(query string) error {

	//creating the database here
	// _, err := s.db.Exec("CREATE DATABASE IF NOT EXISTS users")

	// if err != nil {
	// 	return err
	// }

	//creating the table here
	_, err := s.db.Exec("CREATE TABLE IF NOT EXISTS gopgdatabase (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, username VARCHAR(255) NOT NULL UNIQUE, password VARCHAR(255) NOT NULL)")

	if err != nil {
		return err
	}
	// _, err := s.db.Exec("INSERT INTO users (name, username, password) VALUES ($1, $2, $3)", name, username, password)
	// quering the user information into the database
	_, err = s.db.Exec(query)

	if err != nil {
		return err
	}

	if err != nil {
		return err
	}
	fmt.Println("success")
	return nil
}
