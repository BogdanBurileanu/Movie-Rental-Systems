package main

import (
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"time"

	"backendMovieRental/Backend/entity"
	"github.com/dgrijalva/jwt-go"
	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"github.com/sirupsen/logrus"
)

var db *gorm.DB
var err error

///JWT token
//var jwtKey = []byte("secret_key")

const DIALECT = "postgres"
const HOST = "localhost"
const DBPORT = "5432"
const USER = "postgres"
const NAME = "postgres"
const PASSWORD = "metalgreu98" ///here introduce your password !!!!

var (
	user = &entity.User{

		FirstName:   "Andrei",
		LastName:    "Bugariu",
		Email:       "andreibugariu@gmail.com",
		Password:    "DJSDNASDKNA",
		Age:         21,
		Address:     "Timisoara",
		PhoneNumber: 90712987,
		BankDetails: "IBAN1293Y2138Y",
		Role:        "USER",
	}
	/*movies = []entity.Movie{

		{
			Name:            "Cars1",
			Description:     "Movie for children",
			Direction:       "Disney",
			Genre:           "Animation",
			Rating:          "Prea bun",
			Year_of_release: 2018,
			RentalCost:      500,
		},
		{
			Name:            "Cars2",
			Description:     "Movie for children",
			Direction:       "Disney",
			Genre:           "Animation",
			Rating:          "Prea bun",
			Year_of_release: 2018,
			RentalCost:      500,
		},
		{
			Name:            "Cars3",
			Description:     "Movie for children",
			Direction:       "Disney",
			Genre:           "Animation",
			Rating:          "Prea bun",
			Year_of_release: 2018,
			RentalCost:      500,
		},
	}
	/*rental = []entity.Rental{
		{UserID: "ebfe8e10-b5f5-45d9-a7c6-b3f9ac6fcdcf", Total_Cost: 12},
		{UserID: "ebfe8e10-b5f5-45d9-a7c6-b3f9ac6fcdcf", Total_Cost: 18},
		{UserID: "ebfe8e10-b5f5-45d9-a7c6-b3f9ac6fcdcf", Total_Cost: 82},
	}*/

	/*movies_rentals=[]entity.Movie_Rental{
		{RentalID:"774a6d44-8977-4514-844e-81bcf9c6c773",MovieID: "34a6af4a-7461-45ac-be39-4ad5be2e888d"},
		{RentalID:"d6f731a2-fb4b-4f20-9cb7-9d9da92ba744",MovieID: "34a6af4a-7461-45ac-be39-4ad5be2e888d"},
		{RentalID:"d6f731a2-fb4b-4f20-9cb7-9d9da92ba744",MovieID: "2241da57-9947-46e9-a7cc-cda6f549e80d"},
	}*/
)

func main() {
	///Connect to database
	dbURI := fmt.Sprintf("host=%s user=%s dbname=%s sslmode=disable password=%s port=%s", HOST, USER, NAME, PASSWORD, DBPORT)

	db, err = gorm.Open(DIALECT, dbURI)

	if err != nil {
		log.Fatal(err)
	} else {
		fmt.Printf("Successfully connected to database")
	}

	defer db.Close()
	db.AutoMigrate(&entity.User{})
	db.AutoMigrate(&entity.Movie{})
	db.AutoMigrate(&entity.Movie_Rental{})
	db.AutoMigrate(&entity.Rental{})

	//db.Create(user)
	/*for idx := range movies {
		db.Create(&movies[idx])
	}*/

	router := mux.NewRouter()

	router.HandleFunc("/users", GetUsers).Methods("GET")
	router.HandleFunc("/user/{id}", GetUser).Methods("GET")
	router.HandleFunc("/user", CreateUser).Methods("POST")
	router.HandleFunc("/user/{id}", DeleteUser).Methods("DELETE")
	router.HandleFunc("/user/{id}", UpdateUser).Methods("PUT")

	router.HandleFunc("/movies", GetMovies).Methods("GET")
	router.HandleFunc("/movie/{id}", GetMovie).Methods("GET")
	router.HandleFunc("/movie", CreateMovie).Methods("POST")
	router.HandleFunc("/movie/{id}", DeleteMovie).Methods("DELETE")
	router.HandleFunc("/movie/{id}", UpdateMovie).Methods("PUT")

	router.HandleFunc("/rentals", GetRentals).Methods("GET")
	router.HandleFunc("/rental/{id}", GetRental).Methods("GET")
	router.HandleFunc("/rental", CreateRental).Methods("POST")
	router.HandleFunc("/rental/{id}", DeleteRental).Methods("DELETE")

	router.HandleFunc("/movies_rentals", GetMovies_Rentals).Methods("GET")
	router.HandleFunc("/movie_rental/{id}", GetMovie_Rental).Methods("GET")
	router.HandleFunc("/movie_rental", CreateMovie_Rental).Methods("POST")
	router.HandleFunc("/movie_rental/{id}", DeleteMovie_Rental).Methods("DELETE")

	router.HandleFunc("/login", Login)
	//router.HandleFunc("/home", Home).Methods("GET")
	router.HandleFunc("/logout", DeleteCookie)


	log.Fatal(http.ListenAndServe(":8080", router))

}



