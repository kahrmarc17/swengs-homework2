from django.db import models


class Zoo(models.Model):
    name = models.TextField()
    address = models.TextField()
    postal_code = models.TextField()
    town = models.TextField(blank=True)
    land = models.TextField()
    telephone_number = models.TextField(blank=True)
    mail = models.TextField()

    def __str__(self):
        return self.name


class Zookeeper(models.Model):
    first_name = models.TextField()
    last_name = models.TextField()
    date_of_birth = models.DateField()
    adjusted_since = models.DateField()
    salary = models.PositiveIntegerField()
    telephone_number = models.TextField()

    def __str__(self):
        return '%s %s' % (self.first_name, self.last_name)


class Animal(models.Model):

    CHOICES1 = (
        ('gk', 'Großkatzen'),
        ('kk', 'Kleinkatzen'),
        ('p', 'Primaten'),
        ('h', 'Hunde'),
        ('k', 'Kamele'),
        ('gb', 'Großbären'),
        ('pf', 'Pferde')
    )

    STR_CHOICES1 = {key : value for (key,value) in CHOICES1}

    CHOICES2 = (
        ('l', 'Löwe'),
        ('p', 'Puma'),
        ('a', 'Affe'),
        ('w', 'Wolf'),
        ('tt', 'Trampeltier'),
        ('e', 'Esel'),
        ('le', 'Leopard'),
        ('lu', 'Luchs'),
        ('b', 'Braunbär')
    )

    STR_CHOICES2 = {key : value for (key,value) in CHOICES2}

    family = models.CharField(max_length=2, choices=CHOICES1, null=True)
    category = models.CharField(max_length=2, choices=CHOICES2, null=True)
    name = models.TextField()
    origin_land = models.TextField(blank=True)
    date_of_birth = models.DateField()
    food = models.TextField()
    healthy = models.BooleanField()
    zoo = models.ForeignKey(Zoo, on_delete=models.CASCADE, blank=True)
    zookeeper = models.ManyToManyField('Zookeeper', blank=True)


    def __str__(self):
        return '%s %s %s' % (self.STR_CHOICES1[self.family], self.STR_CHOICES2[self.category], self.name)





