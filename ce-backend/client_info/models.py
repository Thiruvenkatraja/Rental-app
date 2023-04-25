from django.db import models
from multiselectfield import MultiSelectField

# Create your models here.


class Clients(models.Model):
    Client_ID = models.AutoField(primary_key=True)
    Client_Name = models.CharField(max_length=30)
    Client_MobileNumber = models.BigIntegerField()
    Client_EMail = models.EmailField()
    Client_PropertyTitle = models.CharField(max_length=30)
    PropertyType = (
        ('Rent', 'Rent'),
        ('Sale', 'Sale'),
    )
    Client_PropertyType = models.CharField(choices=PropertyType, max_length=30)
    ListType = (
        ('Houses', 'Houses'),
        ('Apartments', 'Apartments'),
        ('Offices', 'Offices'),
    )
    Client_ListingType = models.CharField(choices=ListType, max_length=30)
    Client_Location = models.CharField(max_length=30)
    Client_Address = models.CharField(max_length=30)
    Client_ListingPrice = models.DecimalField(max_digits=7, decimal_places=2)
    Bedroom = (
        ('1', '1'),
        ('2', '2'),
        ('3', '3'),
    )
    Client_Bedroom = models.CharField(choices=Bedroom,max_length=30)
    Bathroom = (
        ('1', '1'),
        ('2', '2'),
        ('3', '3'),
    )
    Client_Bathroom = models.CharField(choices=Bathroom, max_length=30)
    ParkingLot = (
        ('1', '1'),
        ('2', '2'),
        ('3', '3'),
    )
    Client_ParkingLot = models.CharField(choices=ParkingLot, max_length=30)
    Client_ConstructionSqft = models.PositiveIntegerField()
    Client_LandSqft = models.PositiveIntegerField()
    Client_ShortDesc = models.TextField(max_length=240)
    Client_LongDesc = models.TextField(max_length=4000)
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
    Client_PropertyAmenities = MultiSelectField(
        max_length=120, choices=Amenities_List)
    Client_ImgURL = models.URLField(max_length=5000)

    class Meta:
        db_table = 'Clients'
        verbose_name_plural = 'Clients'

    def __str__(self):
        return f"{self.Client_Name}"