var jwtKey = []byte("secret_key")



type Claims struct {
	Email string `json:"username"`
	jwt.StandardClaims
}

//Encode uses base64 as main encoding method.
func Encode(input string) string {
	return base64.StdEncoding.EncodeToString([]byte(input))
}

//HasError uses logger to log the error if any has occured.
func HasError(err error, message string) bool {

	if err != nil {
		logrus.WithError(err).Error(message)
		return true
	}

	return false
}


func Login(w http.ResponseWriter, r *http.Request) {
	reqbody := r.Body
	bodyBytes, err := ioutil.ReadAll(reqbody)

	if HasError(err,"Internal Error. Unable to read data") {
		http.Error(w,"Internal Error. Please try again later", http.StatusInternalServerError)
		return
	}

	var user entity.User
	err = json.Unmarshal(bodyBytes, &user)

	if HasError(err,"Internal Error. Unmarshal problem") {
		http.Error(w,"Internal Error. Please try again later", http.StatusInternalServerError)
		return
	}

	var userDB entity.User
	result := db.Find(&userDB, "email=?", user.Email)

	if result.RecordNotFound() {
		http.Error(w, "Email does not exist", http.StatusUnauthorized)
		return
	}

	if user.Password != userDB.Password {
		http.Error(w, "Incorrect password", http.StatusUnauthorized)
		return
	}

	expirationTime := time.Now().Add(time.Minute * 5)

	claims := &Claims{
		Email: user.Email,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: expirationTime.Unix(),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString(jwtKey)

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	http.SetCookie(w,
		&http.Cookie{
			Name:    "token",
			Value:   tokenString,
			Expires: expirationTime,
		})

}

func IsAuth(w http.ResponseWriter, r *http.Request)  (bool, error) {
	cookie, err := r.Cookie("token")
	if err != nil {
		if err == http.ErrNoCookie {
			w.WriteHeader(http.StatusUnauthorized)
			return false, err
		}
		w.WriteHeader(http.StatusBadRequest)
		return false, err
	}

	tokenStr := cookie.Value

	claims := &Claims{}

	tkn, err := jwt.ParseWithClaims(tokenStr, claims,
		func(t *jwt.Token) (interface{}, error) {
			return jwtKey, nil
		})

	if err != nil {
		if err == jwt.ErrSignatureInvalid {
			w.WriteHeader(http.StatusUnauthorized)
			return false, err
		}
		w.WriteHeader(http.StatusBadRequest)
		return false, err
	}

	if !tkn.Valid {
		w.WriteHeader(http.StatusUnauthorized)
		return false, err
	}
	
	return true, nil
}


func DeleteCookie(w http.ResponseWriter, r *http.Request) {
	c := http.Cookie{
			Name:   "token",
			MaxAge: -1}
	http.SetCookie(w, &c)

	w.Write([]byte("old cookie deleted!\n"))
}

//Get all  users
func GetUsers(w http.ResponseWriter, r *http.Request) {


	isAuth, err := IsAuth(w, r)
	if HasError(err,"Error in authentication function") {
		http.Error(w,"Internal Error. Please try again later", http.StatusInternalServerError)
		return
	}

	if isAuth {

	var user []entity.User
	result := db.Find(&user)
	if result.RecordNotFound() {
		http.Error(w, "Not fount", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(&user)
}

}

//Get specific user and their rentals
func GetUser(w http.ResponseWriter, r *http.Request) {
	//Check the credentials provided in the request. Also check for errors at authentication.
	isAuth, err := IsAuth(w, r)

	if HasError(err,"Error in authentication function") {
		http.Error(w,"Internal Error. Please try again later", http.StatusInternalServerError)
		return
	}

	if isAuth {
	params := mux.Vars(r)

	var user entity.User
	var rentals []entity.Rental
	result := db.Where("id = ?", params["id"]).First(&user)
	if result.RecordNotFound() {
		http.Error(w, "Not fount", http.StatusNotFound)
		return
	}

	db.Model(&user).Related(&rentals)

	user.Rentals = rentals

	json.NewEncoder(w).Encode(user)
}

}

//Create a new user
func CreateUser(w http.ResponseWriter, r *http.Request) {



	var user entity.User

	json.NewDecoder(r.Body).Decode(&user)

	createUser := db.Create(&user)
	err = createUser.Error
	if err != nil {
		json.NewEncoder(w).Encode(err)
	} else {
		json.NewEncoder(w).Encode(&user)
	}
}

//Delete a specific user by ID
func DeleteUser(w http.ResponseWriter, r *http.Request) {

	isAuth, err := IsAuth(w, r)
	if HasError(err,"Error in authentication function") {
		http.Error(w,"Internal Error. Please try again later", http.StatusInternalServerError)
		return
	}

	if isAuth {

	params := mux.Vars(r)

	var user entity.User

	result := db.Where("id = ?", params["id"]).First(&user)
	if result.RecordNotFound() {
		http.Error(w, "Not fount", http.StatusNotFound)
		return
	}

	result = db.Delete(&user)
	if result.Error != nil {
		http.Error(w, "can't delete users", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode("Userul is succefully deleting")
}
}

//Update a specific user by ID
func UpdateUser(w http.ResponseWriter, r *http.Request) {
	isAuth, err := IsAuth(w, r)
	if HasError(err,"Error in authentication function") {
		http.Error(w,"Internal Error. Please try again later", http.StatusInternalServerError)
		return
	}

	if isAuth {
	var user entity.User
	params := mux.Vars(r)
	json.NewDecoder(r.Body).Decode(&user)

	result := db.Model(&entity.User{}).Where("id= ?", params["id"]).Updates(user)
	if result.Error != nil {
		http.Error(w, "Can't update", http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode("Userul is succefully UPTDATE")
}
}

//////////////////////////////MOVIES

//Get all  movies
func GetMovies(w http.ResponseWriter, r *http.Request) {
	isAuth, err := IsAuth(w, r)
	if HasError(err,"Error in authentication function") {
		http.Error(w,"Internal Error. Please try again later", http.StatusInternalServerError)
		return
	}

	if isAuth {

	var movie []entity.Movie
	result := db.Find(&movie)
	if result.RecordNotFound() {
		http.Error(w, "Not fount", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(&movie)
}

}

//Get specific movie
func GetMovie(w http.ResponseWriter, r *http.Request) {
	isAuth, err := IsAuth(w, r)
	if HasError(err,"Error in authentication function") {
		http.Error(w,"Internal Error. Please try again later", http.StatusInternalServerError)
		return
	}

	if isAuth {
	params := mux.Vars(r)

	var movie entity.Movie
	var movies_rentals []entity.Movie_Rental
	result := db.Where("id = ?", params["id"]).First(&movie)
	if result.RecordNotFound() {
		http.Error(w, "Not fount", http.StatusNotFound)
		return
	}

	db.Model(&movie).Related(&movies_rentals)

	movie.Movies_Rentals = movies_rentals

	json.NewEncoder(w).Encode(movie)
}

}

//Create a new Movie
func CreateMovie(w http.ResponseWriter, r *http.Request) {
	isAuth, err := IsAuth(w, r)
	if HasError(err,"Error in authentication function") {
		http.Error(w,"Internal Error. Please try again later", http.StatusInternalServerError)
		return
	}

	if isAuth {
	var movie entity.Movie

	json.NewDecoder(r.Body).Decode(&movie)

	createMovie := db.Create(&movie)
	err = createMovie.Error
	if err != nil {
		json.NewEncoder(w).Encode(err)
	} else {
		json.NewEncoder(w).Encode(&movie)
	}
}
}

//Delete a specific movie by ID
func DeleteMovie(w http.ResponseWriter, r *http.Request) {
	isAuth, err := IsAuth(w, r)
	if HasError(err,"Error in authentication function") {
		http.Error(w,"Internal Error. Please try again later", http.StatusInternalServerError)
		return
	}

	if isAuth {
	params := mux.Vars(r)

	var movie entity.Movie

	result := db.Where("id = ?", params["id"]).First(&movie)
	if result.RecordNotFound() {
		http.Error(w, "Not fount", http.StatusNotFound)
		return
	}

	result = db.Delete(&movie)
	if result.Error != nil {
		http.Error(w, "can't delete", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode("The movie is successfully deleted")
}
}

func UpdateMovie(w http.ResponseWriter, r *http.Request) {
	isAuth, err := IsAuth(w, r)
	if HasError(err,"Error in authentication function") {
		http.Error(w,"Internal Error. Please try again later", http.StatusInternalServerError)
		return
	}

	if isAuth {
	var movie entity.Movie
	params := mux.Vars(r)
	json.NewDecoder(r.Body).Decode(&movie)

	result := db.Model(&entity.Movie{}).Where("id= ?", params["id"]).Updates(movie)
	if result.Error != nil {
		http.Error(w, "Can't update", http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode("Movie is succefully UPDATED")
}
}

///this is rental sector

func GetRentals(w http.ResponseWriter, r *http.Request) {
	isAuth, err := IsAuth(w, r)
	if HasError(err,"Error in authentication function") {
		http.Error(w,"Internal Error. Please try again later", http.StatusInternalServerError)
		return
	}

	if isAuth {

	var rental []entity.Rental
	result := db.Find(&rental)
	if result.RecordNotFound() {
		http.Error(w, "Not found", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(&rental)
}

}

//Get specific rental
func GetRental(w http.ResponseWriter, r *http.Request) {
	isAuth, err := IsAuth(w, r)
	if HasError(err,"Error in authentication function") {
		http.Error(w,"Internal Error. Please try again later", http.StatusInternalServerError)
		return
	}

	if isAuth {
	params := mux.Vars(r)

	var rental entity.Rental
	var movies_rentals []entity.Movie_Rental
	result := db.Where("id = ?", params["id"]).First(&rental)
	if result.RecordNotFound() {
		http.Error(w, "Not found", http.StatusNotFound)
		return
	}

	db.Model(&rental).Related(&movies_rentals)

	rental.Movies_Rentals = movies_rentals

	json.NewEncoder(w).Encode(rental)
}

}

//Create a new Rental
func CreateRental(w http.ResponseWriter, r *http.Request) {
	isAuth, err := IsAuth(w, r)
	if HasError(err,"Error in authentication function") {
		http.Error(w,"Internal Error. Please try again later", http.StatusInternalServerError)
		return
	}

	if isAuth {
	var rental entity.Rental

	json.NewDecoder(r.Body).Decode(&rental)

	createRental := db.Create(&rental)
	err = createRental.Error
	if err != nil {
		json.NewEncoder(w).Encode(err)
	} else {
		json.NewEncoder(w).Encode(&rental)
	}
}
}

//Delete a specific rental by ID
func DeleteRental(w http.ResponseWriter, r *http.Request) {
	isAuth, err := IsAuth(w, r)
	if HasError(err,"Error in authentication function") {
		http.Error(w,"Internal Error. Please try again later", http.StatusInternalServerError)
		return
	}

	if isAuth {
	params := mux.Vars(r)

	var rental entity.Rental

	result := db.Where("id = ?", params["id"]).First(&rental)
	if result.RecordNotFound() {
		http.Error(w, "Not fount", http.StatusNotFound)
		return
	}

	result = db.Delete(&rental)
	if result.Error != nil {
		http.Error(w, "can't delete", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode("Rental is successfully deleted")
}
}

/////This is movie-rental sector

func GetMovies_Rentals(w http.ResponseWriter, r *http.Request) {
	isAuth, err := IsAuth(w, r)
	if HasError(err,"Error in authentication function") {
		http.Error(w,"Internal Error. Please try again later", http.StatusInternalServerError)
		return
	}

	if isAuth {

	var movie_rental []entity.Movie_Rental
	result := db.Find(&movie_rental)
	if result.RecordNotFound() {
		http.Error(w, "Not fount", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(&movie_rental)
}

}

func GetMovie_Rental(w http.ResponseWriter, r *http.Request) {
	isAuth, err := IsAuth(w, r)
	if HasError(err,"Error in authentication function") {
		http.Error(w,"Internal Error. Please try again later", http.StatusInternalServerError)
		return
	}

	if isAuth {
	params := mux.Vars(r)

	var movie_rental entity.Movie_Rental
	result := db.Where("id = ?", params["id"]).First(&movie_rental)
	if result.RecordNotFound() {
		http.Error(w, "Not found", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(movie_rental)
}

}

func CreateMovie_Rental(w http.ResponseWriter, r *http.Request) {
	isAuth, err := IsAuth(w, r)
	if HasError(err,"Error in authentication function") {
		http.Error(w,"Internal Error. Please try again later", http.StatusInternalServerError)
		return
	}

	if isAuth {
	var movie_rental entity.Movie_Rental
	

	json.NewDecoder(r.Body).Decode(&movie_rental)

	createMovie_Rental := db.Create(&movie_rental)
	err = createMovie_Rental.Error
	if err != nil {
		json.NewEncoder(w).Encode(err)
	} else {
		json.NewEncoder(w).Encode(&movie_rental)
	}
}
}

func DeleteMovie_Rental(w http.ResponseWriter, r *http.Request) {
	isAuth, err := IsAuth(w, r)
	if HasError(err,"Error in authentication function") {
		http.Error(w,"Internal Error. Please try again later", http.StatusInternalServerError)
		return
	}

	if isAuth {
	params := mux.Vars(r)

	var movie_rental entity.Movie_Rental

	result := db.Where("id = ?", params["id"]).First(&movie_rental)
	if result.RecordNotFound() {
		http.Error(w, "Not found", http.StatusNotFound)
		return
	}

	result = db.Delete(&movie_rental)
	if result.Error != nil {
		http.Error(w, "can't delete", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode("Rental is successfully deleted")
}
}

