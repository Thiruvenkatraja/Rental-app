from django.db import models
from multiselectfield import MultiSelectField
from property_info.models import Property

# Create your models here.
PropertyType = (
    ('Rent', 'Rent'),
    ('Sale', 'Sale'),
)

ListType = (
    ('Houses', 'Houses'),
    ('Apartments', 'Apartments'),
    ('Offices', 'Offices'),
    ('Villas', 'Villas'),
    ('Ranch', 'Ranch'),
    ('Condominium', 'Condominium'),
    ('Bungalow', 'Bungalow'),
)

BHK = (
    ('1BHK', '1BHK'),
    ('2BHK', '2BHK'),
    ('3BHK', '3BHK'),
)

Status = (
    ('Active', 'Active'),
    ('In-Active', 'In-Active'),
)

ParkingLot = (
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
)


class Clients(models.Model):
    Client_ID = models.AutoField(primary_key=True)
    Client_PropertyID = models.ForeignKey(
        Property, on_delete=models.PROTECT, null=True)
    Client_FullName = models.CharField(max_length=30)
    Client_MobileNumber = models.BigIntegerField(null=True)
    Client_EMail = models.EmailField(null=True)
    Client_Block = models.CharField(max_length=1)
    Client_FlatNo = models.CharField(max_length=4)
    Client_PropertyTitle = models.CharField(max_length=30, null=True)
    Client_PropertyType = models.CharField(
        choices=PropertyType, max_length=30, null=True)
    Client_ListingType = models.CharField(choices=ListType, max_length=30)
    Client_Location = models.CharField(max_length=30, null=True)
    Client_Address = models.CharField(max_length=30, null=True)
    Client_ListingPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True)
    Client_BHK = models.CharField(choices=BHK, max_length=4)
    Client_Status = models.CharField(choices=Status, max_length=10)
    Client_ParkingLot = models.CharField(
        choices=ParkingLot, max_length=30, null=True)
    Client_ConstructionSqft = models.PositiveIntegerField(null=True)
    Client_LandSqft = models.PositiveIntegerField(null=True)
    Client_ShortDesc = models.TextField(max_length=240, null=True)
    Client_LongDesc = models.TextField(max_length=4000, null=True)
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
        max_length=120, choices=Amenities_List, null=True)
    Client_ImgURL = models.URLField(max_length=5000, null=True)

    class Meta:
        db_table = 'Clients'
        verbose_name_plural = 'Clients'

    def __str__(self):
        return f"{self.Client_FullName}"
