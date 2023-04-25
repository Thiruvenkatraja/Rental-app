from django.db import models
from multiselectfield import MultiSelectField
# Create your models here.


class Property(models.Model):
    Property_ID = models.AutoField(primary_key=True)
    PropertyTitle = models.CharField(max_length=100)
    Property_Choices = (
        ('Rent', 'Rent'),
        ('Sale', 'Sale')
    )
    PropertyType = models.CharField(max_length=100, choices=Property_Choices)
    Listing_Choices = (
        ('Houses', 'Houses'),
        ('Apartment', 'Apartment'),
        ('Offices', 'Offices'),
        ('Villa', 'Villa'),
        ('Ranch', 'Ranch'),
        ('Condominium', 'Condominium'),
        ('Estate', 'Estate'),
        ('Bungalow','Bungalow'),
    )
    Property_ListingType = models.CharField(
        max_length=100, choices=Listing_Choices)
    Property_Location = models.CharField(max_length=100)
    Property_Address = models.CharField(max_length=200)
    Property_OverallSqft = models.PositiveIntegerField()
    Property_Blocks = models.PositiveIntegerField()
    Property_Floors = models.PositiveIntegerField()
    Property_Flats = models.PositiveIntegerField()
    Property_1BHK = models.PositiveIntegerField()
    Property_2BHK = models.PositiveIntegerField()
    Property_3BHK = models.PositiveIntegerField()
    Amenities_List = [
        ('garden', 'Garden'),
        ('security_cameras', 'Security Cameras'),
        ('laundry', 'Laundry'),
        ('internet', 'Internet'),
        ('pool', 'Pool'),
        ('video_surveillance', 'Video Surveillance'),
        ('jacuzzi', 'Jacuzzi'),
        ('elevator', 'Elevator'),
        ('vigilance', 'Vigilance'),
        ('dish', 'Dish'),
        ('solar_panel', 'Solar Panel'),
        ('garage', 'Garage')
    ]
    Property_Amenities = MultiSelectField(
        max_length=120, choices=Amenities_List)
    Property_ImgURL = models.URLField(max_length=5000)

    class Meta:
        db_table = 'Property'
        verbose_name_plural = 'Property'

    def __str__(self):
        return f"{self.PropertyTitle}"
    