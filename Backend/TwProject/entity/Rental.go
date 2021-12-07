package entity

type Rental struct {
	ID         string  `gorm:"type:uuid;default:uuid_generate_v4();primary_key;column:id"`
	UserID     string  `gorm:"type:uuid;not null;column:user_id" validate:"required"`
	Total_Cost float64 `gorm:"type:float;not null"`
	Movies_Rentals  []Movie_Rental 
}
