package database

import "fmt"

func (s *service) Signup(name string, username string, password string) error {

	// _, err = s.db.Exec("INSERT INTO users (name, username, password) VALUES ($1, $2, $3)", name, username, password)
	// quering the user information into the database

	stmt, err := s.db.Prepare("INSERT INTO gopgdatabase (name, username, password) VALUES (?, ?, ?)")
	if err != nil {
		// Return the error if preparation fails
		return err
	}
	defer stmt.Close()

	_, err = stmt.Exec(name, username, password)
	if err != nil {
		// Return the error if execution fails
		return err
	}

	fmt.Println("success")
	return nil
}
