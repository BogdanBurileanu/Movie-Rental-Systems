package entity

type Movie struct {
	ID              string  `gorm:"type:uuid;default:uuid_generate_v4();primary_key;column:id"`
	MovieName       string  `gorm:"type:varchar(255);not null"`
	Description     string  `gorm:"type:varchar(255);not null"`
	Director        string  `gorm:"type:varchar(255);not null"`
	Genre           string  `gorm:"type:varchar(255);not null"`
	Rating          string  `gorm:"type:varchar(255);not null"`
	Year_of_release int64   `gorm:"type:varchar(255);not null"`
	RentalCost      float64 `gorm:"type:float;not null"`
	Movies_Rentals  []Movie_Rental
}
