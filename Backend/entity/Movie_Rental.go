package entity

type Movie_Rental struct {
	ID       string `gorm:"type:uuid;default:uuid_generate_v4();primary_key;column:id"`
	RentalID string `gorm:"type:uuid;column:rental_id;not null" validate:"required"`
	MovieID  string `gorm:"type:uuid;column:movie_id;not null" validate:"required"`
}
